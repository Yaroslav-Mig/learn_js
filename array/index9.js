// ! methods includes()

//* method determines whether an array includes a certain value among its entries
//* method returns true if the value is found, otherwise false
//* method starts at a specified index and searches from left to right.
//* arr.length + fromIndex for negative values of fromIndex
//* method is case sensitive
//* If fromIndex is greater than or equal to the length of the array, false is returned
//* If the computed index is less than or equal to 0, the entire array will be searched.

// ? Syntax
// array.includes(element, start)
// element - Required.The value to search for.
// start - Optional. Where to start the search. Default value is 0.Negative values start the search from the end of the array.
// includes(searchElement)
// includes(searchElement, fromIndex)

//TODO: instead of indexOf and ~
{
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  const search = 'Orange';

  if (fruits.indexOf(search) !== -1) {
    console.log(true);
  } else {
    console.log(false);
  }

  if (~fruits.indexOf(search)) {
    console.log(true);
  } else {
    console.log(false);
  }

  if (fruits.includes(search)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//TODO: Finding the occurrence of an element
{
  let arr = ['a', 'b', 'c'];
  arr.includes('c', 3); //false
  arr.includes('a', -100); // true
  arr.includes('a', -2); // false

  // computed index is 3 + (-100) = -97
}

//TODO: includes() used as a generic method
{
  (function () {
    console.log(Array.prototype.includes.call(arguments, 'a'));
    console.log(Array.prototype.includes.call(arguments, 'd'));
  })('a', 'b', 'c');
}

// TODO: object, array and string
{
  const orders = [
    { name: 'ivan', order: 12, sum: '123,5' },
    { name: 'sergeev ', order: 12, sum: '123, 5' },
    { name: 'sidorov', order: 12, sum: '123.5' },
    { name: 'petrov ', order: 12, sum: '123,50' },
  ];

  const filteredArr = orders.filter((obj) => obj.name.includes('ov'));
  console.log(filteredArr);
}
