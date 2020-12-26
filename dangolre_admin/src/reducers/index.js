import createReducers from './createReducers';

const apiReducers = createReducers('admin_user', 'mentors', 'mentors_detail');

// 리듀서 모아서 내보내기
export default {
    ...apiReducers,
};