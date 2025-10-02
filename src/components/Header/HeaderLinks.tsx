import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
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

function HeaderLinks(props: HeaderLinksProps) {
  const { classes } = props;

  const dropdownMenuItems = menuItems.map((item, index) => {
    const commonProps = {
      className: classes.dropdownLink,
      onClick: item.onClick,
    };

    if (item.external) {
      return (
        <a key={index + 1} {...commonProps} href={item.href} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      );
    }

    return (
      <Link key={index + 1} {...commonProps} to={item.href}>
        {item.label}
      </Link>
    );
  });

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
          dropdownList={dropdownMenuItems}
        />
      </ListItem>

      <ListItem className={classes.listItem}></ListItem>

      {socialMediaLinks.map((social) => (
        <ListItem key={social.id} className={classes.listItem}>
          <Tooltip
            id={`${social.id}-tooltip`}
            title={social.title}
            placement={window.innerWidth > 959 ? 'top' : 'left'}
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
