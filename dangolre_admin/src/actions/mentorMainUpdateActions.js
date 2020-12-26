import createActions from './createActions';

const { update } = createActions('mentors');

export function mentorMainUpdateActions(id, data, onSuccess, onFailure) {
  const meta = {
    notification: { success: '데이터 수정이 성공적으로 완료되었습니다!' },
    onSuccess: res => onSuccess(res),
    onFailure: res => onFailure(res),
  };
  return update(
    id,
    data,
    {},
    meta,
  );
}
