import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import Markdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router';
import FilterField from '../components/FilterField';
import PageHero from '../components/PageHero';
import PortfolioDialog from '../components/PortfolioDialog';
import { markdownSx } from '../components/markdownSx';
import { useQueryFilter } from '../lib/useQueryFilter';
import { attachmentImage, formatMonth, PORTFOLIO_BOARD, slugify, useTrelloBoard, type TrelloCard } from '../lib/trello';

function PortfolioCard({ card, onClick }: { card: TrelloCard; onClick: () => void }) {
  const cover = attachmentImage(card.attachments.find((att) => att.id === card.idAttachmentCover));

  return (
    <Card
      sx={{
        transition: 'transform 150ms, box-shadow 150ms',
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 6 },
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
        {cover ? (
          <Box
            component="img"
            src={cover}
            alt=""
            loading="lazy"
            sx={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block', bgcolor: 'action.hover' }}
          />
        ) : (
          <Box
            sx={{
              aspectRatio: '16 / 9',
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg, #1e3a5f, #0f172a)',
              color: '#e2e8f0',
              fontFamily: 'h1.fontFamily',
              fontSize: '2.5rem',
            }}
          >
            {card.name.charAt(0)}
          </Box>
        )}
        <Box sx={{ p: 2.5 }}>
          <Typography variant="h6" component="h3" sx={{ fontSize: '1.1rem', lineHeight: 1.3 }}>
            {card.name}
          </Typography>
          {card.due && (
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              {formatMonth(card.due)}
            </Typography>
          )}
          <Box
            sx={{
              ...markdownSx,
              mt: 1,
              color: 'text.secondary',
              fontSize: '0.9rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              '& p': { m: 0 },
            }}
          >
            {/* Links can't nest inside the card's button, so show their text only */}
            {card.desc ? (
              <Markdown disallowedElements={['a']} unwrapDisallowed>
                {card.desc}
              </Markdown>
            ) : (
              'Click to see details'
            )}
          </Box>
          {card.labels.length > 0 && (
            <Stack direction="row" sx={{ gap: 0.5, flexWrap: 'wrap', mt: 1.5 }}>
              {card.labels.map((label) => (
                <Chip key={label.id} label={label.name} size="small" variant="outlined" />
              ))}
            </Stack>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default function PortfolioPage() {
  const { board, loading, error } = useTrelloBoard(PORTFOLIO_BOARD);
  const [filter, setFilter] = useQueryFilter();
  const { hash, search, state } = useLocation();
  const navigate = useNavigate();

  const cards = useMemo(
    () => [...(board?.cards ?? [])].sort((a, b) => (b.due ? Date.parse(b.due) : 0) - (a.due ? Date.parse(a.due) : 0)),
    [board]
  );

  const needle = filter.trim().toLowerCase();
  const filtered = cards.filter(
    (card) =>
      !needle ||
      card.name.toLowerCase().includes(needle) ||
      card.desc?.toLowerCase().includes(needle) ||
      card.labels.some((label) => label.name.toLowerCase().includes(needle))
  );

  // Deep link: /portfolio#card-slug opens that card
  const slug = hash.replace('#', '');
  const selected = slug ? cards.find((c) => c.id === slug || slugify(c.name) === slug) : undefined;
  const tags = board?.labels.filter((label) => label.name) ?? [];

  return (
    <>
      <title>Portfolio | Max Struever</title>
      <PageHero
        title="Portfolio"
        subtitle="Examples of my work as a developer. I love all kinds of coding across the full stack."
      />
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: 720, mx: 'auto', mb: 4 }}>
          <FilterField value={filter} onChange={setFilter} placeholder="Search by name, description or tag" />
          {tags.length > 0 && (
            <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
              {tags.map((label) => (
                <Chip
                  key={label.id}
                  label={label.name}
                  onClick={() => setFilter(filter === label.name ? '' : label.name)}
                  color={filter === label.name ? 'primary' : 'default'}
                  variant={filter === label.name ? 'filled' : 'outlined'}
                />
              ))}
            </Stack>
          )}
          {board && (
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mt: 2 }}>
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </Typography>
          )}
        </Box>

        {error && <Alert severity="warning">The portfolio couldn&apos;t load from Trello. Try again in a bit.</Alert>}

        <Grid container spacing={3}>
          {loading
            ? Array.from({ length: 6 }, (_, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Skeleton variant="rounded" sx={{ height: 320 }} />
                </Grid>
              ))
            : filtered.map((card) => (
                <Grid key={card.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <PortfolioCard
                    card={card}
                    onClick={() => navigate({ hash: slugify(card.name), search }, { state: { fromGrid: true } })}
                  />
                </Grid>
              ))}
        </Grid>

        {board && filtered.length === 0 && (
          <Typography sx={{ textAlign: 'center', color: 'text.secondary', py: 6 }}>
            No projects match that search.
          </Typography>
        )}
      </Container>

      {selected && (
        <PortfolioDialog
          key={selected.id}
          card={selected}
          onClose={() => (state?.fromGrid ? navigate(-1) : navigate({ hash: '', search }, { replace: true }))}
        />
      )}
    </>
  );
}
