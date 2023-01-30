//TODO: __Proto__
{
  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
    __proto__: head,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };

  let pockets = {
    money: 2000,
    __proto__: bed,
  };

  console.log(pockets.pen);
  console.log(bed.glasses);

  let hamster = {
    stomach: [],

    eat(food) {
      this.stomach = [food];
    },
  };

  let speedy = {
    __proto__: hamster,
  };

  let lazy = {
    __proto__: hamster,
  };

  console.log(speedy);
  speedy.eat('apple');
  console.log(speedy.stomach);

  console.log(lazy.stomach);
}

//TODO: Prototype
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };
  let rabbit = new Rabbit();
  Rabbit.prototype = {};
  console.log(rabbit.eats);
}
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };
  let rabbit = new Rabbit();
  Rabbit.prototype.eats = false;
  console.log(rabbit.eats);
}
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();
  delete rabbit.eats;
  console.log(rabbit.eats);
}
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();
  delete Rabbit.prototype.eats;
  console.log(rabbit.eats);
}

{
  Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };
  function f() {
    console.log('Ku');
  }
  // f.defer(500);
}

{
  Function.prototype.defer = function (ms) {
    const savedFunc = this;

    return function (...args) {
      setTimeout(() => savedFunc.apply(this, args), ms);
    };
  };
  function f(a, b) {
    console.log(a + b);
  }
  // f.defer(500)(1, 2);
}

//TODO: Class
{
  class Clock {
    constructor({ template }) {
      this.template = template;
    }

    render() {
      const date = new Date();

      let hours = date.getHours();
      hours < 10 ? (hours = `0${hours}`) : hours;

      let mins = date.getMinutes();
      mins < 10 ? (mins = `0${mins}`) : mins;

      let secs = date.getSeconds();
      secs < 10 ? (secs = `0${secs}`) : secs;

      let time = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

      console.log(time);
    }

    start() {
      this.render();
      this.timerID = setInterval(() => this.render(), 1000);
    }

    stop() {
      clearInterval(this.timerID);
    }
  }

  let clock = new Clock({ template: 'h:m:s' });
  // clock.start();
  // setTimeout(() => clock.stop(), 5000);
}
console.log('......................');
{
  console.log({}.prototype === {}.__proto__);
  // *false

  function it() {}
  console.dir(it.__proto__ === it.prototype);
  //* false
	console.dir(it.__proto__ === Function.prototype);
	//* true
	console.dir(it.__proto__ === it.prototype.constructor.__proto__);
	//* true

  function js() {}
  console.dir(it.__proto__ === js.__proto__);
  //* true
  console.dir(it.prototype === js.prototype);
  //* false

  let Component = () => {
    return '<div> Hello </div>';
  };
  console.dir(Component.prototype === Object.prototype);
  //* false

  function getTask() {
    return '<div> Hello </div>';
  }
  console.dir(getTask.prototype === Object.prototype);
  //* false

	let age = 18;
	console.dir(age.__proto__ === Number.__proto__);
	//! false
	console.dir(age.prototype === Number.prototype);
	//! false
	console.dir(Number.prototype);
	//* true

	class Person { }
	console.dir(Person.__proto__ === Person.prototype);
	//* false
	console.dir(Person.__proto__ === Function.prototype);
	//! true
}
