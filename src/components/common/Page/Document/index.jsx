// @flow
// Module dependencies
import * as React from 'react';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
export const Document = ({ children }: Props): Return => children;

// Module exports
export default Document;
