import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import profile from '../../assets/img/faces/Max-small-sq.jpg';

const useStyles = makeStyles((theme) => ({
  iframe: {},
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)',
    },
  },
  description: {
    paddingBottom: 30,
    margin: '1.071rem auto 30px',
    maxWidth: '600px',
    color: '#999',
    textAlign: 'center',
  },
  name: {
    marginTop: '-80px',
  },
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

const ProfilePage: React.FC<{}> = () => {
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
      <Parallax small filter random />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <Container>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>City Travel Recommendations</h3>
                    <h6>Various lists of activities and places to stay in different cities I've compiled over the years</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                You tried to go to {window.location.pathname}
                <br />
                but that page doesn't exist. Perhaps a bad link?
              </p>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProfilePage;
