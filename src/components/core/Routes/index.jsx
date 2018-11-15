// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withLoadable from 'HOCs/common/withLoadable';

// Constants
import PATHS from 'constants/router/paths';

// Screens
const Nearby = withLoadable(() => import('screens/main/Nearby'));
const Search = withLoadable(() => import('screens/main/Search'));
const Profile = withLoadable(() => import('screens/main/Profile'));
const NotFound = withLoadable(() => import('screens/main/404'));

// Component
const Routes = () => (
  <Switch>
    <Route component={Nearby} exact path={PATHS.main.nearby} />
    <Route component={Search} path={PATHS.main.search} />
    <Route component={Profile} path={PATHS.main.profile} />
    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
