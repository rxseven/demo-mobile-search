// Module dependencies
import * as React from 'react';

import Category from 'components/common/Category/List';
import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';
import { Searchbox, SearchboxBody, SearchboxForm } from 'components/common/Searchbox';

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
            <Searchbox>
              <SearchboxForm>
                <h1 styleName="branding">Branding</h1>
                <input
                  className="btn btn-light btn-block"
                  onClick={this.redirectSearch}
                  type="button"
                  value="What are you looking for?"
                />
              </SearchboxForm>
              <SearchboxBody>
                <div styleName="wrapper">
                  <div styleName="category">
                    <Category data={CATEGORIES} onSelect={this.selectCategory} />
                    <div styleName="category-more">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={this.redirectSearch}
                        type="button"
                      >
                        See more
                      </button>
                    </div>
                  </div>
                  <div>
                    <h2 styleName="headline">Attractions near you</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </SearchboxBody>
            </Searchbox>
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default Nearby;
