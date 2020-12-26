import createSelectors from './createSelectors';

export const {
    resourceSelector: mentorDetailMemberSelector,
    objSelector: mentorDetailMemberDataSelector,
    memberLoadingStateSelector: mentorDetailMemberDataLoadingStateSelector,
} = createSelectors('mentors_detail');
