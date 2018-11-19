// @flow
// Module dependencies
import * as React from 'react';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';

import Loader from 'components/common/Loader';

// Types
type Props = Function;
type Return = React.Node;

// Component
const withLoadable = (loader: Props): Return =>
  LoadableVisibility({
    delay: 200,
    loader,
    loading: Loader,
    timeout: 10000
  });

// Module exports
export default withLoadable;
