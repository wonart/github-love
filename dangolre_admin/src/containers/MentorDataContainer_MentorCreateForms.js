import { connect } from 'react-redux';
import MentorCreateForms from 'views/Forms/MentorCreateForms';
import { mentorMainAddActions } from 'actions/mentorMainAddActions';
import { mentorCreateLoadingStateSelector } from 'selectors/mentorMainAddSelectors'
import { mentorDetailAddActions } from 'actions/mentorDetailAddActions';
import { mentorDetailCreateLoadingStateSelector } from 'selectors/mentorDetailAddSelectors'

export default connect(
  state => ({
    loadingMainData: mentorCreateLoadingStateSelector(state),
    loadingDetailData: mentorDetailCreateLoadingStateSelector(state),
  }),
  { mentorMainAddActions, mentorDetailAddActions },
)(MentorCreateForms);
