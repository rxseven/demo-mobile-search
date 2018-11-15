// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Routes from './index';

// Tests
describe('components/core/Routes', () => {
  it('should render without crashing', () => {
    shallow(<Routes />);
  });
});
