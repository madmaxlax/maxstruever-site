import '@fontsource-variable/fraunces';
import '@fontsource-variable/inter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import theme from './theme';

// After a deploy, an open tab may request a lazy chunk that no longer exists. Reload to get the new build.
window.addEventListener('vite:preloadError', () => window.location.reload());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="system">
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
