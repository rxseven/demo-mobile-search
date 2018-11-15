// @flow
// Module dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Column, Container, Row } from 'components/common/Grid';

// Constants
import PATHS from 'constants/router/paths';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Header = (): Return => (
  <header styleName="container">
    <Container>
      <Row>
        <Column>
          <div styleName="brand">
            <NavLink activeClassName="active" exact styleName="link" to={PATHS.main.nearby}>
              Branding
            </NavLink>
          </div>
        </Column>
      </Row>
    </Container>
  </header>
);

// Module exports
export default Header;
