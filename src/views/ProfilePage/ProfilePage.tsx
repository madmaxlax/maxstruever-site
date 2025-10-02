import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Favorite, SportsHandball, Work } from '@material-ui/icons';
import { WithStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import profile from '../../assets/img/faces/Max-small-sq.jpg';
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage';
import Button, { Link } from '../../components/CustomButtons/ButtonLink';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import NavPills from '../../components/NavPills/NavPills';
import Parallax from '../../components/Parallax/Parallax';

type IProfilePage = WithStyles<typeof profilePageStyle>;
class ProfilePage extends React.Component<IProfilePage> {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
          {...rest}
        />
        <Parallax small filter image={require('../../assets/img/nyc-bg.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Maxwell (Max) Struever</h3>
                      <h6>Developer, Enthusiastic</h6>
                      {/* <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button> */}

                      <Button
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/maxstruever/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <Button
                        title="Instagram"
                        href="https://www.instagram.com/dadmaxlax/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>
                      <Button
                        title="Facebook"
                        href="https://www.facebook.com/max.struever"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook"></i>
                      </Button>
                      <Button title="Twitter" href="https://x.com/dadmaxlax" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        title="My Spotify Account"
                        href="https://open.spotify.com/user/126021708?si=oKlU_c_dSqKQi-zFbI5kvg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-spotify"></i>
                      </Button>
                      <Button
                        title="Posts on Medium"
                        href="https://medium.com/@madmaxlax"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-medium"></i>
                      </Button>
                      <Button
                        title="My Github repos"
                        href="https://github.com/madmaxlax"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  What&apos;s Good? <br />
                  I&apos;m Max Struever. Sometimes Maxwell Struever. I&apos;m a geek who loves sports. Activities and
                  country music are my love languages. Please check out my{' '}
                  <a href="http://portfolio.maxstruever.com">portfolio</a> while I work on my site.
                </p>

                <iframe
                  frameBorder="0"
                  title="Max's Map!"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1qZa8o2hDia__83bn8CpfvCD8PBi57_4I"
                  width="100%"
                  height="500"
                ></iframe>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    active={0}
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: 'Work',
                        tabIcon: Work,
                        tabContent: (
                          <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>
                                I am a full stack developer (and occasional data engineer), currently a Lead Engineer at{' '}
                                <a href="https://bcgplatinion.com/" target="_blank" rel="noreferrer">
                                  BCG Platinion
                                </a>
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                              <img
                                alt="Work"
                                src={'https://y.yarn.co/4e6d5870-2c84-4b73-afa8-7484ef3649a6_screenshot.jpg'}
                                className={navImageClasses}
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                              <img alt="Hudson Yards" src={'/hudsonyards.jpg'} className={navImageClasses} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>
                                To check out more of my work, head over to{' '}
                                <Link to="http://portfolio.maxstruever.com">my portfolio</Link>
                              </Typography>
                            </Grid>
                          </Grid>
                        ),
                      },
                      {
                        tabButton: 'Fun',
                        tabIcon: SportsHandball,
                        tabContent: (
                          <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item xs={12} sm={12} md={8}>
                              <img
                                alt="Dutch lacrosse team"
                                src={'dutch_lacrosse_team.jpg'}
                                className={navImageClasses}
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>
                                I Love every kind of sport and activity. Lacrosse I&apos;ve played the most, even having
                                been lucky enough to play for the Netherlands national team
                              </Typography>
                            </Grid>
                          </Grid>
                        ),
                      },
                      {
                        tabButton: 'MaxFacts',
                        tabIcon: Favorite,
                        tabContent: (
                          <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>I have a severe peanut allergy</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>I can solve a rubiks cube in about 2 minutes </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>I can speak Dutch and passed the citizenship exams</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>I broke my jaw on the 4th day after moving to the Netherlands</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                              <img alt="jaw" src={'jaw_xray.jpg'} className={navImageClasses} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                              <img
                                alt="freedom"
                                src={
                                  'https://lh3.googleusercontent.com/pw/ACtC-3cceV4-nwZlYyhrM9UWX9GwbzpNJF-VN2tw7av5oMqSeKSX3KdZEiWRyTNfBQsuUP71fvrKFDeO53WQsZGykKc0W1zpQ0Vg8oBsDqKvgK6KW8sJbpjJEn4m0jxKxin4sz3qJqSquOI0oxGeCFbPK35SsQ=w1024-h768-no?authuser=0'
                                }
                                className={navImageClasses}
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                              <Typography>I owned a boat named Freedom with some buddies in Amsterdam</Typography>
                            </Grid>
                          </Grid>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withStyles(profilePageStyle)(ProfilePage);
