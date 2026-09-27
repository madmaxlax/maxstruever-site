import { createRoot } from 'react-dom/client';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './assets/css/material-kit-react.css';
import CityRecsPage from './views/CityRecsPage/CityRecsPage';
import Components from './views/Components/Components';
import ErrorNotFoundPage from './views/ErrorNotFoundPage/ErrorNotFoundPage';
import PortfolioPage from './views/PortfolioPage/PortfolioPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import PrivacyTermsPage from './views/PrivacyTermsPage/PrivacyTermsPage';
import ReferralsPage from './views/ReferralsPage/ReferralsPage';
import ShruggiePage from './views/ShruggiePage/ShruggiePage';

// import LandingPage from "./views/LandingPage/LandingPage";
// import LoginPage from "./views/LoginPage/LoginPage";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Missing #root element');
createRoot(rootElement).render(
  <Router>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      {/* <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/all-components-examples" component={Components} />
      <Route path="/city-recs" component={CityRecsPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Redirect path="/referals" to={'/referrals'} />
      <Route path="/referrals" component={ReferralsPage} />
      <Route path="/privacy-and-terms" component={PrivacyTermsPage} />
      <Route path="/shruggie/privacy" component={ShruggiePage} />
      <Route path="/" exact component={ProfilePage} />
      <Route
        component={ErrorNotFoundPage}
        exact
        // path="/404-not-found"
      />
    </Switch>
  </Router>
);
