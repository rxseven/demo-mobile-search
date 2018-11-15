// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Header from './index';

// Tests
describe('components/core/Header', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});
