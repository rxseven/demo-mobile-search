// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Wrapper from './index';

// Tests
describe('components/core/Wrapper', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Wrapper>{children}</Wrapper>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
