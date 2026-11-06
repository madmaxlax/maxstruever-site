import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { formatDate, Publication } from '../../views/PublicationsPage/publications';

const useStyles = makeStyles({
  root: {
    height: '100%',
    textAlign: 'left',
    transition: 'transform 150ms, box-shadow 150ms',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    },
  },
  action: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  featured: {
    '& $action': {
      '@media (min-width: 960px)': {
        flexDirection: 'row',
      },
    },
    '& $media': {
      '@media (min-width: 960px)': {
        width: '50%',
        minHeight: 280,
        flexShrink: 0,
      },
    },
  },
  media: {
    height: 200,
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    color: '#777',
    fontSize: 13,
  },
  title: {
    fontWeight: 500,
    lineHeight: 1.3,
    marginBottom: 8,
  },
  authors: {
    color: '#777',
    fontStyle: 'italic',
    marginTop: 8,
  },
});

interface PublicationCardProps {
  item: Publication;
  featured?: boolean;
}

const PublicationCard = ({ item, featured }: PublicationCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classNames(classes.root, { [classes.featured]: featured })}>
      <CardActionArea className={classes.action} href={item.url} target="_blank" rel="noopener noreferrer">
        {item.image && <CardMedia className={classes.media} image={item.image} title={item.title} />}
        <CardContent>
          <div className={classes.meta}>
            <Chip label={item.type} size="small" color={featured ? 'primary' : 'default'} />
            <span>
              {item.outlet} · {formatDate(item.date)}
            </span>
          </div>
          <Typography variant={featured ? 'h5' : 'h6'} component="h3" className={classes.title}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {item.summary}
          </Typography>
          {item.authors && (
            <Typography variant="caption" component="p" className={classes.authors}>
              {item.authors}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PublicationCard;
