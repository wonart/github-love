import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import thunk from 'redux-thunk';

// 리덕스 스토어 생성
const reduxCreateStore = initStates => createStore(
    combineReducers(reducers),  // 리듀서 결합
    initStates,                 // 스테이터스 초기화
    // 미들웨어
    composeWithDevTools(applyMiddleware(
        thunk,
        reduxPackMiddleware,
      ),
    ),
);

export default reduxCreateStore;