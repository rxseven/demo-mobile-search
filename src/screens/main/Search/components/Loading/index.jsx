// Module dependencies
import React from 'react';

// Shared components
import Spinner from 'components/common/Spinner';

// Styles
import './styles.scss';

// Component
const Loading = () => (
  <div styleName="loading">
    <Spinner />
  </div>
);

// Module exports
export default Loading;
