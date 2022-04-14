import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    height: 200,
  },
}));

interface IParallaxProps {
  className?: string;
  filter?: boolean;
  children?: any;
  style?: string;
  image?: string;
  small?: boolean;
  xSmall?: boolean;
  random?: boolean;
}

const bgImages = ['/nyc-bg.jpg', '/balt-bg.jpg', '/ams-bg.jpg', '/ams-bg2.jpg', '/ams-bg3.jpg'];

const Parallax = (props: IParallaxProps) => {
  const classes = useStyles();

  const { filter, className, children, image, small, xSmall, random = false } = props;
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.xSmall]: xSmall,
    [className as string]: className !== undefined,
  });
  const windowScrollTop = window.pageYOffset / 3;
  const [transform, setTransform] = useState('translate3d(0,' + windowScrollTop + 'px,0)');
  // eslint-disable-next-line
  const [imageToUse, setImageToUse] = useState(random ? bgImages[Math.floor(Math.random() * bgImages.length)] : image);
  console.log(random, image, imageToUse);

  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };
  useEffect(() => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
    window.addEventListener('scroll', resetTransform);

    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('scroll', resetTransform);
    };
  }, []);

  return (
    <div
      className={parallaxClasses}
      style={{
        // style,
        backgroundImage: `url(${(imageToUse as any).default || imageToUse})`,
        transform,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
