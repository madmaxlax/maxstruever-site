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

export default function PrivacyTermsPage(): JSX.Element {
  const classes = useStyles();
  document.title = 'Privacy & Terms | Max Struever';
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
              <h2 className={classes.title}>Privacy Policy & Terms of Use</h2>
              <div className={classes.body}>
                <p>Last updated: September 25, 2026</p>
                <p>
                  This page covers how maxstruever.com handles your data, and the terms under which you
                  may use this site.
                </p>

                <h3>Privacy Policy</h3>
                <p>
                  This is a personal website. It does not have user accounts, and it does not ask you for
                  personal information.
                </p>
                <p>
                  <strong>Analytics.</strong> This site uses Google Analytics to understand aggregate
                  usage: which pages are visited, how long visitors stay, what browser and device types
                  are used, and approximate geographic location. This data is anonymized and is not tied
                  to your identity.
                </p>
                <p>
                  <strong>Cookies.</strong> Google Analytics sets cookies in your browser to distinguish
                  visits and measure usage. You can block or delete cookies in your browser settings;
                  the site will still work.
                </p>
                <p>
                  <strong>Data sharing.</strong> Analytics data is processed by Google under its own
                  privacy policy. I do not sell, rent, or share any data collected on this site with
                  third parties for marketing purposes.
                </p>
                <p>
                  <strong>Contact.</strong> If you have questions about this policy, reach me at
                  max@madmaxlax.com.
                </p>

                <h3>Terms of Use</h3>
                <p>
                  <strong>Content.</strong> Everything on this site is my personal work and opinion,
                  provided as-is for informational purposes. It is not professional, legal, financial,
                  or medical advice.
                </p>
                <p>
                  <strong>No warranties.</strong> The site and its content are provided without warranties
                  of any kind. I am not liable for any damages arising from your use of this site.
                </p>
                <p>
                  <strong>External links.</strong> This site links to third-party websites. I do not
                  control or endorse their content, and I am not responsible for their practices.
                </p>
                <p>
                  <strong>Acceptable use.</strong> Do not misuse this site, attempt to disrupt it, or use
                  its content in ways that infringe on others&apos; rights.
                </p>
                <p>
                  <strong>Changes.</strong> I may update these terms at any time by posting the new version
                  on this page.
                </p>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
