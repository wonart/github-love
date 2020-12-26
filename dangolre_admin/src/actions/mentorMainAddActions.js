import createActions from './createActions';

const { create } = createActions('mentors');

export function mentorMainAddActions(data, onSuccess, onFailure) {
  return create(
    data,
    {},
    {
      notification: { success: '데이터 생성이 성공적으로 완료되었습니다!' },
      onSuccess: res => onSuccess(res),
      onFailure: res => onFailure(res),
    },
  );
}
