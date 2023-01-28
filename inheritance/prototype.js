{
  function Person() {}

  console.dir(Person);
  console.dir(Person.prototype);
  console.log(Person === Person.prototype.constructor);
  console.log('---------');

  const harry = new Person();
  console.dir(harry);
  console.dir(harry.__proto__);
  console.dir(harry.__proto__ === Person.prototype);
  console.dir(harry.__proto__.constructor === Person.prototype.constructor);
  console.log(harry.constructor === Person);
  console.log('---------');

  harry.name = 'Harry';
  Person.prototype.country = 'UK';

  function Rabbit(name) {
    this.name = name;
  }

  let rabbit = new Rabbit('White Rabbit');
  let rabbit2 = new rabbit.constructor('Black Rabbit');
  //*

  console.log(harry.name);
  console.log(harry.country);
  console.log('---------');

  const literalObj = {};
  const constructorObj = new Object();
  console.log(literalObj.__proto__ === Object.prototype);
  console.log(constructorObj.__proto__ === Object.prototype);

  const literalArr = [1, 2, 3];
  const constructorArr = new Array('Apple', 'Banana');
  console.log('---------');
  console.dir(literalArr);
  console.log(literalArr.__proto__ === Array.prototype);
  console.log(constructorArr.__proto__ === Array.prototype);
  console.log('---------');
  console.log(literalArr.__proto__.__proto__ === Object.prototype);
  console.log(constructorArr.__proto__.__proto__ === Object.prototype);
}

//TODO: Inheritance with __proto__
{
  const user = {
    login: '',
    password: '',
    validatePassword() {
      return this.password.length > 5 ? true : false;
    },
  };

  const userProfile = {
    userName: '',
    photo: '',
    age: 0,
    __proto__: user,
  };

  console.log(userProfile);
}
{
  let user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
      [this.name, this.surname] = value.split(' ');
    },
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  };

  let admin = {
    __proto__: user,
    isAdmin: true,
  };
  console.log(admin);
  admin.fullName = 'Alice Cooper';
  console.log(admin.fullName);
}

console.log('---------------------------');
//TODO: Inheritance with prototype I
{
  const animalProto = {
    eat: true,
    move: true,
  };

  function Animal(legs, tail) {
    if (!new.target) {
      return new Animal(legs, tail);
    }
    this.eyes = 2;
    this.legs = legs;
    this.tail = tail;
  }

  Animal.prototype = {
    animalProto,
    constructor: Animal,
  };
  Animal.prototype.showEyes = function () {
    console.log(`eyes: ${this.eyes}`);
  };

  function Wolf(species, subspecies) {
    if (!new.target) {
      return new Wolf(species, subspecies);
    }
    Animal.call(this, 4, true);
    this.species = species;
    this.subspecies = subspecies;
  }

  Wolf.prototype = Object.create(Animal.prototype);
  Wolf.prototype.roar = function () {
    console.log('r-r-r-r');
  };
  Wolf.prototype.constructor = Wolf;

  const greyWolf = new Wolf('wolf', 'grey');
  console.log(greyWolf);

  function Parrot(species, subspecies) {
    if (!new.target) {
      return new Parrot(species, subspecies);
    }
    Animal.call(this, 2, true);
    this.species = species;
    this.subspecies = subspecies;
    this.wings = true;
  }
  Parrot.prototype = Object.create(Animal.prototype, {
    constructor: {
      value: Parrot,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  Parrot.prototype.fly = function () {
    console.log('I can fly');
  };

  const araParrot = new Parrot('parrot', 'ara');
  console.log(araParrot);

  console.log(Object.getPrototypeOf(araParrot) === Parrot.prototype);

  console.log(araParrot instanceof Wolf);
  console.log(araParrot instanceof Parrot);
  console.log(araParrot instanceof Animal);
}

console.log('---------------------------');
//TODO: Inheritance with prototype II
{
  const animalProto = {
    eat: true,
    move: true,
  };

  function Animal(name, legs, tail) {
    this.name = name;
    this.eyes = 2;
    this.legs = legs;
    this.tail = tail;
  }

  Animal.prototype = animalProto;
  Animal.prototype.showEyes = function () {
    console.log(`eyes: ${this.eyes}`);
  };
  Animal.prototype.constructor = Animal;

  const animalWolf = new Animal('wolf', 4, true);
  const animalParrot = new Animal('parrot', 2, true);

  function Wolf(species, area) {
    this.species = species;
    this.area = area;
  }

  Wolf.prototype = animalWolf;
  Wolf.prototype.roar = function () {
    console.log('r-r-r-r');
  };
  Wolf.prototype.constructor = Wolf;

  const blackWolf = new Wolf('black', 'canada');
  console.log(blackWolf);

  function Parrot(species, subspecies) {
    this.species = species;
    this.subspecies = subspecies;
    this.wings = true;
  }

  Parrot.prototype = animalParrot;
  Parrot.prototype.fly = function () {
    console.log('I can fly');
  };
  Parrot.prototype.constructor = Parrot;
  const araParrot = new Parrot('ara', 'south america');
  console.log(araParrot);
}

//TODO: Inheritance with prototype III

{
  function Human(name, level) {
    this.name = name;
    this.level = level;
  }
  Human.prototype.speak = function () {
    return `${this.name} says hello.`;
  };

  function SuperHero(name, level) {
    Human.call(this, name, level);
  }
  SuperHero.prototype.fly = function () {
    return `${this.name} is flying.`;
  };

  Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

  const superMan = new SuperHero('Clark Kent', 1);
  console.log(superMan.fly());
  console.log(superMan.speak());
}
