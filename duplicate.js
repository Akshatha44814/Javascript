const duplicate = [1, 1, 4, 4, 7, 7, 9, 0, 8, 3, 4, 2, 6];

console.log([...new Set(duplicate)]);

const remdup = duplicate.filter((i, it) => {
  return duplicate.indexOf(i) === it;
});

console.log(remdup);

const newArrDup = [];

for (let i = 0; i < duplicate.length; i++) {
  if (!newArrDup.includes(duplicate[i])) {
    newArrDup.push(duplicate[i]);
  }
}
console.log(newArrDup);
