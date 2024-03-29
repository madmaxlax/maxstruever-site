// nodejs library to set properties for components
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { WithStyles } from '@material-ui/styles';
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
/*eslint-disable*/
import React from "react";
// core components
import downloadStyle from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle";
import Button from '../../../components/CustomButtons/ButtonLink';
// @material-ui/icons
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

interface ISectionDownload extends WithStyles<typeof downloadStyle> {}
class SectionDownload extends React.Component<ISectionDownload> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Do you love this UI Kit?</h2>
              <h4>
                Cause if you do, it can be yours for FREE. Hit the buttons below
                to navigate to our website where you can find the kit. We also
                have the Bootstrap 4 version on plain HTML. Start a new project
                or give an old Bootstrap project a new look!
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button color="primary" size="lg">
                <a
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Free React Download
                </a>
              </Button>
              <Button color="primary" size="lg">
                <a
                  href="https://www.creative-tim.com/product/material-kit?ref=mkr-download-section"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Free HTML Downoad
                </a>
              </Button>
            </GridItem>
          </GridContainer>
          <br />
          <br />
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Want more?</h2>
              <h4>
                We{"'"}ve launched{" "}
                <a
                  href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
                  target="_blank" rel="noopener noreferrer"
                >
                  Material Kit PRO React{" "}
                </a>
                .It has a huge number of components, sections and example pages.
                Start Your Development With A Badass Material-UI nspired by
                Material Design.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button color="rose" size="lg">
                <a
                  href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Material Kit PRO
                </a>
              </Button>
              <Button color="rose" size="lg">
                <a
                  href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Material Dashboard PRO
                </a>
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.textCenter + " " + classes.sharingArea}>
            <GridContainer justify="center">
              <h3>Thank you for supporting us!</h3>
            </GridContainer>
            <Button color="twitter">
              <i className={classes.socials + " fab fa-twitter"} /> Tweet
            </Button>
            <Button color="facebook">
              <i className={classes.socials + " fab fa-facebook-square"} />{" "}
              Share
            </Button>
            <Button color="google">
              <i className={classes.socials + " fab fa-google-plus-g"} />
              Share
            </Button>
            <Button color="github">
              <i className={classes.socials + " fab fa-github"} /> Star
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionDownload);
