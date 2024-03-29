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
import { WithStyles } from '@material-ui/styles';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';
import React from 'react';
import infoStyle from '../../assets/jss/material-kit-react/components/infoStyle';


interface IInfoArea extends WithStyles<typeof infoStyle> {
  icon: any;
  title: string;
  description: string;
  iconColor: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose' | 'gray';

  vertical: boolean;
}
function InfoArea({ ...props }: IInfoArea) {
  const { classes, title, description, iconColor = 'gray', vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

export default withStyles(infoStyle)(InfoArea);
