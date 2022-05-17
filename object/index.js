let user = new Object(); // конструктор объекта
let user2 = {}; // литерал объекта

user = {
  // объект
  name: 'John', // под ключом "name" хранится значение "John"
  age: 30, // под ключом "age" хранится значение 30
};
user.isAdmin = true;
delete user.age;
console.dir(user);

let fruit = 'apple';
let bag = {
  [fruit]: 15,
};
console.log(bag[fruit]);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}
let user66 = makeUser('John', 30);

let obj = {
  0: 'Тест', // то же самое что и "0": "Тест"// Только строка или символ имя свойства...Все остальные типы данных будут преобразованы к строке
};
console.log(obj['0']); // Тест
console.log(obj[0]); // Тест (то же свойство)

console.log(studentBob.name);
console.log(studentBob['student address']);

let prop = 'age';
console.log(studentBob[prop]);

let studentAlex = { ...studentBob };
let studentAlex2 = Object.assign({}, studentBob);
studentAlex.name = 'Alex';
console.log(studentAlex.name);
console.log(studentAlex2);
console.log(studentAlex === studentBob);

//TODO: проверка на наличие свойств объекта
const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false

//TODO: код для суммирования всех зарплат
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const getSumSalaries = (obj) => {
  let sum = 0;
  for (let prop in obj) {
    sum += obj[prop];
  }
  return sum;
};
console.log(getSumSalaries(salaries));

//TODO: ф-ия умножает все числовые свойства объекта obj на 2
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
const multiplyNumeric = (obj) => {
  for (let prop in obj) {
    typeof obj[prop] === 'number' ? (obj[prop] *= 2) : obj[prop];
  }
};
multiplyNumeric(menu);
console.log(menu);

//TODO: метод в объекте
let user3 = {
  name: 'Джонни',
  age: 30,
  getName: function () {
    console.log(this.name);
  },
  getAge() {
    console.log(this.age);
  },
};
user3.sayHi = function () {
  console.log('привет');
};
user3.sayHi();
user3.getName();

function sayHi() {
  console.log(this.name);
}
let user4 = { name: 'Джон' };
let admin = { name: 'Админ' };
user4.f = sayHi;
admin.f = sayHi;
user4.f();
admin.f();

console.log(sayHi());

let obj2, method;
obj2 = {
  go: function () {
    console.log(this);
  },
};
(method = obj2.go)();

function makeUser() {
  return {
    name: 'Джон',
    ref: this,
  };
}

let user5 = makeUser();
console.dir(user5);
console.log(user5.ref.name);

function makeUser2() {
  return {
    name: 'Казбек',
    ref() {
      return this;
    },
  };
}
let user6 = makeUser2();
console.log(user6);
console.log(user6.ref().name);

const calculator = {
  read() {
    this.valueA = +prompt('Введите число', 0);
    this.valueB = +prompt('Введите число', 0);
  },
  sum() {
    return this.valueA + this.valueB;
  },
  mul() {
    return this.valueA * this.valueB;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};
ladder.up().up().down().up().up().down().showStep();
