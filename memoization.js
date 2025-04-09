let memoObj = {};
const memores = (a, b) => {
  if (memoObj[a, b]) {
    console.log(memoObj[a, b], "from the memory");
    return memoObj[a, b];
  } else {
    memoObj[a, b] = a + b;
    console.log(memoObj[(a, b)], "new Allocation");

    return memoObj[a, b];
  }
};

memores(1, 3);

memores(1, 3);

memores(1, 3);

memores(2, 4);

memores(2, 4);
