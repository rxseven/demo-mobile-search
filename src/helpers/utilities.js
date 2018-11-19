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
