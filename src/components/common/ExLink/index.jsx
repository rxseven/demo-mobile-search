// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = {
  children: React.Node,
  replace?: boolean,
  styles?: string,
  to: string
};
type Return = React.Node;

// Default props
const defaultProps = {
  replace: false,
  styles: 'link'
};

// Component
const ExLink = (props: Props): Return => {
  const {
    children, replace, styles, to
  } = props;

  return (
    <a className={styles} href={to} rel="noopener noreferrer" target={replace ? '_self' : '_blank'}>
      {children}
    </a>
  );
};

// Specify default values for props
ExLink.defaultProps = defaultProps;

// Module exports
export default ExLink;
