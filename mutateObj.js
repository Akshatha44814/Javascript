const objM = [
  { name: "akshatha", age: 9, rank: 1 },
  { name: "sweety", age: 18, rank: 2 },
  { name: "jhon", age: 20, rank: 3 },
  { name: "ron", age: 90, rank: 4 },
];

const MultiplyAge = (a) => {
  const resm = a.reduce((i, j, k, l) => {
    Object.keys(j).forEach((m) => {
      if (typeof j[m] == "number") {
        j[m] = j[m] * 2;
      }
    });
    i.push({ ...j });
    return i;
  }, []);
  console.log(resm);
  return resm;
};

console.log(MultiplyAge(objM));
