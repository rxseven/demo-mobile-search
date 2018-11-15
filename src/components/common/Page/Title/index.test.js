// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Title from './index';

// Tests
describe('components/common/Page/Title', () => {
  it('should render children', () => {
    // Mock data
    const text = 'Page title';

    // Shallow rendering
    const wrapper = shallow(<Title>{text}</Title>);

    // Assertions
    expect(wrapper.find('title').text()).toEqual(text);
  });
});
