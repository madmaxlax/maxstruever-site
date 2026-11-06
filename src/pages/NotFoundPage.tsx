import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useLocation } from 'react-router';
import PageHero from '../components/PageHero';

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <>
      <title>Page Not Found | Max Struever</title>
      <PageHero title="Page not found" subtitle="Maybe it's still in progress ¯\_(ツ)_/¯" />
      <Container maxWidth="sm" sx={{ mt: 6, textAlign: 'center' }}>
        <Typography sx={{ color: 'text.secondary' }}>
          You tried to go to <code>{pathname}</code> but that page doesn&apos;t exist. Perhaps a bad link?
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" sx={{ mt: 3 }}>
          Back home
        </Button>
      </Container>
    </>
  );
}
