// @flow
// Module dependencies
import * as React from 'react';

import Layout from 'components/common/Layout';
import Spinner from 'components/common/Spinner';
import { reload } from 'helpers/utilities';

// Styles
import './styles.scss';

// Types
type Props = {
  error: any,
  pastDelay: boolean,
  timedOut: boolean
};
type Return = React.Node;

// Wrapper
const Wrapper = ({ children }: { children: React.Node }): Return => (
  <Layout size="col-md-8 col-lg-6">{children}</Layout>
);

// Component
const Loader = (props: Props): Return => {
  // When the loader has errored
  if (props.error) {
    return (
      <Wrapper>
        <div className="card">
          <div className="card-header">Sorry</div>
          <div className="card-body">
            <p className="card-text message">Something went wrong, please reload a webpage.</p>
            <button className="btn btn-primary" onClick={() => reload()}>
              Reload
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }

  // When the loader has taken longer than the timeout
  if (props.timedOut) {
    return (
      <Wrapper>
        <Spinner />
        <div styleName="timeout">
          <p className="message">Please take a moment</p>
        </div>
      </Wrapper>
    );
  }

  // When the loader has taken longer than the delay
  if (props.pastDelay) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  // When the loader has just started
  return null;
};

// Module exports
export default Loader;
export { Wrapper };
