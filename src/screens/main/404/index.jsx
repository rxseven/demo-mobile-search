// @flow
// Module dependencies
import * as React from 'react';
import { Link } from 'react-router-dom';

import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Constants
import PATHS from 'constants/router/paths';

// Types
type Return = React.Node;

// Component
const NotFound = (): Return => (
  <Document>
    <Head>
      <Title>Page not found</Title>
    </Head>
    <Body>
      <Layout>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">404</h5>
            <p className="card-text">This is not a screen you are looking for.</p>
            <Link className="card-link" to={PATHS.main.nearby}>
              Go back to Around Me screen
            </Link>
          </div>
        </div>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default NotFound;
