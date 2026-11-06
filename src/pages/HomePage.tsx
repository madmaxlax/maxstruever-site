import ArrowForward from '@mui/icons-material/ArrowForward';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import SportsHandballOutlined from '@mui/icons-material/SportsHandballOutlined';
import WorkOutlined from '@mui/icons-material/WorkOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState, type ReactElement, type ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';
import PublicationCard from '../components/PublicationCard';
import { writing } from '../data/publications';
import { socialLinks } from '../data/site';
import { heroBackground } from '../lib/heroBackground';

interface Story {
  text: ReactNode;
  image?: string;
  alt?: string;
}

const tabs: { label: string; icon: ReactElement; stories: Story[] }[] = [
  {
    label: 'Work',
    icon: <WorkOutlined />,
    stories: [
      {
        text: (
          <>
            I&apos;m a full stack developer and occasional data engineer, currently a Principal Engineer at{' '}
            <Link href="https://www.bcg.com/x" target="_blank" rel="noopener noreferrer">
              Boston Consulting Group
            </Link>
            . Lately that means AI products, multi-agent simulations and GenAI evaluation. To see more, head over to my{' '}
            <Link component={RouterLink} to="/portfolio">
              portfolio
            </Link>{' '}
            or my{' '}
            <Link component={RouterLink} to="/publications">
              publications
            </Link>
            .
          </>
        ),
        image: '/img/hudsonyards.webp',
        alt: 'Hudson Yards, New York',
      },
    ],
  },
  {
    label: 'Fun',
    icon: <SportsHandballOutlined />,
    stories: [
      {
        text: "I love every kind of sport and activity. Lacrosse I've played the most, even having been lucky enough to play for the Netherlands national team.",
        image: '/img/dutch_lacrosse_team.webp',
        alt: 'Netherlands national lacrosse team',
      },
    ],
  },
  {
    label: 'MaxFacts',
    icon: <FavoriteBorder />,
    stories: [
      { text: 'I have a severe peanut allergy.' },
      { text: 'I can solve a Rubik’s cube in about 2 minutes.' },
      { text: 'I can speak Dutch and passed the citizenship exams.' },
      {
        text: 'I broke my jaw on the 4th day after moving to the Netherlands.',
        image: '/img/jaw_xray.webp',
        alt: 'X-ray of a broken jaw',
      },
      {
        text: 'I owned a boat named Freedom with some buddies in Amsterdam.',
        image: '/img/freedom-boat.webp',
        alt: 'The boat Freedom in Amsterdam',
      },
    ],
  },
];

function Hero() {
  return (
    <Box
      sx={{
        color: '#fff',
        ...heroBackground('nyc-bg', 'rgba(8, 12, 24, 0.35) 0%, rgba(8, 12, 24, 0.9) 100%'),
        backgroundPosition: 'center 40%',
        pt: { xs: 7, md: 12 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: { xs: 3, md: 5 }, alignItems: { md: 'center' } }}>
          <Avatar
            src="/img/max.webp"
            alt="Max Struever"
            sx={{
              width: { xs: 112, md: 168 },
              height: { xs: 112, md: 168 },
              border: '4px solid rgba(255,255,255,0.85)',
            }}
          />
          <Box>
            <Typography variant="overline" component="p" sx={{ opacity: 0.8, lineHeight: 1.6, mb: 1 }}>
              Principal Engineer, Boston Consulting Group
            </Typography>
            <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, lineHeight: 1.05 }}>
              Maxwell (Max) Struever
            </Typography>
            <Typography sx={{ mt: 2, maxWidth: 620, fontSize: { xs: '1.05rem', md: '1.2rem' }, opacity: 0.9 }}>
              What&apos;s good? I&apos;m a geek who loves sports. Activities and country music are my love languages. I
              build AI-powered products and write about engineering with GenAI.
            </Typography>
            <Stack direction="row" sx={{ mt: 3, gap: 1.5, flexWrap: 'wrap' }}>
              <Button component={RouterLink} to="/publications" variant="contained" color="secondary" size="large">
                Publications
              </Button>
              <Button
                component={RouterLink}
                to="/portfolio"
                variant="outlined"
                size="large"
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)', '&:hover': { borderColor: '#fff' } }}
              >
                Portfolio
              </Button>
            </Stack>
            <Stack direction="row" sx={{ mt: 2.5, ml: -1, flexWrap: 'wrap' }}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Tooltip key={label} title={label}>
                  <IconButton
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{ color: 'rgba(255,255,255,0.85)', '&:hover': { color: '#fff' } }}
                  >
                    <Icon size={20} aria-hidden />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function SectionHeading({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: 2.5, gap: 2 }}>
      <Typography variant="h4" component="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
        {title}
      </Typography>
      {action}
    </Stack>
  );
}

function AboutTabs() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" sx={{ mb: 3 }}>
        {tabs.map((t) => (
          <Tab key={t.label} label={t.label} icon={t.icon} iconPosition="start" sx={{ minHeight: 48 }} />
        ))}
      </Tabs>
      <Grid container spacing={3}>
        {tabs[tab].stories.map((story, i) => (
          <Grid
            key={`${tab}-${i}`}
            size={{ xs: 12, sm: story.image ? 12 : 6, md: tabs[tab].stories.length === 1 ? 12 : story.image ? 6 : 4 }}
          >
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: story.image ? 'row' : 'column' } }}>
              {story.image && (
                <Box
                  component="img"
                  src={story.image}
                  alt={story.alt}
                  loading="lazy"
                  sx={{ width: { xs: '100%', sm: '60%' }, aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
                />
              )}
              <Typography sx={{ p: 2.5, alignSelf: { xs: 'stretch', sm: story.image ? 'center' : 'stretch' } }}>
                {story.text}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <title>Max Struever</title>
      <Hero />
      <Container maxWidth="lg" sx={{ mt: { xs: 5, md: 8 } }}>
        <SectionHeading
          title="Latest publications"
          action={
            <Button
              component={RouterLink}
              to="/publications"
              endIcon={<ArrowForward />}
              aria-label="All publications"
              sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              See all
            </Button>
          }
        />
        <Grid container spacing={3}>
          {writing.slice(0, 3).map((item) => (
            <Grid key={item.url} size={{ xs: 12, sm: 6, md: 4 }}>
              <PublicationCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <SectionHeading title="About me" />
          <AboutTabs />
        </Box>

        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <SectionHeading title="Where I've lived" />
          <Card>
            <Box
              component="iframe"
              title="Max's map"
              src="https://www.google.com/maps/d/u/0/embed?mid=1qZa8o2hDia__83bn8CpfvCD8PBi57_4I"
              loading="lazy"
              sx={{ display: 'block', width: '100%', height: { xs: 380, md: 520 }, border: 0 }}
            />
          </Card>
        </Box>
      </Container>
    </>
  );
}
