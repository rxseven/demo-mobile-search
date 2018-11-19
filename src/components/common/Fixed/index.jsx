// Module dependencies
import React from 'react';

// Components
import { Column, Container, Row } from 'components/common/Grid';
import Layout from 'components/common/Layout';

// Component
const Fixed = ({ children }) => (
  <Container>
    <Row>
      <Column>
        <Layout>{children}</Layout>
      </Column>
    </Row>
  </Container>
);

// Module exports
export default Fixed;
