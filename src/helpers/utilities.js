// @flow

// Deley
export const delay = (callback: Function, duration: number) => {
  setTimeout(() => {
    callback();
  }, duration);
};

// Reload webpage
export const reload = () => {
  window.location.reload();
};
