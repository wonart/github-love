import { connect } from 'react-redux';
import MentorUpdateForms from 'views/Forms/MentorUpdateForms';

import { mentorMainMemberActions } from 'actions/mentorMainMemberActions';
import { mentorMainMemberDataSelector, mentorMainMemberDataLoadingStateSelector } from 'selectors/mentorMainMemberSelectors';
import { mentorDetailMemberActions } from 'actions/mentorDetailMemberActions';
import { mentorDetailMemberDataSelector, mentorDetailMemberDataLoadingStateSelector } from 'selectors/mentorDetailMemberSelectors';

import { mentorMainUpdateActions } from 'actions/mentorMainUpdateActions';
import { mentorMainUpdateLoadingStateSelector } from 'selectors/mentorMainUpdateSelectors';
import { mentorDetailUpdateActions } from 'actions/mentorDetailUpdateActions';
import { mentorDetailUpdateLoadingStateSelector } from 'selectors/mentorDetailUpdateSelectors';


// 데이터 연결
const mapStateToProps = state => ({
  mentorMainData: mentorMainMemberDataSelector(state),
  loadingMainData: mentorMainMemberDataLoadingStateSelector(state),
  mentorDetailData: mentorDetailMemberDataSelector(state),
  loadingDetailData: mentorDetailMemberDataLoadingStateSelector(state),
  mentorUpdateMainData: mentorMainUpdateLoadingStateSelector(state),
  mentorUpdateDetailData: mentorDetailUpdateLoadingStateSelector(state),
});

// 액션 연결
const mapDispatchToProps = {
  mentorMainMemberActions,
  mentorDetailMemberActions,
  mentorMainUpdateActions,
  mentorDetailUpdateActions
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorUpdateForms);
