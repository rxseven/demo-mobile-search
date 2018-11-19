// Constants
import CATEGORIES from './categories';
import LISTINGS from './listings';
import COUNTRIES from './countries.json';

export { default as CATEGORIES } from './categories';

// Current location
export const CURRENT_LOCATION = 'My Location';

// Empty input
export const INPUT_EMPTY = '';

// Search results
export const RESULTS = [...CATEGORIES, ...LISTINGS];

// Search fields
export const SEARCH_FIELDS = {
  location: 'location',
  name: 'name'
};

// Autocomplete suggestions
export const SUGGESTIONS = {
  name: RESULTS,
  location: COUNTRIES
};
