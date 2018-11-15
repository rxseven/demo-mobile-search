// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Profile from './index';

// Tests
describe('screens/main/Profile', () => {
  it('should render without crashing', () => {
    shallow(<Profile />);
  });
});
