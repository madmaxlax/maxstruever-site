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
// @material-ui/core components
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';
// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import CustomTabs from '../../../components/CustomTabs/CustomTabs';
import tabsStyle from '../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle';

type ISectionTabsProps = WithStyles<typeof tabsStyle>;
class SectionTabs extends React.Component<ISectionTabsProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h3>Navigation Tabs</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                  <small>Tabs with Icons on Card</small>
                </h3>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: 'Profile',
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push possibilities, to show people, this is
                          the level that things could be at. So when you get something that has the name Kanye West on
                          it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company
                          that ends up being worth billions of dollars, because I got the answers. I understand culture.
                          I am the nucleus.
                        </p>
                      ),
                    },
                    {
                      tabName: 'Messages',
                      tabIcon: Chat,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push possibilities, to show people, this is
                          the level that things could be at. I will be the leader of a company that ends up being worth
                          billions of dollars, because I got the answers. I understand culture. I am the nucleus. I
                          think that’s a responsibility that I have, to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      ),
                    },
                    {
                      tabName: 'Settings',
                      tabIcon: Build,
                      tabContent: (
                        <p className={classes.textCenter}>
                          think that’s a responsibility that I have, to push possibilities, to show people, this is the
                          level that things could be at. So when you get something that has the name Kanye West on it,
                          it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that
                          ends up being worth billions of dollars, because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      ),
                    },
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                  <small>Tabs on Plain Card</small>
                </h3>
                <CustomTabs
                  plainTabs
                  headerColor="danger"
                  tabs={[
                    {
                      tabName: 'Home',
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push possibilities, to show people, this is
                          the level that things could be at. So when you get something that has the name Kanye West on
                          it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company
                          that ends up being worth billions of dollars, because I got the answers. I understand culture.
                          I am the nucleus.
                        </p>
                      ),
                    },
                    {
                      tabName: 'Updates',
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push possibilities, to show people, this is
                          the level that things could be at. I will be the leader of a company that ends up being worth
                          billions of dollars, because I got the answers. I understand culture. I am the nucleus. I
                          think that’s a responsibility that I have, to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      ),
                    },
                    {
                      tabName: 'History',
                      tabContent: (
                        <p className={classes.textCenter}>
                          think that’s a responsibility that I have, to push possibilities, to show people, this is the
                          level that things could be at. So when you get something that has the name Kanye West on it,
                          it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that
                          ends up being worth billions of dollars, because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(SectionTabs);
