// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import withLoadable from './index';

// Tests
describe('HOCs/common/withLoadable', () => {
  it('should render without crashing', () => {
    shallow(<withLoadable />);
  });
});
