import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      {/* <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/originalhome" component={Components} />
      <Route path="/" component={ProfilePage} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
