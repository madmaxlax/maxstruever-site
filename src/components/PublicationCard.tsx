import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { formatDate, type Publication } from '../data/publications';

interface PublicationCardProps {
  item: Publication;
  featured?: boolean;
}

export default function PublicationCard({ item, featured }: PublicationCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 150ms, box-shadow 150ms, border-color 150ms',
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 6, borderColor: 'transparent' },
      }}
    >
      <CardActionArea
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: featured ? { xs: 'column', md: 'row' } : 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt=""
          loading="lazy"
          sx={{
            display: 'block',
            width: featured ? { xs: '100%', md: '55%' } : '100%',
            aspectRatio: '1200 / 630',
            objectFit: 'cover',
            flexShrink: 0,
            bgcolor: 'action.hover',
          }}
        />
        <Box sx={{ p: featured ? { xs: 2.5, md: 4 } : 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1, mb: 1.5, color: 'text.secondary' }}>
            <Chip label={item.type} size="small" color={featured ? 'secondary' : 'default'} />
            <Typography variant="body2">
              {item.outlet} · {formatDate(item.date)}
            </Typography>
          </Stack>
          <Typography
            variant={featured ? 'h4' : 'h6'}
            component="h3"
            sx={{ lineHeight: 1.25, mb: 1, fontSize: featured ? { xs: '1.5rem', md: '2rem' } : '1.1rem' }}
          >
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: featured ? '1rem' : undefined }}>
            {item.summary}
          </Typography>
          {item.authors && (
            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1.5, fontStyle: 'italic' }}>
              {item.authors}
            </Typography>
          )}
          <Box sx={{ flex: 1 }} />
          <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5, mt: 2, color: 'primary.main', fontWeight: 600 }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {item.type === 'Talk' ? 'Talk resources' : item.type === 'Project' ? 'Visit site' : 'Read'}
            </Typography>
            <ArrowOutward sx={{ fontSize: 16 }} />
          </Stack>
        </Box>
      </CardActionArea>
      {item.links && (
        <Stack direction="row" sx={{ px: 2.5, pb: 2, gap: 2 }}>
          {item.links.map((link) => (
            <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" variant="body2">
              {link.label}
            </Link>
          ))}
        </Stack>
      )}
    </Card>
  );
}
