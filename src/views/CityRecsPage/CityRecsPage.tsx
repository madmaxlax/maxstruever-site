import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
}));

const CityRecsPage = () => {
  const classes = useStyles();

  document.title = 'City Recommendations | Max Struever';

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
                    <h3 className={classes.title}>City Travel Recommendations</h3>
                    <h6>
                      Various lists of activities and places to stay in different cities I&apos;ve compiled over the
                      years
                    </h6>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.content}>
              <iframe
                title="City Recs from Google Docs"
                frameBorder="0"
                className={classes.iframe}
                src={
                  '//drive.google.com/embeddedfolderview?id=0B994MvzpbbuzfjFrVFVkVTc1dmtBMktWSldnMVA0M2R5QjN6dVlGSXB2anVmQkVVTWEyWHc&resourcekey=0-Ufq5iBoLMkvcB-Ct-oQ1IQ#list'
                }
              ></iframe>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CityRecsPage;
