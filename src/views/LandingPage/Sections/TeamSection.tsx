import Button from '../../../components/CustomButtons/ButtonLink';
import Card from '../../../components/Card/Card';
import CardBody from '../../../components/Card/CardBody';
import CardFooter from '../../../components/Card/CardFooter';
// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { WithStyles } from '@material-ui/styles';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';
import team1 from '../../../assets/img/faces/avatar.jpg';
import team2 from '../../../assets/img/faces/christian.jpg';
import team3 from '../../../assets/img/faces/kendall.jpg';
import teamStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

type ITeamSection = WithStyles<typeof teamStyle>;
class TeamSection extends React.Component<ITeamSection> {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Gigi Hadid
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members. You can give more details about what they
                    do. Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside
                    the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-instagram'} />
                  </Button>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-facebook'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Christian Louboutin
                  <br />
                  <small className={classes.smallTitle}>Designer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members. You can give more details about what they
                    do. Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside
                    the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-linkedin'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Kendall Jenner
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members. You can give more details about what they
                    do. Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside
                    the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-instagram'} />
                  </Button>
                  <Button justIcon color="transparent" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-facebook'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
