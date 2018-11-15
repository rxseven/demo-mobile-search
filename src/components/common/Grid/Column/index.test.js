// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Column from './index';

// Tests
describe('components/common/Grid/Column', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Column>{children}</Column>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should render default column width', () => {
    // Mock data
    const children = <div>Content</div>;
    const size = 'col';

    // Shallow rendering
    const wrapper = shallow(<Column>{children}</Column>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(size);
  });

  it('should accept "size" prop', () => {
    // Mock data
    const children = <div>Content</div>;
    const size = 'col-sm-12';

    // Shallow rendering
    const wrapper = shallow(<Column size={size}>{children}</Column>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(size);
  });
});
