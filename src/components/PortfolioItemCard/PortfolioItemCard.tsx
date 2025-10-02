import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
  },
  media: {
    height: 200,
    backgroundSize: 'cover',
  },
  content: {
    flexGrow: 1,
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '8px',
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    '& p': {
      margin: 0,
    },
    '& a': {
      color: '#9c27b0',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  date: {
    fontSize: '0.85rem',
    color: '#999',
    marginTop: '8px',
  },
  labels: {
    marginTop: '8px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
  },
  label: {
    height: '24px',
    fontSize: '0.75rem',
  },
}));

interface PortfolioItemCardProps {
  card: {
    id: string;
    name: string;
    desc: string;
    due: string | null;
    labels: Array<{ id: string; name: string; color: string }>;
    attachments: Array<{
      id: string;
      name: string;
      url: string;
      previews?: Array<{ url: string; height: number; width: number }>;
    }>;
    idAttachmentCover: string;
  };
  onClick: () => void;
}

const PortfolioItemCard = ({ card, onClick }: PortfolioItemCardProps) => {
  const classes = useStyles();

  // Find the cover image
  const coverAttachment = card.attachments.find((att) => att.id === card.idAttachmentCover);
  const coverImage = coverAttachment?.previews?.[coverAttachment.previews.length - 1]?.url || coverAttachment?.url;

  // Fallback image
  const imageUrl = coverImage || 'https://via.placeholder.com/400x200?text=No+Image';

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={card.name} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} gutterBottom>
            {card.name}
          </Typography>
          {card.due && <Typography className={classes.date}>{moment(card.due).format('MMM YYYY')}</Typography>}
          <div className={classes.description}>
            {card.desc ? <ReactMarkdown>{card.desc}</ReactMarkdown> : 'Click to see details'}
          </div>
          {card.labels.length > 0 && (
            <div className={classes.labels}>
              {card.labels.map((label) => (
                <Chip key={label.id} label={label.name} size="small" className={classes.label} color="primary" />
              ))}
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioItemCard;
