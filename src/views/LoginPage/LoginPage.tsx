import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import { WithStyles } from '@material-ui/styles';
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
import image from '../../assets/img/bg7.jpg';
import loginPageStyle from '../../assets/jss/material-kit-react/views/loginPage';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardHeader from '../../components/Card/CardHeader';
import Button from '../../components/CustomButtons/ButtonLink';
import CustomInput from '../../components/CustomInput/CustomInput';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
// core components
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';

type ILoginPageProps = WithStyles<typeof loginPageStyle>;
interface ILoginPageState {
  cardAnimaton: string;
}
class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props: ILoginPageProps, state: ILoginPageState) {
    super(props, state);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      (() => {
        this.setState({ cardAnimaton: '' });
      }).bind(this),
      700,
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header absolute color="transparent" brand="Material Kit React" rightLinks={<HeaderLinks />} {...rest} />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton as keyof typeof classes]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="transparent"
                          onClick={(e: any) => e.preventDefault()}
                        >
                          <i className={'fab fa-twitter'} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="transparent"
                          onClick={(e: any) => e.preventDefault()}
                        >
                          <i className={'fab fa-facebook'} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="transparent"
                          onClick={(e: any) => e.preventDefault()}
                        >
                          <i className={'fab fa-google-plus-g'} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'email',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'password',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                            </InputAdornment>
                          ),
                          autoComplete: 'off',
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage as any);
