// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Types
type Props = {
  alignment?: string,
  children: React.Node
};
type Return = React.Node;

// Default props
const defaultProps = {
  alignment: null
};

// Component
const Row = ({ alignment, children }: Props): Return => (
  <div className={cx('row', alignment)}>{children}</div>
);

// Specify default values for props
Row.defaultProps = defaultProps;

// Module exports
export default Row;
