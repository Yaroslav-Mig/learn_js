// ! methods map
//* map() does not mutate the array on which it is called, does not change the original array
//* map() calls a function once for each element in an array.
//* map() does not execute the function for empty elements.
//* callbackFn is invoked only for indexes of the array which have assigned values (including undefined).
//* Since map() builds a new array, using it when you aren't using the returned array is an anti-pattern;  use forEach or for...of instead.

//TODO: use map instead of loop for
{
  const arr = [2, 4, 3];
  arr[4] = [7];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
  //* loop for() execute the function for empty elements

  function fn(item, index, array) {
    return item * 3;
  }
  let newArr2 = arr.map(fn);
  // console.log(newArr2);

  const numbers = [4, 9, 16, 25];
  const newArr3 = numbers.map(Math.sqrt);
  // console.log(newArr3);

  const tempC = [-2, -3, -5, -4, -2, 0, 2, 3, 4, 6, 5, 2];
  const tempF = tempC.map((value) => value * 1.8 + 32);
  // console.log(tempF);

  const arr2 = [2, 4, 3];
  arr2[10] = 9;
  const arrCopy = arr2.map((item, index, array) => {
    if (index == 2) {
      array[index + 1] = 7;
    }
    return item;
  });
  console.log(arrCopy);
}

// TODO:Using map to reformat objects in an array
{
  const orders = [
    { name: ' Ivan ', order: 12, sum: '123,5' },
    { name: 'Sergey ', order: 12, sum: '123, 5' },
    { name: '  lena', order: 12, sum: '123.5' },
    { name: ' Ivan Petr ', order: 12, sum: '123,50' },
  ];
  const mapOrders = orders.map((item) => {
    item.name = item.name.toLowerCase().trim();
    item.sum = Number(parseFloat(item.sum).toFixed(1));
    return item;
  });
  // console.log(mapOrders);

  let kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  let reformattedArray = kvArray.map((item) => {
    let obj = {};
    obj[item.key] = item.value;
    return obj;
  });
  console.log(reformattedArray);

  const persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
  ];
  const getFullName = (item) => {
    return `${item.firstname} ${item.lastname}`;
    return [item.firstname, item.lastname].join(' ');
    // 2 options for solving task
  };
  console.log((document.getElementById('demo').innerHTML = persons.map(getFullName)));
}

// TODO: Borrow method map for other objects and date types
{
  let map = Array.prototype.map;
  let a = map.call('Hello World', (x) => x.charCodeAt(0));
  // console.log(a);
}
