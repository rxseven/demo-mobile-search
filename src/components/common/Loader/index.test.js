// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Spinner from 'components/common/Spinner';
import Loader, { Wrapper } from './index';

// Tests
describe('components/common/Loader', () => {
  it('should render nothing', () => {
    // Shallow rendering
    const wrapper = shallow(<Loader />);

    // Assertions
    expect(wrapper.get(0)).toBeNull();
  });

  it('should accept "error" prop', () => {
    // Mock data
    const data = true;
    const message = 'Something went wrong, please reload a webpage.';

    // Shallow rendering
    const wrapper = shallow(<Loader error={data} />);

    // Assertions
    expect(wrapper.find('.message').text()).toEqual(message);
  });

  it('should accept "timedOut" prop', () => {
    // Mock data
    const data = true;
    const message = 'Please take a moment';

    // Shallow rendering
    const wrapper = shallow(<Loader timedOut={data} />);

    // Assertions
    expect(wrapper.find(Spinner)).toHaveLength(1);
    expect(wrapper.find('.message').text()).toEqual(message);
  });

  it('should accept "pastDelay" prop', () => {
    // Mock data
    const data = true;

    // Shallow rendering
    const wrapper = shallow(<Loader pastDelay={data} />);

    // Assertions
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('should reload a web page when a button is clicked', () => {
    // Mock data and functions
    const data = true;
    window.location.reload = jest.fn();

    // Shallow rendering
    const wrapper = shallow(<Loader error={data} />);

    // Simulate user interaction
    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    // Assertions
    expect(window.location.reload).toHaveBeenCalled();
  });
});

describe('components/common/Loader.Wrapper', () => {
  it('should render children', () => {
    // Mock data
    const children = <div>Content</div>;

    // Shallow rendering
    const wrapper = shallow(<Wrapper>{children}</Wrapper>);

    // Assertions
    expect(wrapper).toContainReact(children);
  });
});
