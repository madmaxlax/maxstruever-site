import { withStyles } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import classNames from 'classnames';
import React from 'react';
import footerStyle from '../../assets/jss/material-kit-react/components/footerStyle';

interface IFooter {
  classes?: any;
  whiteFont?: boolean;
}

function Footer({ ...props }: IFooter) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          {/* <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank" rel="noopener noreferrer"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={classes.block}
                target="_blank" rel="noopener noreferrer"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank" rel="noopener noreferrer"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank" rel="noopener noreferrer"
              >
                Licenses
              </a>
            </ListItem>
          </List> */}
        </div>
        <div className={classes.right}>
          &copy; 1989-{new Date().getFullYear()}, made with <Favorite className={classes.icon} /> by Max Struever (duh).{' '}
          <br />
          Design based off of{' '}
          <a
            href="https://www.creative-tim.com/product/material-kit-react"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            this template
          </a>
          ...sorry, I'm not that creative.
        </div>
      </div>
    </footer>
  );
}

export default withStyles(footerStyle)(Footer);
