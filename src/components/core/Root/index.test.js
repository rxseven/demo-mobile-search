// Module dependencies
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import React from 'react';
import configureStore from 'redux-mock-store';

// Components
import App from 'components/core/App';
import Root from './index';

// Tests
describe('components/core/Root', () => {
  it('should accept "store" prop', () => {
    // Initialize mock Redux store
    const store = configureStore();

    // Mock data
    const initialState = Map();

    // Shallow rendering
    shallow(<Root store={store(initialState)} />);
  });

  it('should render <App />', () => {
    // Initialize mock Redux store
    const store = configureStore();

    // Mock data
    const initialState = Map();

    // Shallow rendering
    const wrapper = shallow(<Root store={store(initialState)} />);

    // Assertions
    expect(wrapper).toContainReact(<App />);
  });
});
