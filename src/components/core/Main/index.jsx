// @flow
// Module dependencies
import * as React from 'react';

import { Column, Container, Row } from 'components/common/Grid';

// Styles
import './styles.scss';

// Types
type Props = { children: React.Node };
type Return = React.Node;

// Component
const Main = ({ children }: Props): Return => (
  <main styleName="container">
    <Container>
      <Row>
        <Column>{children}</Column>
      </Row>
    </Container>
  </main>
);

// Module exports
export default Main;
