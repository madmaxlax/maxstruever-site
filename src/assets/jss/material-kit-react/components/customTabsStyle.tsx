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

import { createStyles } from '@mui/material';

const customTabsStyle = createStyles({
  cardTitle: {
    float: 'left',
    padding: '10px 10px 10px 0px',
    lineHeight: '24px',
  },
  cardTitleRTL: {
    float: 'right',
    padding: '10px 0px 10px 10px !important',
  },
  displayNone: {
    display: 'none !important',
  },
  tabsRoot: {
    minHeight: 'unset !important',
  },
  tabRootButton: {
    minHeight: 'unset !important',
    minWidth: 'unset !important',
    width: 'unset !important',
    height: 'unset !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
    padding: '10px 15px',
    borderRadius: '3px',
    lineHeight: '24px',
    border: '0 !important',
    color: '#fff !important',
    marginLeft: '4px',
    fontWeight: 500,
    fontSize: '12px',
    '&:last-child': {
      marginLeft: '0px',
    },
  },
  tabSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: '0.2s background-color 0.1s',
  },
  tabWrapper: {
    display: 'inline-block',
    minHeight: 'unset !important',
    minWidth: 'unset !important',
    width: 'unset !important',
    height: 'unset !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
    '& > svg': {
      verticalAlign: 'middle',
      margin: '-1.55px 5px 0 0 !important',
    },
    '&,& *': {
      letterSpacing: 'normal !important',
    },
  },
});

export default customTabsStyle;
