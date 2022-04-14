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
import Button from '@mui/material/Button';
// @mui/material components
import withStyles from '@mui/material/styles/withStyles';
import { WithStyles } from '@mui/styles';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';
import React from 'react';
import paginationStyle from '../../assets/jss/material-kit-react/components/paginationStyle';

interface IPaginationProps extends WithStyles<typeof paginationStyle> {
  pages?: any[];
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
}
function Pagination({ ...props }: IPaginationProps) {
  const { classes, pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages?.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color as keyof typeof classes]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button onClick={() => alert("you've clicked " + prop.text)} className={paginationLink}>
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default withStyles(paginationStyle)(Pagination);
