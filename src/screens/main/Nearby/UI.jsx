// Module dependencies
import * as React from 'react';

import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Constants
import PATHS from 'constants/router/paths';

// Styles
import './styles.scss';

// Component
class Nearby extends React.Component {
  // Redirect to search screen
  redirectSearch = () => {
    this.props.history.push({ pathname: PATHS.main.search });
  };

  // Render component
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
                onClick={this.redirectSearch}
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
