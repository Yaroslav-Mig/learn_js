//TODO: params
{
  function func(from, text = 'text didn`t add') {
    console.log(`${from} : ${text}`);
  }
  func('Ann');

  function showMessage(from, text = anotherFunction()) {}

  function showMessage2(from, text) {
    if (text === undefined) {
      text = 'text didn`t add';
    }
  }

  function showMessage3(from, text) {
    text = text || 'text didn`t add';
  }

  function test(func1, func2) {
    console.log(func1() + func2());
  }

  test(
    () => 1,
    () => 2
  );

  function test2(num, func) {
    console.log(func(num));
  }
  test2(2, function (num) {
    return num * num;
  });

  function changeArr(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = func(arr[i]);
    }
    return arr;
  }
  const result = changeArr([1, 2, 3], (el) => el * el);
  console.log(result);

  function test3(num) {
    function func(localNum) {
      num = 2;
    }
    func(num);
    console.log(num);
  }
  test3(1);
}
//TODO: invoke fn and type
{
  func(); // invoke of func before declaration only for Function Declaration;
  function func() {
    console.log('!');
  }

  let func2 = function () {
    console.log('!');
  };
  func2();

  (function () {
    console.log('To');
  });

  (function () {
    console.log('Ku');
  })();

  let arr = [
    function () {
      console.log('1');
    },
    function () {
      console.log('2');
    },
    function () {
      console.log('3');
    },
  ];
  arr[0]();

  let math = {
    square: function (num) {
      return num * num;
    },
    cube: function (num) {
      return num * num * num;
    },
  };
  console.log(math.square(2));
  console.log(math.cube(2));
}

//TODO: return func

{
  function func() {
    return function () {
      return '!';
    };
  }

  let result = func();
  console.log(result());
  console.log(func()());
}
