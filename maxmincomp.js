const Findmaxmin = (a) => {
  let max = a[0],
    min = a[0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
    if (a[i] < min) {
      min = a[i];
    }
  }
  return `max is ${max}, min is ${min}`;
};

const minmaxres = Findmaxmin([2, 6, 5, 4, 9, 8, 1, 3]);
console.timeLog(minmaxres);
