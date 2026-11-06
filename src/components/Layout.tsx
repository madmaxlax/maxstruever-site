import Box from '@mui/material/Box';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <Box component="main" sx={{ flex: 1 }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
      <SiteFooter />
    </Box>
  );
}
