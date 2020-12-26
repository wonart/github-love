import createActions from './createActions'

const { destroy } = createActions('mentors_detail');

export function mentorDetailDeleteActions(id, params){
    const meta = {
        notification: {
            success: '선생님 상세 데이터를 삭제했습니다.',
            error: '아이구~ 서버에 문제가...',
        },
    };
    return destroy(
        id,
        {...params},
        meta,
    );
}
