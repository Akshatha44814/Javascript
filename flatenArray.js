const flatenArr = (p) => {
  const res = p.reduce((i, j) => {
    return i.concat(typeof j == "object" ? flatenArr(j) : j);
  }, []);

  return res;
};

const arraytOfLAT = [[4, 5], 3, 2, [1, [6, 3, [9, [8, 3]]]]];

console.log(flatenArr(arraytOfLAT));
