// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Spinner from './index';

// Tests
describe('components/common/Spinner', () => {
  it('should render a correct output', () => {
    // Mock data
    const data = 'Loading...';

    // Shallow rendering
    const wrapper = shallow(<Spinner />);

    // Assertions
    expect(wrapper.text()).toEqual(data);
  });
});
