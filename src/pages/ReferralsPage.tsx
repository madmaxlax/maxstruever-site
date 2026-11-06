import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FilterField from '../components/FilterField';
import PageHero from '../components/PageHero';
import { REFERRALS_BOARD, useTrelloBoard } from '../lib/trello';
import { useQueryFilter } from '../lib/useQueryFilter';

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

export default function ReferralsPage() {
  const { board, loading, error } = useTrelloBoard(REFERRALS_BOARD);
  const [filter, setFilter] = useQueryFilter();

  const needle = filter.trim().toLowerCase();
  const cards = (board?.cards ?? []).filter(
    (card) => !needle || card.name.toLowerCase().includes(needle) || card.desc.toLowerCase().includes(needle)
  );

  return (
    <>
      <title>Referral Links | Max Struever</title>
      <PageHero title="Referral Links" subtitle="Referral links for discounts and other perks on services I use." />
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: 720, mx: 'auto', mb: 4 }}>
          <FilterField value={filter} onChange={setFilter} placeholder="Filter referrals" />
        </Box>

        {error && <Alert severity="warning">Referral links couldn&apos;t load from Trello. Try again in a bit.</Alert>}

        <Grid container spacing={2}>
          {loading
            ? Array.from({ length: 8 }, (_, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Skeleton variant="rounded" sx={{ height: 140 }} />
                </Grid>
              ))
            : cards.map((card) => {
                const url = card.attachments[0]?.url;
                return (
                  <Grid key={card.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Card sx={{ '&:hover': { boxShadow: 4 } }}>
                      <CardActionArea
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        disabled={!url}
                        sx={{ height: '100%', p: 2.5, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                      >
                        <Typography variant="h6" component="h3" sx={{ fontSize: '1.05rem' }}>
                          {card.name}
                        </Typography>
                        {card.desc && (
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', mt: 0.75, overflowWrap: 'anywhere' }}
                          >
                            {card.desc}
                          </Typography>
                        )}
                        <Box sx={{ flex: 1 }} />
                        {url && (
                          <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5, mt: 2, color: 'primary.main' }}>
                            <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
                              {hostname(url)}
                            </Typography>
                            <ArrowOutward sx={{ fontSize: 16 }} />
                          </Stack>
                        )}
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
        </Grid>

        {board && cards.length === 0 && (
          <Typography sx={{ textAlign: 'center', color: 'text.secondary', py: 6 }}>
            Nothing matches that filter.
          </Typography>
        )}
      </Container>
    </>
  );
}
