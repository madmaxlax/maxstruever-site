import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/material-kit-react.css';
import CityRecsPage from './views/CityRecsPage/CityRecsPage';
import Components from './views/Components/Components';
import ErrorNotFoundPage from './views/ErrorNotFoundPage/ErrorNotFoundPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ReferralsPage from './views/ReferralsPage/ReferralsPage';

// import LandingPage from "./views/LandingPage/LandingPage";
// import LoginPage from "./views/LoginPage/LoginPage";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Routes>
      {/* <Route path="/landing-page" element={LandingPage} /> */}
      {/* <Route path="/login-page" element={LoginPage} /> */}
      <Route path="/all-components-examples" element={Components} />
      <Route path="/city-recs" element={<CityRecsPage />} />
      <Route path="/referals" element={<Navigate to={'/referrals'} />} />
      <Route path="/referrals" element={<ReferralsPage />} />
      <Route path="/" element={<ProfilePage />} />
      <Route path={'/404-not-found'} element={<ErrorNotFoundPage />} />
      <Route
        path="*"
        element={
          <Navigate
            to={{
              pathname: '/404-not-found',
              search: '?from=' + encodeURIComponent(window.location.href),
            }}
          />
        }
      />
    </Routes>
  </Router>
);
