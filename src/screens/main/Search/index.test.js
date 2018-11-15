// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Search from './index';

// Tests
describe('screens/main/Search', () => {
  it('should render without crashing', () => {
    shallow(<Search />);
  });
});
