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
