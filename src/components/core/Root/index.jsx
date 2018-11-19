// @flow
// Module dependencies
import * as React from 'react';
import { Provider } from 'react-redux';

import App from 'components/core/App';

// Types
type Props = { store: any };
type Return = React.Node;

// Component
const Root = ({ store }: Props): Return => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Module exports
export default Root;
