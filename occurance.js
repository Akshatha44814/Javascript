const aocc = [1, 2, 3, 4, 2, 3, 0, 9, 8, 7, 6, 5, 4, 3, 2, 7, 6, 9, 0, 4, 3, 2];

const occres = aocc.reduce((i, b) => {
  i[b] = (i[b] || 0) + 1;
  return i;
},{});
console.log(occres, "occ");
