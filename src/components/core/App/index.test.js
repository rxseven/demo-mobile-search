// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import App from './index';

// Tests
describe('components/core/App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
