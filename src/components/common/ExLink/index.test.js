// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import ExLink from './index';

// Tests
describe('components/common/ExLink', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });

  it('should render a correct attribute value', () => {
    // Mock data
    const children = 'External link';
    const rel = 'noopener noreferrer';

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('rel')).toEqual(rel);
  });

  it('should render default "target" attribute', () => {
    // Mock data
    const children = 'External link';
    const target = '_blank';

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('target')).toEqual(target);
  });

  it('should render default "class" attribute', () => {
    // Mock data
    const children = 'External link';
    const style = 'link';

    // Shallow rendering
    const wrapper = shallow(<ExLink>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(style);
  });

  it('should accept "replace" prop', () => {
    // Mock data
    const children = 'External link';
    const replace = true;
    const target = '_self';

    // Shallow rendering
    const wrapper = shallow(<ExLink replace={replace}>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('target')).toEqual(target);
  });

  it('should accept "to" prop', () => {
    // Mock data
    const children = 'External link';
    const to = 'https://demo-mobile-search.herokuapp.com';

    // Shallow rendering
    const wrapper = shallow(<ExLink to={to}>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('href')).toEqual(to);
  });

  it('should accept "styles" prop', () => {
    // Mock data
    const children = 'External link';
    const styles = 'nav-link';

    // Shallow rendering
    const wrapper = shallow(<ExLink styles={styles}>{children}</ExLink>);

    // Assertions
    expect(wrapper.prop('className')).toEqual(styles);
  });
});
