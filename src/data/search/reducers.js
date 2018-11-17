// Module dependencies
import { fromJS } from 'immutable';

// Action types
import { CATEGORY_RESET, CATEGORY_SET, UNKNOWN } from './types';

// State shape
export const stateShape = {
  category: false
};

// Initial state
export const initialState = fromJS(stateShape);

// Reducer
export default (state = initialState, action = { type: UNKNOWN }) => {
  switch (action.type) {
    // Reset selected category
    case CATEGORY_RESET:
      return state.set('category', false);

    // Set selected category
    case CATEGORY_SET:
      return state.set('category', action.payload.category);

    // Default
    default:
      return state;
  }
};
