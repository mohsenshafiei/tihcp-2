const i18n = () => {
  let map = {};
  return (n) => {
    if (map[n]) console.log(map);
    const x = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n);
      }, n * 1000);
    }).then((v) => {
      console.log(v);
      map = {
        ...map,
        [n]: v,
      };
    });
    map = {
      ...map,
      [n]: x,
    };
  };
};
const i18nT = i18n();
i18nT(1);
i18nT(10);
i18nT(4);
i18nT(2);
setTimeout(() => {
  i18nT(4);
}, 5000);
