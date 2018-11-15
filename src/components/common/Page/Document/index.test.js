// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Document from './index';

// Tests
describe('components/common/Page/Document', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Document>{children}</Document>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
