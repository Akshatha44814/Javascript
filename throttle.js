const throttle = (fn, d) => {
  let timeout = false;
  return (...args) => {
    if (!timeout) {
      fn(...args);
      timeout = setTimeout(() => {
        timeout = false;
      }, d);
    }
  };
};

const callmeth = (q) => {
  console.log(q);
};

const thres = throttle(callmeth, 1000);

console.log(thres("hi0"));
console.log(thres("hi1"));
console.log(thres("hi2"));
console.log(thres("hi3"));
console.log(thres("hi3"));
