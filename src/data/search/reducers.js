// Module dependencies
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Action types
import { CATEGORY_RESET, CATEGORY_SET, UNKNOWN } from './types';

// Selectors
import { getNode } from '../selectors';

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

// Get search state
export const getSearch = createSelector(getNode, node => node.getIn(['search']));
