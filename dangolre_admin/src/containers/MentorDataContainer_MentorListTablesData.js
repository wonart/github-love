import { connect } from 'react-redux';
import MentorListTablesData from 'views/Tables/MentorListTablesData';

import { requestMentorMain } from 'actions/mentorMainListActions';
import { mentorsListSelector, mentorsListLoadingStateSelector } from 'selectors/mentorListSelectors';


import { mentorMainDeleteActions } from 'actions/mentorMainDeleteActions';
import { mentorMainDeleteLoadingStateSelector } from 'selectors/mentorMainDeleteSelectors';

import { mentorDetailDeleteActions } from 'actions/mentorDetailDeleteActions';
import { mentorDetailDeleteLoadingStateSelector } from 'selectors/mentorDetailDeleteSelectors';

// 데이터 연결
const mapStateToProps = state => ({
  mentorMainData: mentorsListSelector(state),
  loading: mentorsListLoadingStateSelector(state),
  loadingDeleteMain: mentorMainDeleteLoadingStateSelector(state),
  loadingDeleteDetail: mentorDetailDeleteLoadingStateSelector(state),
});

// 액션 연결
const mapDispatchToProps = {
  requestMentorMain,
  mentorMainDeleteActions,
  mentorDetailDeleteActions
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorListTablesData);
