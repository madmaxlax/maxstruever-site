import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';

const useStyles = makeStyles({
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
  container: {
    padding: '40px 15px',
    maxWidth: 800,
    margin: '0 auto',
  },
  title: {
    marginTop: '30px',
    minHeight: '32px',
  },
  body: {
    color: '#555',
    '& h3': {
      marginTop: '2em',
      color: '#3C4858',
    },
    '& p, & li': {
      fontSize: '1rem',
      lineHeight: '1.7',
    },
  },
});

export default function ShruggiePage(): JSX.Element {
  const classes = useStyles();
  document.title = 'Shruggie Extension — Privacy & Terms | Max Struever';
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
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <h2 className={classes.title}>Shruggie Chrome Extension — Privacy Policy & Terms</h2>
              <div className={classes.body}>
                <p>Last updated: September 25, 2026</p>
                <p>
                  Shruggie is a Chrome extension that copies the text <code>¯\_(ツ)_/¯</code> to your clipboard when you
                  click its icon. That is all it does.
                </p>

                <h3>Privacy Policy</h3>
                <p>
                  <strong>Data collection: none.</strong> The extension does not collect, store, transmit, or share any
                  personal or sensitive user data of any kind. It makes no network requests, runs no analytics, sets no
                  cookies, and has no accounts.
                </p>
                <p>
                  <strong>Permissions.</strong> The extension requests the <code>clipboardWrite</code> permission. It is
                  used solely to write the <code>¯\_(ツ)_/¯</code> text to your clipboard when you click the extension
                  icon. Nothing else is read from or written to your clipboard.
                </p>
                <p>
                  <strong>Contact.</strong> Questions about this policy: shruggie@madmaxlax.com.
                </p>

                <h3>Terms of Use</h3>
                <p>
                  The extension is provided as-is, without warranties of any kind. It is a tiny utility for copying a
                  text emoticon; use it at your own discretion.
                </p>
                <p>I may update this page at any time by posting the new version at this same address.</p>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
