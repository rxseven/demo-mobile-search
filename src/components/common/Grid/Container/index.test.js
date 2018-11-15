// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Container from './index';

// Tests
describe('components/common/Grid/Container', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Container>{children}</Container>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should have a correct class name', () => {
    // Mock data
    const children = <div>Content</div>;
    const className = 'container';

    // Shallow rendering
    const wrapper = shallow(<Container>{children}</Container>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(className);
  });
});
