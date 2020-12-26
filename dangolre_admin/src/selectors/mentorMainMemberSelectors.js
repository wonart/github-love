import createSelectors from './createSelectors';

export const {
    resourceSelector: mentorMainMemberSelector,
    objSelector: mentorMainMemberDataSelector,
    memberLoadingStateSelector: mentorMainMemberDataLoadingStateSelector,
} = createSelectors('mentors');
