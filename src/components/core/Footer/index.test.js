// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Footer from './index';

// Tests
describe('components/core/Footer', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });
});
