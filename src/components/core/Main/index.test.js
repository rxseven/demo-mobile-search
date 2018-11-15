// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Main from './index';

// Tests
describe('components/core/Main', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Main>{children}</Main>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
