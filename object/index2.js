//TODO: проверка на наличие свойств объекта

function User(name) {
  if (!new.target) {
    console.log('Use new.target');
    return new User(name);
  }
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function () {
    console.log(`Меня зовут ${this.name}`);
  };
}

const user1 = new User('Alex');
console.log(user1);
console.log(user1.name);
console.log(user1.isAdmin);
console.log(user1.sayHi());

const user2 = User('Anna');
console.log(user2);
console.log(user2.name);
console.log(user2.isAdmin);
console.log(user2.sayHi());

function BigUser() {
  this.name = 'Вася';
  return { name: 'Godzilla' }; // <-- возвращает этот объект
}
console.dir(new BigUser()); // Godzilla, получили этот объект

let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
let a = new A();
let b = new B();
// console.log(a == b);

function Calculator() {
  if (!new.target) {
    return new Calculator(startingValue);
  }
  this.read = function () {
    this.valueA = +prompt('Число?', 0);
    this.valueB = +prompt('Число?', 0);
  };
  this.sum = function () {
    return this.valueA + this.valueB;
  };
  this.mul = function () {
    return this.valueA * this.valueB;
  };
}
let calc = new Calculator();
// console.log(calc.read());
// console.log(calc.sum());
// console.log(calc.mul());

function Accumulator(startingValue) {
  if (!new.target) {
    return new Accumulator(startingValue);
  }
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt('Число?', 0);
  };
}
let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);
