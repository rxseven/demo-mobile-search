// Module dependencies
import * as React from 'react';

import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Styles
import './styles.scss';

// Component
class Nearby extends React.Component {
  render() {
    return (
      <Document>
        <Head>
          <Title>Nearby | Search Flow</Title>
        </Head>
        <Body>
          <Layout>
            <div styleName="section">
              <input
                className="btn btn-outline-secondary btn-block"
                type="button"
                value="What are you looking for?"
              />
            </div>
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default Nearby;
