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
  f.defer(500);
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
  f.defer(500)(1, 2);
}
