import createActions from './createActions'

const { create } = createActions('admin_user');

export function requestAdminLogin(data, onComplete){
    return create(
        data,
        {},
        {
          notification: { success: '로그인 되었습니다!' },
          onSuccess: onComplete,
        },
      );
}
