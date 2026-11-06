import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState, type ReactNode } from 'react';
import { heroImages } from '../data/site';
import { heroBackground } from '../lib/heroBackground';

interface PageHeroProps {
  title: string;
  subtitle?: ReactNode;
  image?: string;
}

// Photo banner used at the top of each page. Picks a random city photo when no image is given.
export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  const [bg] = useState(() => image ?? heroImages[Math.floor(Math.random() * heroImages.length)]);

  return (
    <Box sx={{ color: '#fff', py: { xs: 6, md: 9 }, ...heroBackground(bg) }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" sx={{ fontSize: { xs: '2.1rem', md: '3rem' } }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ mt: 1.5, maxWidth: 680, opacity: 0.85, fontSize: { xs: '1rem', md: '1.15rem' } }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
