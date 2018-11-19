// Deley
export const delay = (callback, duration) => {
  setTimeout(() => {
    callback();
  }, duration);
};

// Reload webpage
export const reload = () => {
  window.location.reload();
};

// Get category
export const getCategory = (categories, id) => categories[id].name;
