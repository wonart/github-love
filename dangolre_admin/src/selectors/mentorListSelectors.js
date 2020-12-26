import createSelectors from './createSelectors';

export const {
    resourceSelector: mentorsSelector,
    collectionSelector: mentorsListSelector,
    collectionLoadingStateSelector: mentorsListLoadingStateSelector,
} = createSelectors('mentors');
