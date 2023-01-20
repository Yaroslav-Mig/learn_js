//* it may be different each time the function is called
//* In the inside func this depends on invoke of function
//* Global level this === undefined
//* arrow func has no own this, it takes from outer func
//* Inside the class, this points to the new object which will be created with new
//* When a function is called as a method, this is the object that was used to call it

//TODO: Context this
{
  console.log(this);
  function fnA() {
    console.log(this); // window
  }
  function fnB() {
    'use strict';
    console.log(this); // undefined
  }
  fnA();
  fnB();
}
{
  Object.prototype.getThis = function () {
    return this;
  };
  const personA = { user: 'A' };
  const personB = { user: 'B' };

  console.log(personA.getThis() === personA);
  console.log(personB.getThis() === personB);
  class Person {
    getThis() {
      return this;
    }
  }
  const personC = new Person();
  const personD = new Person();
  console.log(personC.getThis() === personC);
  console.log(personD.getThis() === personD);

  const arr = [1, 2, 3, 4, 5];
  Array.prototype.multiplyBy = function (x) {
    return this.map((el) => el * x);
  };
  console.log(arr.multiplyBy(2));
}

//TODO: lost context with global function.
//TODO: Instead you may use arrow function, save context in the var or method bind;
{
  class Timer {
    constructor() {
      this.counter = 0;
      setInterval(function () {
        console.log(this.counter++);
      }, 1000);
    }
  }
}

{
  class Timer {
    constructor() {
      this.counter = 1;
      this.timerID = setInterval(() => {
        console.log(this.counter++);
      }, 1000);
      this.stopInterval = function () {
        setTimeout(() => {
          clearInterval(this.timerID);
        }, 5000);
      };
    }
  }
  const time = new Timer();
  console.log(time);
  time.stopInterval();

  class Timer2 {
    constructor() {
      this.counter = 0;
      const that = this;
      setInterval(function () {
        console.log(that.counter++);
      }, 1000);
    }
  }

  class Timer3 {
    constructor() {
      this.counter = 0;
      setInterval(
        function () {
          console.log(counter++);
        }.bind(this),
        1000
      );
    }
  }
}

//TODO: call, apply, bind
{
  const user = {
    name: 'Василий',
    age: 27,
  };
  const getAge = function () {
    return this.age;
  };
  console.log(getAge.call(user));

  const runner = {
    name: 'Runner',
    run(speed) {
      console.log(this.name + ' run with speed ' + speed + ' per hour.');
    },
  };
  const flyer = {
    name: 'Flyer',
    fly(speed) {
      console.log(this.name + ' fly with speed ' + speed + ' per hour.');
    },
  };
  fly = flyer.fly.bind(runner, 50);
  fly();
  runner.run.call(flyer, 30);

  const sum = (a, b) => console.log(a + b);
  const add_5 = sum.bind(null, 5);
  console.log(add_5(8)); //13
  console.log(add_5(5)); //10

  const users = {
    'm-1': { total: 1000 },
    'm-2': { total: 700 },
  };
  const getFee = function (fee) {
    this.total -= fee;
    console.log(this.total);
  };
  const userFee_1 = getFee.bind(users['m-1']);
  const userFee_2 = getFee.bind(users['m-2']);
  userFee_1(100);
  userFee_2(100);
}

//TODO: Context and DOM
{
  // document.getElementById('elem1').addEventListener('blur', displayText);
  // document.getElementById('elem2').addEventListener('blur', displayText);

  function displayText() {
    console.log(this.value);
  }

  const inputList = document.querySelectorAll('input');
  inputList.forEach((el) => el.addEventListener('blur', displayText));

  const btn_1 = document.querySelector('.btn-1');
  const btn_2 = document.querySelector('.btn-2');
  const btn_3 = document.querySelector('.btn-3');

  function changeColor(color) {
    this.style.backgroundColor = color;
    console.log(this);
  }

  btn_2.addEventListener('click', () => {
    changeColor.call(btn_1, 'skyblue');
  });

  const setRed = changeColor.bind(btn_1, 'tomato');
  const setGreen = changeColor.bind(btn_3, 'green');

  btn_1.addEventListener('click', setRed);
  btn_3.addEventListener('click', setGreen);
}

{
  function globalFunc() {
    console.log(this);
  }
  const globalArrowFunc = () => {
    console.log(this);
  };
  console.log(this); // ? window
  globalFunc(); // ? window
  globalArrowFunc(); // ? window
}

{
  const user = {
    name: 'Bob',
    userThis: this,
    func() {
      console.log(this);
    },
    arrowFunc: () => {
      console.log(this);
    },
  };
  console.log(user.userThis); // ? window
  console.log(user.func()); // ? object user
  user.arrowFunc(); // ? window
}

{
  const user = {
    name: 'Bob',
    funcFunc() {
      return function () {
        console.log(this);
      };
    },
    funcArrow() {
      return () => {
        console.log(this);
      };
    },
    arrowFunc: () => {
      return function () {
        console.log(this);
      };
    },
    arrowArrow: () => {
      return () => {
        console.log(this);
      };
    },
  };

  user.funcFunc()(); // ? undefined
  user.funcArrow()(); // ? { user }
  user.arrowFunc()(); // ? undefined
  user.arrowArrow()(); // ? undefined

  const user2 = {
    name: 'Jim',
    funcFunc: user.funcFunc(),
    funcArrow: user.funcArrow(),
    arrowFunc: user.arrowFunc(),
    arrowArrow: user.arrowArrow(),
  };

  user2.funcFunc(); // ? { user2 }
  user2.funcArrow(); // ? { user }
  user2.arrowFunc(); // ? { user2 }
  user2.arrowArrow(); // ? window
}

//TODO: this and timeout
{
  let user = {
    firstName: 'VAS',
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    },
  };
  setTimeout(user.sayHi, 1000);
  //* lost context

  setTimeout(function () {
    user.sayHi();
  }, 1000);
  //* wrapper for setTimeout don`t lose context

  user = {
    sayHi() {
      console.log('Another user');
    },
  };
  // * Lost context again due to overwriting function in during 1 second
}

{
  let user = {
    firstName: 'tony',
  };
  function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
  }
  let userFn = func.bind(user);
	userFn('Hello');

  let user2 = {
    firstName: 'quarry',
    say(phrase) {
      return console.log(`${phrase}, ${this.firstName}!`);
    },
  };
  let user2Say = user2.say.bind(user2);
  user2Say('Hi');
	user2Say('Bye');

	setTimeout(user2Say, 1000, 'Good day')
}
