import { Chip, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight, Close, GitHub, Link as LinkIcon } from '@material-ui/icons';
import classNames from 'classnames';
import moment from 'moment';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../CustomButtons/ButtonLink';

const useStyles = makeStyles(() => ({
  dialogPaper: {
    maxWidth: '900px',
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: '#999',
  },
  imageSection: {
    position: 'relative',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    overflow: 'hidden',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    objectFit: 'contain',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },
  navButtonLeft: {
    left: '10px',
  },
  navButtonRight: {
    right: '10px',
  },
  imageCounter: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.85rem',
  },
  date: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '16px',
  },
  description: {
    marginTop: '16px',
    marginBottom: '16px',
    lineHeight: 1.6,
    '& p': {
      marginBottom: '12px',
    },
    '& a': {
      color: '#9c27b0',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& ul, & ol': {
      marginLeft: '20px',
      marginBottom: '12px',
    },
    '& code': {
      backgroundColor: '#f5f5f5',
      padding: '2px 6px',
      borderRadius: '3px',
      fontSize: '0.9em',
    },
  },
  labels: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '16px',
    marginBottom: '16px',
  },
  links: {
    marginTop: '24px',
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  noImage: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#999',
  },
}));

interface PortfolioDetailModalProps {
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
  onClose: () => void;
}

const PortfolioDetailModal = ({ card, onClose }: PortfolioDetailModalProps) => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter out link attachments and get only images
  const imageAttachments = card.attachments.filter((att) => att.previews && att.previews.length > 0);

  // Find GitHub and link attachments
  const githubLink = card.attachments.find((att) => att.name.toLowerCase().includes('github'));
  const websiteLink = card.attachments.find(
    (att) =>
      (att.name.toLowerCase().includes('link') || att.name.toLowerCase().includes('http')) && att.id !== githubLink?.id
  );

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : imageAttachments.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < imageAttachments.length - 1 ? prev + 1 : 0));
  };

  const currentImage = imageAttachments[currentImageIndex];
  const imageUrl = currentImage?.previews?.[currentImage.previews.length - 1]?.url || currentImage?.url;

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth classes={{ paper: classes.dialogPaper }}>
      <DialogTitle>
        {card.name}
        <IconButton className={classes.closeButton} onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {card.due && <Typography className={classes.date}>{moment(card.due).format('MMMM YYYY')}</Typography>}
            {card.labels.length > 0 && (
              <div className={classes.labels}>
                {card.labels.map((label) => (
                  <Chip key={label.id} label={label.name} size="small" color="primary" />
                ))}
              </div>
            )}
          </Grid>

          {imageAttachments.length > 0 && (
            <Grid item xs={12}>
              <div className={classes.imageSection}>
                <img src={imageUrl} alt={card.name} className={classes.image} />

                {imageAttachments.length > 1 && (
                  <>
                    <IconButton
                      className={classNames(classes.navButton, classes.navButtonLeft)}
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft />
                    </IconButton>
                    <IconButton
                      className={classNames(classes.navButton, classes.navButtonRight)}
                      onClick={handleNextImage}
                    >
                      <ChevronRight />
                    </IconButton>
                    <div className={classes.imageCounter}>
                      {currentImageIndex + 1} / {imageAttachments.length}
                    </div>
                  </>
                )}
              </div>
            </Grid>
          )}

          <Grid item xs={12}>
            <div className={classes.description}>
              {card.desc ? <ReactMarkdown>{card.desc}</ReactMarkdown> : 'No description available.'}
            </div>
          </Grid>

          {(githubLink || websiteLink) && (
            <Grid item xs={12}>
              <div className={classes.links}>
                {githubLink && (
                  <Button color="primary" href={githubLink.url} target="_blank" rel="noopener noreferrer">
                    <GitHub style={{ marginRight: '8px' }} />
                    View on GitHub
                  </Button>
                )}
                {websiteLink && (
                  <Button color="info" href={websiteLink.url} target="_blank" rel="noopener noreferrer">
                    <LinkIcon style={{ marginRight: '8px' }} />
                    Check it out
                  </Button>
                )}
              </div>
            </Grid>
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDetailModal;
