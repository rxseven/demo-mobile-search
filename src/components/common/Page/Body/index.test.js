// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Body from './index';

// Tests
describe('components/common/Page/Body', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Body>{children}</Body>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
