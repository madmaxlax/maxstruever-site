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
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
// nodejs library to set properties for components
// react component for creating beautiful carousel
import Carousel from 'react-slick';
import image1 from '../../../assets/img/bg.jpg';
import image2 from '../../../assets/img/bg2.jpg';
import image3 from '../../../assets/img/bg3.jpg';
import carouselStyle from '../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle';
import Card from '../../../components/Card/Card';
// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

type ISectionCarousel = WithStyles<typeof carouselStyle>;
class SectionCarousel extends React.Component<ISectionCarousel> {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img src={image1} alt="First slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img src={image2} alt="Second slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img src={image3} alt="Third slide" className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
