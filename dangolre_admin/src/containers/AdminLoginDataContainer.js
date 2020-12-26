import { connect } from 'react-redux';
import LoginPage from 'views/Pages/LoginPage';
import { requestAdminLogin } from 'actions/adminLoginActions';
import { adminLoginListSelector, adminLoginListLoadingStateSelector } from 'selectors/adminLoginSelectors'

// 데이터 연결
const mapStateToProps = state => ({
  adminLoginData: adminLoginListSelector(state),
  loading: adminLoginListLoadingStateSelector(state),
});

// 액션 연결
const mapDispatchToProps = {
  requestAdminLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
