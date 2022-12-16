//TODO: Callback
{
  const each = (arr, fn) => {
    const result = [];
    for (const el of arr) {
      result.push(fn(el));
    }
    return result;
  };

  console.log(each([1, 2, 3], (v) => v ** 3));
  console.log(each([1, 2, 3], square));

  function square(num) {
    return num ** 2;
  }
}

{
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const each = (arr, fn) => {
		const result = [];

    for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				const el = arr[i][j];
				if (fn(el, j)) {
					result.push(el);
				}
			}
    }
    return result;
  };

	let result = each(arr, (el, ind) => (el * ind > 10 ? true : false));
	console.log(result);
}
