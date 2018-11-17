// Action types
import { CATEGORY_SET } from './types';

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
