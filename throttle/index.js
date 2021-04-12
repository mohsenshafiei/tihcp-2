const throttle = (fn, wait) => {
  let isThrottle;
  let lastFn;
  let lastTime;
  return (...args) => {
    if (!isThrottle) {
      fn.apply(this, args);
      lastTime = Date.now();
      isThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(this, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
