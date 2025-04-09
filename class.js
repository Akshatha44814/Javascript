class A {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  getFull() {
    console.log(`this is full name ${this.fn} ${this.ln}`);
  }
}

const Res = new A("Aksha", "Man");

console.log(Res.getFull());

class B extends A {
  constructor(fn, ln, age) {
    super(fn, ln);
    this.age = age;
    this.fn = fn;
    this.ln = ln;
  }
  getShort() {
    console.log(`this is short name ${this.fn}`);
  }
}

const dataB = new B(22);

console.log(dataB.getShort());
