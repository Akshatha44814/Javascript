const curing = (a) => {
  let count = a;
  return (b) => {
    count = count + b;
    return (c) => {
      count = count + c;
      return (d) => {
        count = count + d;
        return count;
      };
    };
  };
};

const rescurr = curing(2)(3)(4)(5);

console.log(rescurr);
