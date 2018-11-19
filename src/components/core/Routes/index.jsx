// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Constants
import PATHS from 'constants/router/paths';

// Screens
import Nearby from 'screens/main/Nearby';
import Search from 'screens/main/Search';
import Profile from 'screens/main/Profile';
import NotFound from 'screens/main/404';

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
