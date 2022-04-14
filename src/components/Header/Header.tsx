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
// @mui/icons-material
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @mui/material components
import withStyles from '@mui/material/styles/withStyles';
import Toolbar from '@mui/material/Toolbar';
import { WithStyles } from '@mui/styles';
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
interface IHeader extends IHeaderProps, WithStyles<typeof headerStyle> {}
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
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle}>
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="js">
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
        </Hidden>
      </AppBar>
    );
  }
}

export default withStyles<never, never, IHeaderProps>(headerStyle)(Header as any);

// export default Header;
