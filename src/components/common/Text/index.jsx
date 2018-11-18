// Module dependencies
import cx from 'classnames';
import React from 'react';

// Styles
import './styles.scss';

// Default props
const defaultProps = {
  highlight: false,
  normal: false,
  options: ''
};

// Component
const Text = ({
  children, highlight, normal, options
}) => {
  if (highlight) {
    return (
      <strong className={options} styleName="highlight">
        {children}
      </strong>
    );
  }

  return (
    <span className={!!options && options} styleName={cx(normal && 'normal')}>
      {children}
    </span>
  );
};

// Specify default values for props
Text.defaultProps = defaultProps;

// Module exports
export default Text;
