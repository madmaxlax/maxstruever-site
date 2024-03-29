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
import Icon from '@material-ui/core/Icon';
// nodejs library to set properties for components
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { WithStyles } from '@material-ui/styles';
// nodejs library that concatenates classes
import classNames from 'classnames';
import React from 'react';
import customTabsStyle from '../../assets/jss/material-kit-react/components/customTabsStyle';
// core components
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

interface ICustomTabsProps {
  headerColor?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';

  title?: string;
  tabs?: any;
  rtlActive?: boolean;
  plainTabs?: boolean;
}
interface ICustomTabsState {
  value: number;
}
interface ICustomTabs extends ICustomTabsProps, WithStyles<typeof customTabsStyle> {}
class CustomTabs extends React.Component<ICustomTabs, ICustomTabsState> {
  state = {
    value: 0,
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  render() {
    const { classes, headerColor, plainTabs, tabs, title, rtlActive } = this.props;

    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive,
    });
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone,
            }}
          >
            {(tabs as any[]).map((prop, key) => {
              let icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon: typeof prop.tabIcon === 'string' ? <Icon>{prop.tabIcon}</Icon> : <prop.tabIcon />,
                };
              }
              return (
                <Tab
                  classes={{
                    root: classes.tabRootButton,
                    // label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper,
                  }}
                  key={key}
                  label={prop.tabName}
                  {...icon}
                />
              );
            })}
          </Tabs>
        </CardHeader>
        <CardBody>
          {(tabs as any[]).map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(customTabsStyle)(CustomTabs);
