import { handle } from 'redux-pack';
import {
  CREATE,
  UPDATE,
  FETCH,
  FETCH_LIST,
  RESET,
} from 'actions/actionTypes';

export default (...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => {
    const initState = {
      keys: [],
      objs: {},
      loadingState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      errorState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
    };
    apiReducers[name] = (state = initState, action) => {
      const { type, payload, meta } = action;
      const { resourceName, key } = meta || {};

      if (resourceName !== name) {
        return state;
      }
      switch (type) {
        case CREATE:
        case UPDATE:
        case FETCH:
        case FETCH_LIST: {
          return handle(state, action, {
            start: prevState => ({
              ...prevState,
              loadingState: {
                ...prevState.loadingState,
                [`${type}/${name}`]: true,
              },
              errorState: {
                ...prevState.errorState,
                [`${type}/${name}`]: false,
              },
            }),
            success: prevState => {
              const { data } = payload;

              console.log('Api data success :', name);
              console.log('Api data contents :', data);

              if (type === FETCH_LIST) {      
                const keys = data.map(obj => obj['id']);
                const objs = data.reduce((nextObjs, obj) => ({
                  ...nextObjs,
                  [obj[key]]: obj,
                }), {});
                return {
                  ...prevState,
                  keys,
                  objs: { ...prevState.objs, ...objs },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                };
              } else {
                const id = data[key];
                return {
                  ...prevState,
                  id,
                  objs: { ...prevState.objs, [id]: data },
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                };
              }
            },
            failure: prevState => {
              const { errorMessage } = payload.response ? payload.response.data : {};
              return {
                ...prevState,
                loadingState: {
                  ...prevState.loadingState,
                  [`${type}/${name}`]: false,
                },
                errorState: {
                  ...prevState.errorState,
                  [`${type}/${name}`]: errorMessage || true,
                },
              };
            }
          });
        }
        case RESET:
          return initState;
        default:
          return state;
      }
    };
    return apiReducers;
  }, {});
};
