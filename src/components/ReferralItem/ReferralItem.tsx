import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import RegularButton, { Link } from '../CustomButtons/ButtonLink';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardDesc: {
    overflowX: 'hidden',
  },
}));

interface ReferralItemProps {
  card: {
    closed: boolean;
    name: string;
    desc: string;
    attachments: Array<{ name: string; url: string }>;
  };
}

const ReferralItem = (props: ReferralItemProps) => {
  const { card } = props;
  const classes = useStyles();
  if (card.closed) return null;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {card.name}{' '}
        </Typography>

        <Typography variant="body2" component="p" className={classes.cardDesc}>
          {card.desc && (
            <>
              {card.desc}
              <br />
            </>
          )}
          <br />
          <Link to={card.attachments[0]?.url} target="_blank" rel="noopener noreferrer">
            {card.attachments[0]?.url}
          </Link>
        </Typography>
      </CardContent>
      <CardActions>
        <RegularButton size="small" target="_blank" rel="noopener noreferrer" href={card.attachments[0]?.url || ''}>
          Go to
        </RegularButton>
      </CardActions>
    </Card>
    // <li>
    //   <Link to={card.attachments[0]?.url || ''}>
    //     {card.name} {card.attachments[0]?.url}
    //   </Link>
    //   {card.desc && (
    //     <ul>
    //       <li>{card.desc}</li>
    //     </ul>
    //   )}
    // </li>
  );
};

export default ReferralItem;
