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
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Snack from '@material-ui/core/SnackbarContent';
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
import snackbarContentStyle from '../../assets/jss/material-kit-react/components/snackbarContentStyle';

interface ISnackbarContentProps {
  message?: any;
  color?: 'info' | 'success' | 'warning' | 'danger' | 'primary';
  close?: boolean;
  icon?: any;
}
interface ISnackbarContentState {
  alert: any;
}

interface ISnackbarContent extends ISnackbarContentProps, WithStyles<typeof snackbarContentStyle> {}
class SnackbarContent extends React.Component<ISnackbarContent, ISnackbarContentState> {
  constructor(props: ISnackbarContent, state: ISnackbarContentState) {
    super(props, state);
    this.closeAlert = this.closeAlert.bind(this);
    const { classes, message, color, close, icon } = props;

    let action = [] as any[];
    if (close !== undefined) {
      action = [
        <IconButton
          className={classes.iconButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.closeAlert}
        >
          <Close className={classes.close} />
        </IconButton>,
      ];
    }

    let snackIcon = null;
    switch (typeof icon) {
      case 'object':
        snackIcon = <props.icon className={classes.icon} />;
        break;
      case 'string':
        snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
        break;
      default:
        snackIcon = null;
        break;
    }

    this.state = {
      alert: (
        <Snack
          message={
            <div>
              {snackIcon}
              {message}
              {close !== undefined ? action : null}
            </div>
          }
          classes={{
            root: classes.root + ' ' + classes[color as keyof typeof classes],
            message: classes.message + ' ' + classes.container,
          }}
        />
      ),
    };
  }
  closeAlert() {
    this.setState({ alert: null });
  }
  render() {
    return this.state.alert;
  }
}

export default withStyles<never, never, ISnackbarContentProps>(snackbarContentStyle)(SnackbarContent as any);
