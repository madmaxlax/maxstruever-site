import React from 'react';
import { Link as ExternalLink } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from '@material-ui/core/styles/withStyles';
import { Apps } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import Button from '../CustomButtons/ButtonLink';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

interface HeaderLinksProps {
  classes: any;
}
function HeaderLinks(props: HeaderLinksProps) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link key={1} to="/" className={classes.dropdownLink}>
              Home
            </Link>,
            <a key={2} href="http://resume.maxstruever.com/" className={classes.dropdownLink}>
              Download Resume
            </a>,
            <a key={3} href="http://portfolio.maxstruever.com/" className={classes.dropdownLink}>
              Portfolio
            </a>,
            <Link key={4} to="/city-recs" className={classes.dropdownLink}>
              City Recommendations
            </Link>,
            ,
            <ExternalLink
              key={5}
              target="_blank"
              href="https://settlers.madmaxlax.com/"
              className={classes.dropdownLink}
            >
              Settlers Board Randomizer
            </ExternalLink>,
            <Link key={6} to="/referrals" className={classes.dropdownLink}>
              Referral Links
            </Link>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}></ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="My Github"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/madmaxlax"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-github'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/madmaxlax"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
