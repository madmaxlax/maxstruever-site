import * as React from "react";

import { WithStyles, withStyles } from "@material-ui/styles";

// @material-ui/core components
import Button from "@material-ui/core/Button";
import buttonStyle from "../../assets/jss/material-kit-react/components/buttonStyle";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components


interface IRegularButtonProps extends WithStyles<typeof buttonStyle> {
  color?: string;
  round?: boolean;
  children?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  simple?: boolean;
  buttonRef?: any;
  size?: string;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
  onClick?: any;
  href?: string;
  rel?: string;
  target?: string;
  title?: string;
  to?: string;
}

const RegularButton = React.forwardRef(
  (props: IRegularButtonProps, ref: any) => {
    const {
      color,
      round,
      children,
      fullWidth,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      className,
      classes,
      target,
      ...rest
    } = props;

    // @ts-ignore
    // const classes = makeComponentStyles();

    const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [className]: className
    });
    return (
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
    );
  }
);

export default withStyles(buttonStyle)(RegularButton);
