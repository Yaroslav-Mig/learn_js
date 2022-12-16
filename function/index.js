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

  function menu(n) {
    switch (n) {
      case 1:
        return (x, y) => x + y;
      case 2:
        return (x, y) => x - y;
      case 3:
        return (x, y) => x * y;
      default:
        return () => 0;
    }
  }
  const action = menu(1);
  const result2 = action(2, 5);
  console.log(result2);
  action2 = menu(2);
  console.log(action(2, 5));
}
