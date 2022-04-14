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
// @mui/material components
import withStyles from '@mui/material/styles/withStyles';
import { WithStyles } from '@mui/styles';
import React from 'react';
// core components
import typographyStyle from '../../assets/jss/material-kit-react/components/typographyStyle';

interface IQuote extends WithStyles<typeof typographyStyle> {
  text: any;
  author: any;
}
function Quote({ ...props }: IQuote) {
  const { classes, text, author } = props;
  return (
    <blockquote className={classes.defaultFontStyle + ' ' + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

export default withStyles(typographyStyle)(Quote);
