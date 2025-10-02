import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import Button from '../CustomButtons/ButtonLink';

interface HeaderLinksMobileProps {
  classes: any;
}

function HeaderLinksMobile(props: HeaderLinksMobileProps) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      {/* Exploded menu items - each as a separate row */}
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/"
          className={classes.navLink}
        >
          Home
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="http://resume.maxstruever.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
        >
          Download Resume
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="http://portfolio.maxstruever.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
        >
          Portfolio
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/city-recs"
          className={classes.navLink}
        >
          City Recommendations
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/referrals"
          className={classes.navLink}
        >
          Referral Links
        </Button>
      </ListItem>

      {/* Social media links */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="My Github"
          placement="left"
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
          placement="left"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/dadmaxlax"
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

export default withStyles(headerLinksStyle)(HeaderLinksMobile);
