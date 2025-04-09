const alternateArray = (a, b) => {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push(a[i]);
    for (let j = i; j < b.length; j++) {
      newArr.push(b[j]);
      break;
    }
  }
  console.log(newArr);
  return newArr.join("")
};

const a1 = ["h", "p", "y", "e", "y", "a"];
const b1 = ["a", "p", "n", "w", "e", "r"];
console.log(alternateArray(a1, b1));
