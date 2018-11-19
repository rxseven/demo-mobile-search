// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import { Column, Row } from 'components/common/Grid';
import Layout from './index';

// Tests
describe('components/common/Layout', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Layout>{children}</Layout>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should contain a correct layout structure', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Layout>{children}</Layout>);

    // Assertions
    expect(wrapper.find(Row)).toHaveLength(1);
    expect(wrapper.find(Row).find(Column)).toHaveLength(1);
  });

  it('should contain <Row /> component with default "alignment" prop', () => {
    // Mock data
    const children = <div>Content</div>;
    const alignment = 'justify-content-sm-center';

    // Shallow rendering
    const wrapper = shallow(<Layout>{children}</Layout>);

    // Assertions
    expect(wrapper.find(Row).prop('alignment')).toEqual(alignment);
  });

  it('should accept "size" prop', () => {
    // Mock data
    const children = <div>Content</div>;
    const size = 'col-sm-12';

    // Shallow rendering
    const wrapper = shallow(<Layout size={size}>{children}</Layout>);

    // Assertions
    expect(wrapper.find(Column).prop('size')).toEqual(size);
  });
});
