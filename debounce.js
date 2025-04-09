const debounced = (fn, d) => {
  let timeout;
  return (...args) => {
    clearInterval(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, d);
  };
};

const callme = (q) => {
  console.log(q);
};

const debres = debounced(callme, 1000);

console.log(debres("hi0"));
console.log(debres("hi1"));
console.log(debres("hi2"));
console.log(debres("hi3"));
console.log(debres("hi3"));
