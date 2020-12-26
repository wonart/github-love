import { connect } from 'react-redux';
import DashboardData from 'views/Dashboard/DashboardData';
import { requestMentorMain } from 'actions/mentorMainListActions';
import { mentorsListSelector, mentorsListLoadingStateSelector } from 'selectors/mentorListSelectors'

// 데이터 연결
const mapStateToProps = state => ({
  mentorMainData: mentorsListSelector(state),
  loading: mentorsListLoadingStateSelector(state),
});

// 액션 연결
const mapDispatchToProps = {
  requestMentorMain,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardData);
