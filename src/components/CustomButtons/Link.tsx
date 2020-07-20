import { default as MaterialUILink, LinkTypeMap } from '@material-ui/core/Link';
import React from 'react';
import { NavLink } from 'react-router-dom';

const isInternalURL = (to: string) => {
  try {
    const url = new URL(to, window.location.origin);
    return url.hostname === window.location.hostname;
  } catch {
    return false;
  }
};

export const Link = <D extends React.ElementType = LinkTypeMap['defaultComponent'], P = {}>(
  props: any
) => {
  return (
    <MaterialUILink
      {...props}
      //internal vs external links
      href={!isInternalURL(props.to) ? props.to : undefined}
      component={isInternalURL(props.to) ? NavLink : 'a'}
    />
  );
};
