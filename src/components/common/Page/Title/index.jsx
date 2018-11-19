// @flow
// Module dependencies
import * as React from 'react';
import { Helmet } from 'react-helmet';

// Types
type Props = { children: React.Node };
type Render = React.Node;

// Component
export const Title = ({ children }: Props): Render => (
  <Helmet>
    <title>{children}</title>
  </Helmet>
);

// Module exports
export default Title;
