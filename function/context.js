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
          console.log(that.counter++);
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
