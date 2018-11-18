// @flow
// Module dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Column, Container, Row } from 'components/common/Grid';
import Layout from 'components/common/Layout';

// Constants
import PATHS from 'constants/router/paths';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Footer = (): Return => (
  <footer styleName="container">
    <Container>
      <Row>
        <Column>
          <Layout>
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
          </Layout>
        </Column>
      </Row>
    </Container>
  </footer>
);

// Module exports
export default Footer;
