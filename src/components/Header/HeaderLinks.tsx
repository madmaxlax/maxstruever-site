import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import withStyles from '@material-ui/core/styles/withStyles';
import { Apps } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import Button from '../CustomButtons/ButtonLink';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { menuItems, socialMediaLinks } from './headerNavigationData';

interface HeaderLinksProps {
  classes: any;
}

// Desktop links. Below md the Header swaps this for a drawer (HeaderLinksMobile).
// Wide screens show every page inline. Medium screens fold pages into one Menu dropdown.
function HeaderLinks(props: HeaderLinksProps) {
  const { classes } = props;
  const wide = useMediaQuery('(min-width:1200px)');

  const pageLink = (item: typeof menuItems[number], className: string, key?: number) =>
    item.external ? (
      <a
        key={key}
        className={className}
        onClick={item.onClick}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.label}
      </a>
    ) : (
      <Link key={key} className={className} onClick={item.onClick} to={item.href}>
        {item.label}
      </Link>
    );

  return (
    <List className={classes.list}>
      {wide ? (
        menuItems.map((item, index) => (
          <ListItem key={index} className={classes.listItem}>
            {pageLink(item, classes.navLink)}
          </ListItem>
        ))
      ) : (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Menu"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={menuItems.map((item, index) => pageLink(item, classes.dropdownLink, index))}
          />
        </ListItem>
      )}

      {socialMediaLinks.map((social) => (
        <ListItem key={social.id} className={classes.listItem}>
          <Tooltip
            id={`${social.id}-tooltip`}
            title={social.title}
            placement="bottom"
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

export default withStyles(headerLinksStyle)(HeaderLinks);
