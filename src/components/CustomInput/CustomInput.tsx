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
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// @material-ui/core components
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames';
import React from 'react';
import customInputStyle from '../../assets/jss/material-kit-react/components/customInputStyle';

interface ICustomInputProps extends WithStyles<typeof customInputStyle> {
  labelText?: any;
  labelProps?: any;
  id?: string;
  inputProps?: any;
  formControlProps?: any;
  inputRootCustomClasses?: string;
  error?: boolean;
  success?: boolean;
  white?: boolean;
}
function CustomInput({ ...props }: ICustomInputProps) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
  } = props;

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses as any]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel className={classes.labelRoot + ' ' + labelClasses} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
}

export default withStyles(customInputStyle)(CustomInput);
