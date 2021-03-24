import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './assets/css/material-kit-react.css';
import CityRecsPage from './views/CityRecsPage/CityRecsPage';
import Components from './views/Components/Components';
import ErrorNotFoundPage from './views/ErrorNotFoundPage/ErrorNotFoundPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ReferralsPage from './views/ReferralsPage/ReferralsPage';

// import LandingPage from "./views/LandingPage/LandingPage";
// import LoginPage from "./views/LoginPage/LoginPage";

ReactDOM.render(
  <Router>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      {/* <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/all-components-examples" component={Components} />
      <Route path="/city-recs" component={CityRecsPage} />
      <Redirect path="/referals" to={'/referrals'} />
      <Route path="/referrals" component={ReferralsPage} />
      <Route path="/" exact component={ProfilePage} />
      <Route
        component={ErrorNotFoundPage}
        exact
        // path="/404-not-found"
      />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
