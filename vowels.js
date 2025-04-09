const findVow = (str) => {
  const v = ["a", "e", "i", "o", "u"];
  const newarr = [];
  for (let i in str) {
    if (v.includes(str[i])) {
      newarr.push(str[i]);
    }
  }
  return newarr;
};

const data = findVow("akshatha");
console.log(data);

