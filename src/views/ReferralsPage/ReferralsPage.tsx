import { Container, Grid, InputAdornment } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import CustomInput from '../../components/CustomInput/CustomInput';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import { People } from '@material-ui/icons';
import ReferralItem from '../../components/ReferralItem/ReferralItem';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)',
    },
  },
  content: {
    paddingBottom: 30,
    margin: '1.071rem auto 30px',
    color: '#999',
    textAlign: 'center',
  },
  iframe: {
    minHeight: 2600,
    width: '100%',
  },

  name: {},
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: 3,
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  referralsList:{

  }
}));

const ReferralsPage: React.FC<{}> = () => {
  const classes = useStyles();
  const [data, setData] = useState({ cards: [] });
  const [filterString, setFilterString] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const resp = await fetch('https://trello.com/b/sYeK1UkI/max-struever-referral-links.json');
    const trelloData = await resp.json();
    setData(trelloData)
    console.log(trelloData);
  };
  document.title = 'Referral Links | Max Struever';

  return (
    <div>
      <Header
        color="transparent"
        brand="Max Struever"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
      />
      <Parallax xSmall filter random />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <Container>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div></div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Referrals / Links</h3>
                    <h6>Various referral links for discounts and other benefits</h6>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.content}>
              <CustomInput
                  labelText="Filter: "
                  id="material"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <People />
                      </InputAdornment>
                    )
                  }}
                /> <br/>
              <ul className={classes.referralsList}>
                  {data.cards.map((card, i) => (
                    <ReferralItem card={card} key={i}/>
                  ))}
              </ul>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ReferralsPage;
