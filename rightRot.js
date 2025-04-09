const rightRot = (ar, val) => {
  for (let i = 0; i < val; i++) {
    ar.unshift(ar[ar.length - 1]);
    ar.pop();
  }
  console.log();
  return ar;
};

console.log(rightRot([3, 8, 5, 9, 1, 0], 5));
