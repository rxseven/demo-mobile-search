// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Nearby from './index';

// Tests
describe('screens/main/Nearby', () => {
  it('should render without crashing', () => {
    shallow(<Nearby />);
  });
});
