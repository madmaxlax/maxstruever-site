import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import PublicationCard from '../../components/PublicationCard/PublicationCard';
import { profileLinks, projects, writing } from './publications';

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
    '@media (max-width: 599px)': {
      margin: '-60px 8px 0px',
    },
  },
  heading: {
    textAlign: 'center',
    paddingTop: 30,
  },
  section: {
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 500,
    margin: '8px 0 16px',
  },
  profileLinks: {
    textAlign: 'center',
    color: '#777',
    paddingBottom: 40,
  },
});

const PublicationsPage = () => {
  const classes = useStyles();
  const [featured, ...rest] = writing;
  document.title = 'Publications & Links | Max Struever';

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
        <Container>
          <div className={classes.heading}>
            <h3>Publications & Links</h3>
            <h6>Articles, research and projects</h6>
          </div>

          <div className={classes.section}>
            <PublicationCard item={featured} featured />
          </div>

          <div className={classes.section}>
            <h4 className={classes.sectionTitle}>More writing</h4>
            <Grid container spacing={3}>
              {rest.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.url}>
                  <PublicationCard item={item} />
                </Grid>
              ))}
            </Grid>
          </div>

          <div className={classes.section}>
            <h4 className={classes.sectionTitle}>Projects</h4>
            <Grid container spacing={3}>
              {projects.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.url}>
                  <PublicationCard item={item} />
                </Grid>
              ))}
            </Grid>
          </div>

          <div className={classes.profileLinks}>
            Also on{' '}
            {profileLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && ' and '}
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default PublicationsPage;
