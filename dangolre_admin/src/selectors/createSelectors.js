import { createSelector } from 'reselect';
import { CREATE, UPDATE, FETCH_LIST, FETCH, DELETE } from 'actions/actionTypes';

export default function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];
  const objsSelector = state => resourceSelector(state).objs;
  const idSelector = state => resourceSelector(state).id;
  const objSelector = createSelector(
    idSelector,
    objsSelector,
    (id, objs) => {
      if(objs[id]){
        return objs[id];
      } else {
        return {};
      }
    }
  );
  const collectionSelector = createSelector(
    resourceSelector,
    (resourceSelector) => {
        const { keys, objs } = resourceSelector;
        return keys.map(id => objs[id]);
    }
  );

  const loadingStateSelector = state => resourceSelector(state).loadingState;
  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createLoadingStateSelector = state =>
    loadingStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateLoadingStateSelector = state =>
    loadingStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH}/${resourceName}`];
  const deleteLoadingStateSelector = state =>
    loadingStateSelector(state)[`${DELETE}/${resourceName}`];

  const collectionErrorStateSelector = state =>
    errorStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createErrorStateSelector = state =>
    errorStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateErrorStateSelector = state =>
    errorStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberErrorStateSelector = state =>
    errorStateSelector(state)[`${FETCH}/${resourceName}`];
  const deleteErrorStateSelector = state =>
    errorStateSelector(state)[`${DELETE}/${resourceName}`];

  return {
    objSelector,
    objsSelector,
    collectionSelector,
    collectionLoadingStateSelector,
    collectionErrorStateSelector,
    createLoadingStateSelector,
    createErrorStateSelector,
    updateLoadingStateSelector,
    updateErrorStateSelector,
    memberLoadingStateSelector,
    memberErrorStateSelector,
    deleteLoadingStateSelector,
    deleteErrorStateSelector
  };
}
