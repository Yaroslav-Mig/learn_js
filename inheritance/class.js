class Car {
  constructor(brand, engine) {
    this.brand = brand;
    this.engine = engine;
  }

  static type = 'Car';
  static guarantee() {
    console.log(`warranty period depends on brand that you\`ll buy`);
  }

  start() {
    console.log(`this ${this.brand} is starting`);
  }
  stop() {
    console.log(`this ${this.brand} has stopped`);
  }

  set safety(value) {
    this.safetyRating = value;
  }
  get safety() {
    return this.safetyRating;
  }
}

const volvoDiesel = new Car('volvo', 'diesel');
const bmwGasoline = new Car('bmw', 'gasoline');

console.dir(Car);
console.log(Car.type);
Car.guarantee();
console.log(volvoDiesel);
console.log(bmwGasoline);
volvoDiesel.safety = 5;
bmwGasoline.safety = 4;

class Volvo extends Car {
  constructor(brand, engine, model, color, kit) {
    super(brand, engine);
    this.model = model;
    this.color = color;
    this.kit = kit;
  }

  get fuel() {
    return console.log(this._fuelTank);
  }
  set fuel(val) {
    this._fuelTank > 0 ? (this._fuelTank += val) : (this._fuelTank = val);
  }

  drive(val = 0) {
    if (!this._fuelTank) {
      console.log('Fuel tank is empty');
      return;
    } else if (this._fuelTank < val) {
      this._fuelTank = 0;
      console.log('Fuel tank run out');
      return;
    } else {
      this._fuelTank -= val;
    }
  }

  start() {
    super.start();
    console.log(`this ${this.model} is starting`);
  }
}
console.dir(Volvo);
console.log(Volvo.type);

const volvoV60 = new Volvo('volvo', 'gasoline', 'v60', 'bursting blue effect ', 'r-design');
console.log(volvoV60);
volvoV60.start();
volvoV60.fuel = 60;
volvoV60.drive(50);
volvoV60.fuel;
volvoV60.drive(11);
volvoV60.drive(30);

//TODO: Class with DOM elements
{
  class Component {
    constructor(selector) {
      this.$el = document.querySelector(selector);
    }
    setOpacity(val) {
      this.$el.style.opacity = val;
    }
    hide() {
      this.$el.style.display = 'none';
    }
    show() {
      this.$el.style.display = 'block';
    }
  }

  class Box extends Component {
    constructor(options) {
      super(options.selector);
      this.$el.style.width = this.$el.style.height = options.size + 'px';
      this.$el.style.background = options.bgColor;
    }
  }

  const boxBlue = new Box({
    selector: '#box_1',
    size: 50,
    bgColor: 'lightblue',
  });
  console.log(boxBlue);
  boxBlue.setOpacity(0.5);
  boxBlue.hide();
  // boxBlue.show();

  const boxBrown = new Box({
    selector: '#box_2',
    size: 70,
    bgColor: 'brown',
  });

  console.log(boxBrown);
  boxBlue.setOpacity(0.3);

  class Circle extends Box {
    constructor(options) {
      super(options);
      this.$el.style.borderRadius = '50%';
    }
  }

  const circleGreen = new Circle({
    selector: '#box_3',
    size: 100,
    bgColor: 'seagreen',
  });

  console.log(circleGreen);
}

//TODO: super and setTimeout, property of class
{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name} run with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stay without a movement.`);
    }
  }

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} is hiding!`);
    }
    stop() {
      setTimeout(() => super.stop(), 1000);
      this.hide();
    }
  }

  let rabbitWhite = new Rabbit('White rabbit');
  rabbitWhite.stop();
}

{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name, earLength) {
      super();
      this.speed = 0;
      this.name = name;
      this.earLength = earLength;
    }
  }

  let rabbitGrey = new Rabbit('Grey rabbit', 10);
  console.log(rabbitGrey);
}

{
  class Animal {
    name = 'animal';

    constructor() {
      console.log(this.name);
      this.showName();
    }

    showName() {
      console.log('ANIMAL');
    }
  }
  class Rabbit extends Animal {
    name = 'rabbit';

    // constructor() {
    // 	super()
    // 	console.log(this.name);
    // }
    getName() {
      return this.name;
    }

    showName() {
      console.log('RABBIT');
    }
  }
  new Animal();
  new Rabbit();
  // const rabbit = new Rabbit();
  // console.log(rabbit.getName());
}

