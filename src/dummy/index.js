// Module dependencies
import COUNTRIES from './countries.json';

// Categories
export const CATEGORIES = [
  { id: 1, name: 'Food & Restaurant' },
  { id: 2, name: 'Bar & Nightlife' },
  { id: 3, name: 'Accommodation' },
  { id: 4, name: 'Small Businesses' },
  { id: 5, name: 'Tours & Activities' },
  { id: 6, name: 'Events' },
  { id: 7, name: 'Beauty & Spa' }
];

// Current location
export const CURRENT_LOCATION = 'My Location';

// Empty input
export const INPUT_EMPTY = '';

// Search results
export const RESULTS = [
  ...CATEGORIES,
  { id: 8, name: 'Warm Up Cafe' },
  { id: 9, name: 'Starbucks' },
  { id: 10, name: 'Polar Boulangerie & Patisserie' },
  { id: 11, name: 'Oak & Awe Coffee House' },
  { id: 12, name: 'Heaven Burger' },
  { id: 13, name: 'Pranom Health Massage' },
  { id: 14, name: 'Freedom Yoga' },
  { id: 15, name: 'Cheeva Spa' },
  { id: 16, name: 'Doi Inthanon Private Tour with Trek' },
  { id: 17, name: 'Zip Line Adventure' },
  { id: 18, name: 'Elephant Care' },
  { id: 19, name: 'Golf at Chiang Mai' },
  { id: 20, name: 'Jungle Wisdom Survival Trek' },
  { id: 21, name: 'Country Trail ATV' },
  { id: 22, name: 'Traditional Khantoke Dinner' },
  { id: 23, name: 'Amazing tour in the Nothern' },
  { id: 24, name: 'White Temple' },
  { id: 25, name: 'Milk Zone' },
  { id: 26, name: 'Bus Bar' },
  { id: 27, name: 'Sumo Sushi' },
  { id: 28, name: 'Fuji Restaurant' },
  { id: 29, name: 'Oasis Spa Lanna' },
  { id: 30, name: 'Give Green Farm House Restaurant' }
];

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
