// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Content from './index';

// Tests
describe('components/core/Content', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Content>{children}</Content>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
