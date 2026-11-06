import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyTermsPage from './pages/PrivacyTermsPage';
import PublicationsPage from './pages/PublicationsPage';
import ShruggiePage from './pages/ShruggiePage';

// Trello-backed pages pull in markdown rendering, so load them on demand
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ReferralsPage = lazy(() => import('./pages/ReferralsPage'));
const CityRecsPage = lazy(() => import('./pages/CityRecsPage'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="city-recs" element={<CityRecsPage />} />
        <Route path="referrals" element={<ReferralsPage />} />
        <Route path="referals" element={<Navigate to="/referrals" replace />} />
        <Route path="privacy-and-terms" element={<PrivacyTermsPage />} />
        <Route path="shruggie/privacy" element={<ShruggiePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
