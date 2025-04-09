const fib = (n) => {
  let n1 = 0,
    n2 = 1,
    n3;
  let list = [];
  for (let i = 0; i <= n; i++) {
    list.push(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  console.log(list);
  return list;
};

console.log(fib(7));
