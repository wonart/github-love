import createActions from './createActions'

const { collection } = createActions('mentors');

export function requestMentorMain(params){
    const meta = {
        notification: {
            success: '어서오세요~ 당골래입니다!',
            error: '아이구~ 서버에 문제가...',
        },
    };
    return collection(
        {...params},
        meta,
    );
}
