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
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
// core components
import typographyStyle from '../../assets/jss/material-kit-react/components/typographyStyle';

interface IWarning extends WithStyles<typeof typographyStyle> {
  children?: any;
}
function Warning({ ...props }: IWarning) {
  const { classes, children } = props;
  return <div className={classes.defaultFontStyle + ' ' + classes.warningText}>{children}</div>;
}

export default withStyles(typographyStyle)(Warning);
