function main(n) {
  let num = n;
  return {
    add: function (val) {
      num = num + val;
      return this;
    },
    subtract: function (val) {
      num = num - val;
      return this;
    },
    multiple: function (val) {
      num = num * val;
      return this;
    },
    divide: function (val) {
      num = num / val;
      return this;
    },
    print: function () {
      return num;
    },
  };
}
const x1 = main(10);
const x2 = main(10);

const value = x1.add(6).subtract(4).multiple(3).divide(2).print();
const value2 = x2.multiple(3).add(6).subtract(4).divide(2).print();
const value3 = x2.multiple(5).divide(4).print();

console.log(value); //18
console.log(value2); //16
console.log(value3); //20

////////////////////////////

class Mainclass {
  constructor(num) {
    this.num = num;
  }
  add(val) {
    this.num = this.num + val;
    return this;
  }
  sub(val) {
    this.num = this.num - val;
    return this;
  }
  mul(val) {
    this.num = this.num * val;
    return this;
  }
  div(val) {
    this.num = this.num / val;
    return this;
  }
  print() {
    return this.num;
  }
}

const x3 = new Mainclass(10);
const value4 = x3.add(2).sub(1).mul(5).div(2).print();
console.log(value4);
/////////////////////////////

const objchain = {
  i: 10,
  add: function (val) {
    this.i = this.i + val;
    return this;
  },
  sub: function (val) {
    this.i = this.i - val;
    return this;
  },
  mul: function (val) {
    this.i = this.i * val;
    return this;
  },
  div: function (val) {
    this.i = this.i / val;
    return this;
  },
  print: function () {
    return this.i;
  },
};

const x4 = objchain.add(2).sub(1).mul(5).div(2).print();

console.log(x4);
