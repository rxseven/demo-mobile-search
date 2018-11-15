// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Head from './index';

// Tests
describe('components/common/Page/Head', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Head>{children}</Head>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
