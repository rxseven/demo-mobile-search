// Module dependencies
import * as React from 'react';

import Category from 'components/common/Category/List';
import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Constants
import PATHS from 'constants/router/paths';
import { CATEGORIES } from 'dummy';

// Styles
import './styles.scss';

// Component
class Nearby extends React.Component {
  // Redirect to search screen
  redirectSearch = () => {
    this.props.history.push({ pathname: PATHS.main.search });
  };

  // onSelect handler
  selectCategory = (name) => {
    this.props.actions.search.setCategory(name, () => {
      this.redirectSearch();
    });
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
            <div styleName="section">
              <Category data={CATEGORIES} onSelect={this.selectCategory} />
            </div>
            <div styleName="section">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.redirectSearch}
                type="button"
              >
                More...
              </button>
            </div>
            <div styleName="section">
              <h2 styleName="headline">Attractions near you</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default Nearby;
