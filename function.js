function Fun(value) {
  this.value = value;
}
Fun.prototype.getSum = function () {
  return this.value + 1;
};
const pr = new Fun(2);
console.log(pr.getSum());

const obbb = {
  name: "aksha",
  age: 20,
  __proto__: {
    name: "preethu",
    address: "mangalore",
  },
};
const c = {
  country: "india",
  __proto__: { ...obbb },
};
console.log(obbb, "proto");

console.log(c, "proto");
/////////////////////////////////////////
// let x = {name:"Vivek"};

// x = {address: "India"}; // Throws an error

// x.name = "Nikhil"; // No error is thrown

// const y = 23;

// y = 44; // Throws an error
//////////////////
