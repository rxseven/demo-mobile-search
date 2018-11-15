// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Container = ({ children }: Props): Return => <div className="container">{children}</div>;

// Module exports
export default Container;
