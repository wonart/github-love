import createActions from './createActions'

const { member } = createActions('mentors');

export function mentorMainMemberActions(id, params){
    const meta = {
        notification: {
            success: '어서오세요~ 당골래입니다!',
            error: '아이구~ 서버에 문제가...',
        },
    };
    return member(
        id,
        {...params},
        meta,
    );
}
