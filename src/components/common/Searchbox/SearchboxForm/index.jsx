// Module dependencies
import React from 'react';

// Components
import Fixed from 'components/common/Fixed';

// Styles
import './styles.scss';

// Component
const SearchboxForm = ({ children }) => (
  <div styleName="form">
    <Fixed>{children}</Fixed>
  </div>
);

// Module exportes
export default SearchboxForm;
