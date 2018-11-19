// @flow
// Module dependencies
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider as Location } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

import Content from '../Content';
import Footer from '../Footer';
import Main from '../Main';
import Routes from '../Routes';
import Wrapper from '../Wrapper';

// Types
type Return = React.Node;

// Component
const App = (): Return => (
  <Router>
    <React.Fragment>
      <ScrollMemory />
      <Location>
        <Wrapper>
          <Content>
            <Main>
              <Routes />
            </Main>
            <Footer />
          </Content>
        </Wrapper>
      </Location>
    </React.Fragment>
  </Router>
);

// Module exports
export default hot(module)(App);
