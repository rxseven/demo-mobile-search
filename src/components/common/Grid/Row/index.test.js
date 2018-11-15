// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Row from './index';

// Tests
describe('components/common/Grid/Row', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Row>{children}</Row>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should have a correct class name', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Row>{children}</Row>);

    // Assertions
    expect(wrapper.prop('className')).toEqual('row');
  });

  it('should accept "alignment" prop', () => {
    // Mock data
    const alignment = 'justify-content-center';
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Row alignment={alignment}>{children}</Row>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(`row ${alignment}`);
  });
});
