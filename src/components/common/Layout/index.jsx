// @flow
// Module dependencies
import * as React from 'react';

import { Column, Row } from 'components/common/Grid';

// Types
type Props = {
  children: React.Node,
  size?: string
};
type Return = React.Node;

// Default props
const defaultProps = {
  size: 'col-md-10 col-lg-8'
};

// Component
const Layout = ({ children, size }: Props): Return => (
  <Row alignment="justify-content-sm-center">
    <Column size={size}>{children}</Column>
  </Row>
);

// Specify default values for props
Layout.defaultProps = defaultProps;

// Module exports
export default Layout;
