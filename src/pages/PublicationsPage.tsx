import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PageHero from '../components/PageHero';
import PublicationCard from '../components/PublicationCard';
import { profileLinks, projects, writing } from '../data/publications';

export default function PublicationsPage() {
  const [featured, ...rest] = writing;

  return (
    <>
      <title>Publications & Links | Max Struever</title>
      <PageHero
        title="Publications & Links"
        subtitle="Articles, research, talks and side projects on AI engineering, GenAI evaluation and multi-agent simulation."
      />
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <Typography variant="overline" component="h2" sx={{ color: 'text.secondary' }}>
          Latest
        </Typography>
        <PublicationCard item={featured} featured />

        <Typography variant="overline" component="h2" sx={{ color: 'text.secondary', display: 'block', mt: 6 }}>
          More writing and talks
        </Typography>
        <Grid container spacing={3}>
          {rest.map((item) => (
            <Grid key={item.url} size={{ xs: 12, sm: 6, md: 4 }}>
              <PublicationCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="overline" component="h2" sx={{ color: 'text.secondary', display: 'block', mt: 6 }}>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((item) => (
            <Grid key={item.url} size={{ xs: 12, sm: 6, md: 4 }}>
              <PublicationCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ textAlign: 'center', color: 'text.secondary', mt: 6 }}>
          Also on{' '}
          {profileLinks.map((link, i) => (
            <span key={link.href}>
              {i > 0 && ' and '}
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </Link>
            </span>
          ))}
        </Typography>
      </Container>
    </>
  );
}
