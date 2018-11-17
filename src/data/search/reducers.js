// Module dependencies
import { fromJS } from 'immutable';

// Action types
import { UNKNOWN } from './types';

// State shape
export const stateShape = {
  category: false
};

// Initial state
export const initialState = fromJS(stateShape);

// Reducer
export default (state = initialState, action = { type: UNKNOWN }) => {
  switch (action.type) {
    // Default
    default:
      return state;
  }
};
