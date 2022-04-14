// core components
// @mui/material components
import withStyles from '@mui/material/styles/withStyles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { WithStyles } from '@mui/styles';
// nodejs library that concatenates classes
import classNames from 'classnames';
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
import React from 'react';
// nodejs library to set properties for components
import SwipeableViews from 'react-swipeable-views';
import navPillsStyle from '../../assets/jss/material-kit-react/components/navPillsStyle';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

// interface IShape {
//   tabButton: string;
//   tabIcon: object;
//   tabContent: any;
// }
interface INavPillsProps {
  active?: number;
  tabs?: any;
  color?: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';

  direction?: string;
  horizontal?: any;
  alignCenter?: boolean;
}

interface INavPillsState {
  active: number;
}

interface INavPills extends INavPillsProps, WithStyles<typeof navPillsStyle> {}
class NavPills extends React.Component<INavPills, INavPillsState> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(props: INavPills, state: INavPillsState) {
    super(props);
    this.state = {
      active: props.active as number,
    };
  }
  handleChange = (event: any, active: any) => {
    this.setState({ active });
  };
  handleChangeIndex = (index: number) => {
    this.setState({ active: index });
  };
  render() {
    const { classes, tabs, direction, color, horizontal, alignCenter } = this.props;
    const flexContainerClasses = classNames({
      [classes.flexContainer]: true,
      [classes.horizontalDisplay]: horizontal !== undefined,
    });
    const tabButtons = (
      <Tabs
        classes={{
          root: classes.root,
          fixed: classes.fixed,
          flexContainer: flexContainerClasses,
          indicator: classes.displayNone,
        }}
        value={this.state.active}
        onChange={this.handleChange}
        centered={alignCenter}
      >
        {(tabs as any[]).map((prop, key) => {
          const icon = {} as any;
          if (prop.tabIcon !== undefined) {
            icon.icon = <prop.tabIcon className={classes.tabIcon} />;
          }
          const pillsClasses = classNames({
            [classes.pills]: true,
            [classes.horizontalPills]: horizontal !== undefined,
            [classes.pillsWithIcons]: prop.tabIcon !== undefined,
          });
          return (
            <Tab
              label={prop.tabButton}
              key={key}
              {...icon}
              classes={{
                root: pillsClasses,
                selected: classes[color as keyof typeof classes],
                wrapper: classes.tabWrapper,
              }}
            />
          );
        })}
      </Tabs>
    );
    const tabContent = (
      <div className={classes.contentWrapper}>
        <SwipeableViews
          axis={direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.active}
          onChangeIndex={this.handleChangeIndex}
        >
          {(tabs as any[]).map((prop, key) => {
            return (
              <div key={key} className={classes.swipeableTab}>
                {prop.tabContent}
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    );

    return horizontal !== undefined ? (
      <GridContainer>
        <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
        <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
      </GridContainer>
    ) : (
      <div>
        {tabButtons}
        {tabContent}
      </div>
    );
  }
}

export default withStyles<never, never, INavPillsProps>(navPillsStyle)(NavPills as any);
