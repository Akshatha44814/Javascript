let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
  }
  
