import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Close from '@mui/icons-material/Close';
import GitHub from '@mui/icons-material/GitHub';
import Launch from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { attachmentImage, formatMonth, type TrelloCard } from '../lib/trello';
import { markdownSx } from './markdownSx';

interface PortfolioDialogProps {
  card: TrelloCard;
  onClose: () => void;
}

const navSx = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  bgcolor: 'background.paper',
  boxShadow: 2,
  '&:hover': { bgcolor: 'background.paper' },
} as const;

export default function PortfolioDialog({ card, onClose }: PortfolioDialogProps) {
  const fullScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [index, setIndex] = useState(0);

  const images = card.attachments.filter((att) => att.previews && att.previews.length > 0);
  const github = card.attachments.find((att) => att.name.toLowerCase().includes('github'));
  const website = card.attachments.find(
    (att) =>
      (att.name.toLowerCase().includes('link') || att.name.toLowerCase().includes('http')) && att.id !== github?.id
  );
  const step = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <Dialog open onClose={onClose} maxWidth="md" fullWidth fullScreen={fullScreen}>
      <IconButton aria-label="Close" onClick={onClose} sx={{ position: 'absolute', right: 12, top: 12 }}>
        <Close />
      </IconButton>
      <DialogTitle sx={{ pr: 7, fontFamily: 'h1.fontFamily', fontSize: '1.6rem' }}>{card.name}</DialogTitle>
      <DialogContent>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {card.due && (
            <Typography variant="body2" sx={{ color: 'text.secondary', mr: 1 }}>
              {formatMonth(card.due, 'long')}
            </Typography>
          )}
          {card.labels.map((label) => (
            <Chip key={label.id} label={label.name} size="small" />
          ))}
        </Stack>

        {images.length > 0 && (
          <Box
            sx={{
              position: 'relative',
              bgcolor: 'action.hover',
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={attachmentImage(images[index])}
              alt={card.name}
              sx={{ width: '100%', maxHeight: 480, objectFit: 'contain', display: 'block' }}
            />
            {images.length > 1 && (
              <>
                <IconButton aria-label="Previous image" onClick={() => step(-1)} sx={{ ...navSx, left: 10 }}>
                  <ChevronLeft />
                </IconButton>
                <IconButton aria-label="Next image" onClick={() => step(1)} sx={{ ...navSx, right: 10 }}>
                  <ChevronRight />
                </IconButton>
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 3,
                  }}
                >
                  {index + 1} / {images.length}
                </Typography>
              </>
            )}
          </Box>
        )}

        <Box sx={{ mt: 2, ...markdownSx }}>
          {card.desc ? (
            <Markdown components={{ a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}>
              {card.desc}
            </Markdown>
          ) : (
            <Typography>No description available.</Typography>
          )}
        </Box>

        {(github || website) && (
          <Stack direction="row" sx={{ gap: 1.5, mt: 3, mb: 1, flexWrap: 'wrap' }}>
            {github && (
              <Button
                variant="contained"
                startIcon={<GitHub />}
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>
            )}
            {website && (
              <Button
                variant="outlined"
                startIcon={<Launch />}
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out
              </Button>
            )}
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
}
