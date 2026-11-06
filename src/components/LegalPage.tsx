import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { ReactNode } from 'react';
import PageHero from './PageHero';

interface LegalPageProps {
  title: string;
  pageTitle: string;
  updated: string;
  children: ReactNode;
}

// Shared layout for privacy and terms pages.
export default function LegalPage({ title, pageTitle, updated, children }: LegalPageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <PageHero title={title} subtitle={`Last updated: ${updated}`} />
      <Container maxWidth="md" sx={{ mt: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            color: 'text.secondary',
            fontSize: '1rem',
            lineHeight: 1.7,
            '& h2': { color: 'text.primary', fontFamily: 'h1.fontFamily', fontSize: '1.6rem', mt: 5, mb: 1.5 },
            '& p': { mt: 0, mb: 2 },
            '& strong': { color: 'text.primary' },
            '& code': { bgcolor: 'action.hover', px: 0.75, py: 0.25, borderRadius: 1 },
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
}