//TODO: Static methods and property
{
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }

  let articles = [
    new Article('HTML', new Date(2019, 1, 1)),
    new Article('CSS', new Date(2019, 0, 1)),
    new Article('JavaScript', new Date(2019, 11, 1)),
  ];

  articles.sort(Article.compare);
}
{
  class Animal {
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }

    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} run with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  }
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hide!`);
    }
  }

  let rabbits = [new Rabbit('White', 10), new Rabbit('Black', 5)];

  rabbits.sort(Rabbit.compare);
  console.dir(Rabbit.__proto__ === Animal);
  console.dir(Rabbit.prototype.__proto__ === Animal.prototype);
}
{
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
    static createTodays() {
      return new this('Today article', new Date().toLocaleDateString());
    }
  }

  let article = Article.createTodays();
  console.log(article);
}

//TODO: Protected property
{
  class CoffeeMachine {
    _waterAmount = 0;

    constructor(power) {
      this._power = power;
    }

    set waterAmount(value) {
      if (value < 0) throw new Error('Negative capacity of water');
      this._waterAmount = value;
    }
    get waterAmount() {
      return this._waterAmount;
    }
    get power() {
      return this._power;
    }
  }

  let coffeeMachine = new CoffeeMachine(100);
  console.dir(coffeeMachine);

  class MegaMachine extends CoffeeMachine {
    _waterAmount = 10;
  }
  let megaMachine = new MegaMachine(300);
  console.dir(megaMachine);
}

//TODO: Private property
{
  class CoffeeMachine {
    #waterLimit = 300;
    #waterAmount = 0;

    #checkWater(value) {
      if (this.#waterAmount > this.#waterLimit) {
        throw new Error('Too much water');
      }
    }

    get waterAmount() {
      return this.#waterAmount;
    }
    set waterAmount(value) {
      const currentWaterAmount = this.#waterAmount + value;
      if (value < 0) {
        throw new Error('Negative capacity of water');
      } else if (currentWaterAmount > this.#waterLimit) {
        throw new Error('Too much water');
      } else {
        this.#waterAmount += value;
      }
    }
  }

  let coffeeMachine = new CoffeeMachine();
  //* Error
  // coffeeMachine.#checkWater();
  // coffeeMachine.#waterLimit = 1000;
  coffeeMachine.waterAmount = 300;
  console.dir(coffeeMachine);
  // coffeeMachine.waterAmount = 200;

	class MegaCoffeeMachine extends CoffeeMachine {
		method() {
			//? this.#waterAmount;
			//! Error: can only access for instances from CoffeeMachine
		}
	}
}

{
  class Person {
    #name = 'undefined';
    #age = 1;
    constructor(name, age) {
      this.#name = this.#checkName(name);
      this.setAge(age);
    }
    #checkName(name) {
      if (name !== 'admin') return name;
    }
    setAge(age) {
      if (age > 0 && age < 110) this.#age = age;
    }
    print() {
      console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
  }
  const tom = new Person('Tom', 37);
	tom.print();
	//* Name: Tom  Age: 37

	const bob = new Person('admin', 41);
	bob.print();
	//* Name: Undefined  Age 41
}

//TODO: Extending built-in classes
{
  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  let arr = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr.isEmpty());
}
class ExtArray extends Array {
  clear() {
    return this.filter((el) => el);
  }
}
const arr = new ExtArray(3, null, 7, undefined, '');
console.log(arr.clear());
// [3, 7]

//TODO: Mixin
{
  let sayMixin = {
    say(phrase) {
      console.log(phrase);
    },
  };

  let sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
      super.say(`Hi, ${this.name}`);
    },
    sayBye() {
      super.say(`Bye, ${this.name}`);
    },
  };
  class User {
    constructor(name) {
      this.name = name;
    }
  }

  Object.assign(User.prototype, sayHiMixin);
  new User('Vase').sayHi();
}

//TODO: class as parameter
const Drink = class {
  constructor(price, discount = 1) {
    this.price = Math.round(price * discount * 100) / 100;
  }
}
const juice = new Drink(1.25);

const drinkWithDiscount = (Base, discount) => {
  return class extends Base {
    constructor(price) {
      super(price, discount);
    }
  }
}
const Tea = drinkWithDiscount(Drink, 0.8);
const greenTea = new Tea(2);
const blackTea = new Tea(1.5);