// @flow
// Module dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Fixed from 'components/common/Fixed';

// Constants
import PATHS from 'constants/router/paths';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Footer = (): Return => (
  <footer styleName="container">
    <Fixed>
      <ul styleName="navigation">
        <li>
          <NavLink exact to={PATHS.main.nearby}>
            Around Me
          </NavLink>
        </li>
        <li>
          <NavLink to={PATHS.main.search}>Search</NavLink>
        </li>
        <li>
          <NavLink to={PATHS.main.profile}>My Profile</NavLink>
        </li>
      </ul>
    </Fixed>
  </footer>
);

// Module exports
export default Footer;
