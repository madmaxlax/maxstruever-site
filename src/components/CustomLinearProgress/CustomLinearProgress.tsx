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
import LinearProgress from '@mui/material/LinearProgress';
// nodejs library to set properties for components
// @mui/material components
import withStyles from '@mui/material/styles/withStyles';
import { WithStyles } from '@mui/styles';
import React from 'react';
// core components
import customLinearProgressStyle from '../../assets/jss/material-kit-react/components/customLinearProgressStyle';

interface ICustomLinearProgressProps extends WithStyles<typeof customLinearProgressStyle> {
  color?: 'gray' | 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';
  variant?: any;
  value?: number;
  style?: any;
}
function CustomLinearProgress({ ...props }: ICustomLinearProgressProps) {
  const { classes, color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + ' ' + classes[(color + 'Background') as keyof typeof classes],
        bar: classes.bar + ' ' + classes[color as keyof typeof classes],
      }}
    />
  );
}

export default withStyles(customLinearProgressStyle)(CustomLinearProgress);
