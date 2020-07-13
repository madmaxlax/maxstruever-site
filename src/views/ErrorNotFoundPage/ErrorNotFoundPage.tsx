import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import React from 'react';
import { WithStyles } from '@material-ui/styles';
import classNames from 'classnames';
import profile from '../../assets/img/faces/Max-small-sq.jpg';
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage';
import withStyles from '@material-ui/core/styles/withStyles';

interface IProfilePage extends WithStyles<typeof profilePageStyle> {}
class ProfilePage extends React.Component<IProfilePage> {
  
  render() {
    document.title = 'Error: Page Not Found | Max Struever';
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
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
        <Parallax small filter random />
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
                      <h3 className={classes.title}>Page Not Found</h3>
                      <h6>Maybe it's still in progress ¯\_(ツ)_/¯</h6>
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withStyles(profilePageStyle)(ProfilePage);
