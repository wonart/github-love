import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";

import { Provider } from 'react-redux';
import reduxCreateStore from 'reduxCreateStore';

const hist = createBrowserHistory();

function App() {

  // 커스터마이징 함수로 스토어 생성
  const store = reduxCreateStore();

  return (
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin/:id" component={AdminLayout} />
          <Route path="/auth" component={AuthLayout} />
          <Redirect from="/" to="/auth/login-page" />
          {/* <Route path="/admin" component={AdminLayout} />
          <Route path="/auth" component={AuthLayout} />
          <Redirect from="/" to="/admin/dashborad" /> */}
        </Switch>
      </Router>
     </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
