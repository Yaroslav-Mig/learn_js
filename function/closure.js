//TODO: Lexical Env and Closure
{
  let funcRef = null;

  function F() {
    const a = 5;
    function FF() {
      console.log(a);
    }
    funcRef = FF;
  }
  F();
  funcRef();
}
{
  let funcRef = null;

  function F(params) {
    const a = 7;
    // console.log('local var A for func F A=' + a);
    funcRef = function (params) {
      const b = 10;
      // console.log('local var B for func funcRef B=' + b);
      // console.log('closure var A=' + a);
    };
  }
  F();
  funcRef();
}
{
  function F() {
    let num = 1;
    return function () {
      console.log(num);
    };
  }
  const funcRef = F();
  funcRef();
}
{
  let funcRef = null;

  function F() {
    let a = 8;
    console.log('local var A for func F A=' + a);
    console.log('----------');
    function FF() {
      let b = 13;
      console.log('local var B for func funcRef B=' + b);
      console.log('closure var A=' + a);
      console.log('----------');
    }
    funcRef = FF;
    FF();
    a++;
  }
  F();
  funcRef();
}
{
  let num = 10;
  function fnA() {
    console.log(num);
  }
  function fnB() {
    let num = 20;
    fnA();
  }
  fnB(); // 10
}
{
  function fnA() {
    const num = 100;
    return function () {
      return console.log(num);
    };
  }
  (function fnB() {
    const num = 101;
    fnA()();
  })();
}
//TODO: counter
{
  function counter() {
    let a = 0;
    return function () {
      a++;
      console.log(a);
    };
  }
  count1 = counter();
  count1();
  count1();
  count1();
  count1();
  console.log('----------');
  count2 = counter();
  count2();
  count2();
  count2();
  count2();
}
{
  let num = 1;

  function test() {
    return function () {
      console.log(num);
      num++;
    };
  }

  let func1 = test();
  func1(); // 1
  func1(); // 2
  console.log('----------');
  let func2 = test();
  func2(); // 3
  func2(); // 4
}

{
	function multiply(x) {
		return function f(y) {
			return x * y;
		};
	}
  const multiplyX2 = multiply(2);
	const multiplyX5 = multiply(5);
	console.dir(multiplyX2);
  console.log(multiplyX2(5));
  console.log(multiplyX5(5));
}

//TODO: public methods and encapsulation object
{
  const userInfo = (function () {
    let userName = 'User';

    return {
      getName() {
        return userName;
      },
      setName(newName) {
        userName = newName;
      },
    };
  })();

  console.log(userInfo.getName());
  console.log(userInfo.setName('Mob'));
  console.log(userInfo.getName());

  const counter = () => {
    let _counter = 0;

    const _changeBy = (value) => {
      _counter += value;
    };

    return {
      increment() {
        _changeBy(1);
      },

      decrement() {
        _changeBy(-1);
      },

      display() {
        return _counter;
      },
    };
	};
	counter_1 = counter();
	counter_1.increment();
	counter_1.increment();
	console.log(counter_1.display());
	counter_1.decrement();
	console.log(counter_1.display())
}
