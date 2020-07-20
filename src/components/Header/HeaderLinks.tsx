import { Apps } from '@material-ui/icons';
import Button from '../CustomButtons/ButtonLink';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import withStyles from '@material-ui/core/styles/withStyles';

function HeaderLinks({ ...props }) {
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
            <Link to="/" className={classes.dropdownLink}>
              Home
            </Link>,
            <a href="http://resume.maxstruever.com/" className={classes.dropdownLink}>
              Download Resume
            </a>,
            <a href="http://portfolio.maxstruever.com/" className={classes.dropdownLink}>
              Portfolio
            </a>,
            <Link to="/city-recs" className={classes.dropdownLink}>
              City Recommendations
            </Link>,
            <Link to="/referrals" className={classes.dropdownLink}>
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
