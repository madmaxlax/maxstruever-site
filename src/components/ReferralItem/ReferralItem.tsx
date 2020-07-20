import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

interface ReferralItemProps {
  card: {
    closed: boolean;
    attachments: Array<{ name: string; url: string }>;
  };
}

const ReferralItem = (props: ReferralItemProps) => {
  const { card } = props;
  const classes = useStyles();

  return <li>{card.attachments[0]?.url}</li>;
};

export default ReferralItem;
