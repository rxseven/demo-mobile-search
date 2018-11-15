// @flow
// Module dependencies
import * as React from 'react';

// Constants
import HTML from 'constants/elements/html';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Content = ({ children }: Props): Return => <div id={HTML.content}>{children}</div>;

// Module exports
export default Content;
