import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import Explore from '@material-ui/icons/Explore';
import Face from '@material-ui/icons/Face';
// @material-ui/icons
import Search from '@material-ui/icons/Search';
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
import React from 'react';
import image from '../../../assets/img/bg.jpg';
import profileImage from '../../../assets/img/faces/avatar.jpg';
import navbarsStyle from '../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle';
import Button from '../../../components/CustomButtons/ButtonLink';
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown';
import CustomInput from '../../../components/CustomInput/CustomInput';
// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Header from '../../../components/Header/Header';

type ISectionNavbarsProps = WithStyles<typeof navbarsStyle>;

class SectionNavbars extends React.Component<ISectionNavbarsProps, any> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu</h3>
              </div>
              <Header
                brand="Menu"
                color="primary"
                leftLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={(e: any) => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={(e: any) => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        buttonText="Dropdown"
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          className: classes.navLink,
                          color: 'transparent',
                        }}
                        dropdownList={[
                          'Action',
                          'Another action',
                          'Something else here',
                          { divider: true },
                          'Separated link',
                          { divider: true },
                          'One more separated link',
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu with Icons</h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon="settings"
                        buttonProps={{
                          className: classes.navLink,
                          color: 'transparent',
                        }}
                        dropdownList={[
                          'Action',
                          'Another action',
                          'Something else here',
                          { divider: true },
                          'Separated link',
                          { divider: true },
                          'One more separated link',
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>Navigation</h3>
          </div>
        </div>
        <div id="navbar" className={classes.navbar}>
          <div className={classes.navigation} style={{ backgroundImage: 'url(' + image + ')' }}>
            <Header
              brand="Brand"
              color="rose"
              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                </List>
              }
              rightLinks={
                <div>
                  <CustomInput
                    white
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      className: classes.formControl,
                    }}
                    inputProps={{
                      placeholder: 'Search',
                      inputProps: {
                        'aria-label': 'Search',
                        className: classes.searchInput,
                      },
                    }}
                  />
                  <Button justIcon round color="white">
                    <Search className={classes.searchIcon} />
                  </Button>
                </div>
              }
            />
            <Header
              brand="Info Color"
              color="info"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + ' ' + classes.navLinkActive}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Primary Color"
              color="primary"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + ' ' + classes.navLinkActive}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      <Explore className={classes.icons} /> Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      <AccountCircle className={classes.icons} /> Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      <Icon className={classes.icons}>settings</Icon> Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with notifications"
              color="dark"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      justIcon
                      round
                      href="#pablo"
                      className={classes.notificationNavLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="rose"
                    >
                      <Email className={classes.icons} />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="black"
                      dropdownHeader="Dropdown Header"
                      buttonText={<img src={profileImage} className={classes.img} alt="profile" />}
                      buttonProps={{
                        className: classes.navLink + ' ' + classes.imageDropdownButton,
                        color: 'transparent',
                      }}
                      dropdownList={['Me', 'Settings and other stuff', 'Sign out']}
                    />
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with profile"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.registerNavLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="rose"
                      round
                    >
                      Register
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Transparent"
              color="transparent"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink + ' ' + classes.socialIconsButton}>
                      <i className={classes.socialIcons + ' ' + classes.marginRight5 + ' fab fa-twitter'} /> Twitter
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink + ' ' + classes.socialIconsButton}>
                      <i className={classes.socialIcons + ' ' + classes.marginRight5 + ' fab fa-facebook'} /> Facebook
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink + ' ' + classes.socialIconsButton}>
                      <i className={classes.socialIcons + ' ' + classes.marginRight5 + ' fab fa-instagram'} /> Instagram
                    </Button>
                  </ListItem>
                </List>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
