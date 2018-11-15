// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import NotFound from './index';

// Tests
describe('screens/main/404', () => {
  it('should render without crashing', () => {
    shallow(<NotFound />);
  });
});
