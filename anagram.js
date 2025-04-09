const anaGram = (a, b) => {
  const resa = a.split("").sort().join("");
  const resb = b.split("").sort().join("");
  return resa === resb;
};

const res = anaGram("mug", "gum");
console.log(res);
