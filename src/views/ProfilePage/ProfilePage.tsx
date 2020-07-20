import {Favorite, Home, ImportantDevices} from "@material-ui/icons";

import Button from "../../components/CustomButtons/ButtonLink";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import NavPills from "../../components/NavPills/NavPills";
import Parallax from "../../components/Parallax/Parallax";
import React from "react";
import { WithStyles } from "@material-ui/styles";
import classNames from "classnames";
import profile from "../../assets/img/faces/Max-small-sq.jpg";
import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage";
import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";

interface IProfilePage extends WithStyles<typeof profilePageStyle> {}
class ProfilePage extends React.Component<IProfilePage> {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
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
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("../../assets/img/nyc-bg.jpg")} />
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
                        href="https://www.instagram.com/madmaxlax/"
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
                      <Button
                        title="Twitter"
                        href="https://www.twitter.com/madmaxlax"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                What's Good? <br/>
  I'm Max Struever.
  Sometimes Maxwell Struever.
  I'm a geek who loves sports. Activities and country music are my love languages.
  Please check out my <a href="http://portfolio.maxstruever.com">portfolio</a> while I work on my site. 
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Work",
                        tabIcon: ImportantDevices,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Home(s)",
                        tabIcon: Home,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorites",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
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
