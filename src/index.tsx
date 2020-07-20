import "./assets/css/material-kit-react.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import CityRecsPage from "./views/CityRecsPage/CityRecsPage";
import Components from "./views/Components/Components";
import ErrorNotFoundPage from "./views/ErrorNotFoundPage/ErrorNotFoundPage";
// import LandingPage from "./views/LandingPage/LandingPage";
// import LoginPage from "./views/LoginPage/LoginPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Router >
     <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      {/* <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/all-components-examples" component={Components} />
      <Route path="/city-recs" component={CityRecsPage} />
      <Route path="/" exact component={ProfilePage} />
      <Route
        component={ErrorNotFoundPage}
        exact
        // path="/404-not-found"
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
