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

  function display(season, ...temps) {
    console.log(season);
    for (elem of temps) {
      console.log(elem);
    }
  }
  display('Spring', 2, 3, 5, 6, 9);
  display('Summer', 20, 23, 31);

  function sum() {
    let result = 0;
    for (let param of arguments) {
      result += param;
      console.log(param);
    }
    return result;
  }
  console.log(sum(6, 4, 5)); // 15

  function test(func1, func2) {
    console.log(func1() + func2());
  }
  test(
    () => 1,
    () => 2
  );
}

//TODO: functions as params for another func
{
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

	function sum(x, y) {
		return x + y;
	}
	function subtract(x, y) {
		return x - y;
	}

	function operation(x, y, func) {
		const result = func(x, y);
		console.log(result);
	}

	console.log('Sum');
	operation(10, 6, sum); // 16

	console.log('Subtract');
	operation(10, 6, subtract); // 4
}
