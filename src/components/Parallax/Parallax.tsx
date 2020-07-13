import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
// core components
import parallaxStyle from '../../assets/jss/material-kit-react/components/parallaxStyle';
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components

const useStyles = makeStyles((theme) => ({
  parallax: {
    height: '90vh',
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
  },
  filter: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
    },
  },
  small: {
    height: '380px',
  },
  xSmall: {
    height: 100,
  },
}));

interface IParallaxProps {
  className?: string;
  filter?: boolean;
  children?: any;
  style?: string;
  image?: string;
  small?: boolean;
  random?: boolean;
}

interface IParallaxState {
  transform: string;
  imageToUse: string;
}

const bgImages = ['/nyc-bg.jpg', '/balt-bg.jpg', '/ams-bg.jpg', '/ams-bg2.jpg', '/ams-bg3.jpg'];

const Parallax = (props: IParallaxProps) => {

  var windowScrollTop = window.pageYOffset / 3;
  const [transform, setTransform] = React.useState('translate3d(0,' + windowScrollTop + 'px,0)');
  const [imageToUse, setImageToUse] = React.useState( props.random
    ? bgImages[Math.floor(Math.random() * bgImages.length)]
    : props.image);

   
  componentDidMoun() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    });
    window.addEventListener('scroll', this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.resetTransform);
  }
  resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    });
  };
    const { classes, filter, className, children, image, small, random = false } = props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined,
    });

    return (
      <div
        className={parallaxClasses}
        style={{
          // style,
          backgroundImage: 'url(' + this.state.imageToUse + ')',
          ...this.state,
        }}
      >
        {children}
      </div>
    );
}

// Parallax.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   filter: PropTypes.bool,
//   children: PropTypes.node,
//   style: PropTypes.string,
//   image: PropTypes.string,
//   small: PropTypes.bool
// };

export default Parallax;
