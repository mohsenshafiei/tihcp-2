const debounce = (f, ms = 0) => {
    let id = null;
    return (...args) => {
      clearTimeout(id)
      id = setTimeout(() => f.apply(this, args), ms);
    }
  }, ms);
};