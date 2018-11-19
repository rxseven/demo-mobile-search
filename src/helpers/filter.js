// Input filter
export const filterInput = (source, { filter, value }, key) => {
  const term = value.trim().toLowerCase();
  const character = term.length;

  // Test each element of the array
  const filterTest = (item) => {
    const matcher = item[key].toLowerCase().slice(0, character) === term;

    // Filter case
    if (filter) {
      // Category name
      if (!item.category) {
        return matcher;
      }

      // Business name
      const filtered = filter.toLowerCase();
      const location = item.location.toLowerCase();
      const condition = filtered === 'my location' ? 'thailand' : filtered;

      return matcher && location === condition;
    }

    // Default
    return matcher;
  };

  // Return the filtered results
  return character !== 0 ? source.filter(filterTest) : [];
};

// Search filter
export const filterSearch = (source, input) => {
  // console.log('source:', source);
  const name = input.name.trim().toLowerCase();
  const location = input.location.trim().toLowerCase();

  // RegExp matcher
  const matcher = (item, key, keyword) => {
    // Variables
    const data = item[key];
    const term = keyword === 'my location' ? 'thailand' : keyword;
    const { category } = item;

    return category ? new RegExp(`\\b${data.toLowerCase()}\\b`).test(term) : false;
  };

  const checkName = item => matcher(item, 'name', name);
  const checkCategory = item => matcher(item, 'category', name);
  const checkLocation = item => matcher(item, 'location', location);

  // Test each element of the array
  const filterTest = (item) => {
    if (!name.length) {
      // Search by location
      return checkLocation(item);
    }

    // Search by name and location
    return (checkName(item) || checkCategory(item)) && checkLocation(item);
  };

  // Return the filtered results
  return source.filter(filterTest);
};
