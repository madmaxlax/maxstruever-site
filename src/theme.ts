import { createTheme } from '@mui/material/styles';

const display = '"Fraunces Variable", Georgia, serif';
const body = '"Inter Variable", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#1d4ed8' },
        secondary: { main: '#c2410c' },
        background: { default: '#f7f7f5', paper: '#ffffff' },
        text: { primary: '#111827', secondary: '#4b5563' },
        divider: 'rgba(17, 24, 39, 0.1)',
      },
    },
    dark: {
      palette: {
        primary: { main: '#93b4ff' },
        secondary: { main: '#fb923c' },
        background: { default: '#0b1220', paper: '#131c2e' },
        text: { primary: '#e5e7eb', secondary: '#9ca3af' },
        divider: 'rgba(229, 231, 235, 0.12)',
      },
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: body,
    h1: { fontFamily: display, fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontFamily: display, fontWeight: 600, letterSpacing: '-0.02em' },
    h3: { fontFamily: display, fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontFamily: display, fontWeight: 600 },
    h5: { fontWeight: 650 },
    h6: { fontWeight: 650 },
    button: { textTransform: 'none', fontWeight: 600 },
    overline: { fontWeight: 700, letterSpacing: '0.12em' },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    // Flat surfaces in dark mode instead of MUI's lighter elevation overlay
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiCard: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: { root: { height: '100%' } },
    },
    MuiLink: { defaultProps: { underline: 'always' } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
  },
});

export default theme;
