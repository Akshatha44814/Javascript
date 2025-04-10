function* GFG() {
  yield 10;
  yield 20;
  yield 30;
}
const generator = GFG();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

const colors = ["red", "green", "blue"];
const GFG1 = colors[Symbol.iterator]();
console.log(GFG1.next());
console.log(GFG1.next());
console.log(GFG1.next());
console.log(GFG1.next());

// Output
// { value: 'red', done: false }
// { value: 'green', done: false }
// { value: 'blue', done: false }
// { value: undefined, done: true }
