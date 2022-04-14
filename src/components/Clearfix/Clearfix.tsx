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
import { createStyles, WithStyles } from '@mui/material';
// nodejs library to set properties for components
// mterial-ui components
import withStyles from '@mui/material/styles/withStyles';
import React from 'react';

const style = createStyles({
  clearfix: {
    display: 'table',
    content: ' ',

    '&:after': {
      clear: 'both',
    },
  },
});

type IClearfix = WithStyles<typeof style>;
function Clearfix({ ...props }: IClearfix) {
  const { classes } = props;
  return <div className={classes.clearfix} />;
}

export default withStyles(style)(Clearfix);
