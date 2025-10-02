import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import Button from '../CustomButtons/ButtonLink';
import { menuItems, socialMediaLinks } from './headerNavigationData';

interface HeaderLinksMobileProps {
  classes: any;
}

function HeaderLinksMobile(props: HeaderLinksMobileProps) {
  const { classes } = props;

  return (
    <List className={classes.list}>
      {/* Menu items - each as a separate row */}
      {menuItems.map((item, index) => (
        <ListItem key={index} className={classes.listItem}>
          <Button
            color="transparent"
            href={item.href}
            className={classes.navLink}
            onClick={item.onClick}
            {...(item.external && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            {item.label}
          </Button>
        </ListItem>
      ))}

      {/* Social media links */}
      {socialMediaLinks.map((social) => (
        <ListItem key={social.id} className={classes.listItem}>
          <Tooltip
            id={`${social.id}-tooltip`}
            title={social.title}
            placement="left"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.navLink}
              aria-label={social.ariaLabel}
            >
              <i className={`${classes.socialIcons} ${social.iconClass}`} />
            </Button>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinksMobile);
