// Action types
import { CATEGORY_RESET, CATEGORY_SET } from './types';

// Reset selected category
export const resetCategory = () => ({
  type: CATEGORY_RESET
});

// Set selected category
export const setCategory = (category, callback) => {
  // Execute a callback
  callback();

  // Return an action
  return {
    payload: { category },
    type: CATEGORY_SET
  };
};
