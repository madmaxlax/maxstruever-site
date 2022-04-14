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
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// nodejs library that concatenates classes
import classNames from 'classnames';
import * as React from 'react';
import headerStyle from '../../assets/jss/material-kit-react/components/headerStyle';

interface IHeaderState {
  mobileOpen: boolean;
}

interface IHeaderProps {
  color?: string;
  rightLinks?: any;
  leftLinks?: any;
  brand?: string;
  fixed?: boolean;
  absolute?: boolean;
  routes?: any;
  changeColorOnScroll?: any;
}
interface IHeader extends IHeaderProps, WithStyles<typeof headerStyle> {
  [name: string]: any;
}
class Header extends React.Component<IHeader, IHeaderState> {
  // mobileOpen: boolean = false;
  constructor(props: IHeader, state: IHeaderState) {
    super(props, state);

    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
    // this.mobileOpen = !this.mobileOpen;
  };
  headerColorChange = () => {
    const { classes, color = 'white', changeColorOnScroll } = this.props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName('header')[0].classList.remove(classes[color as keyof typeof classes]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color as keyof typeof classes]);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(classes[color as keyof typeof classes]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color as keyof typeof classes]);
    }
  };
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener('scroll', this.headerColorChange);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener('scroll', this.headerColorChange);
    }
  }
  render() {
    const { classes, color, rightLinks, leftLinks, brand, fixed, absolute } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color as keyof typeof classes]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
    });
    // var mobileOpen: boolean = this.state;

    const brandComponent = (
      <Button className={classes.title} href="/">
        {brand}
      </Button>
    );
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>{leftLinks}</Box>
            ) : (
              brandComponent
            )}
          </div>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>{rightLinks}</Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle}>
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Drawer
            variant="temporary"
            anchor={'right'}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Box>
      </AppBar>
    );
  }
}

export default withStyles<never, never, IHeaderProps>(headerStyle)(Header as any);

// export default Header;
