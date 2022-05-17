// ! methods find() findIndex() lastIndexOf()

//* The find() method returns the value of the first element that passes a test.
//* The find() method executes a function for each array element.
//* The find() method returns undefined if no elements are found.
//* The find() method does not execute the function for empty elements.
//* The find() method does not change the original array.
//*

//* The findIndex() method executes a function for each array element.
//* The findIndex() method returns the index (position) of the first element that passes a test.
//* The findIndex() method returns -1 if no match is found.
//* The findIndex() method does not execute the function for empty array elements.
//* The findIndex() method does not change the original array.

//* The lastIndexOf() method returns the last index (position) of a specified value.
//* The lastIndexOf() method returns -1 if the value is not found.
//* The lastIndexOf() starts at a specified index and searches from right to left.
//* By default the search starts at the last element and ends at the first.
//* Negative start values counts from the last element (but still searches from right to left).
//*

// ? Syntax
// array.find(function(currentValue, index, arr),thisValue)
// array.lastIndexOf(item, start)
// array.findIndex(function(currentValue, index, arr), thisValue)

//TODO: find()
{
  const ages = [3, 10, 18, 20];
  const age = ages.find((value) => value > 16);
  console.log(age);

  const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
  ];

  const isCherries = inventory.find((fruit) => fruit.name === 'cherries');
  console.log(isCherries);
}

//TODO: Find a prime number in an array
{
  function isPrime(el) {
    for (let i = 2; i < el; i++) {
      return el % i === 0 ? false : el;
    }
    return el > 1;
  }
  console.log([4, 6, 8, 12].find(isPrime));
  console.log([4, 5, 8, 12].find(isPrime));
}

//TODO: findIndex()
{
  const array1 = [5, 12, 8, 130, 44];
  const isLargerNumber = (element) => element > 10;
  console.log(array1.findIndex(isLargerNumber));

  const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
  let search = 'blueberries';
  const index = fruits.findIndex((fruit) => fruit === search);
  console.log(index);
  console.log(fruits[index]);
}

//TODO: lastIndexOf()
{
  const fruits = ['Orange', 'Apple', 'Mango', 'Apple', 'Banana', 'Apple'];
  const index = fruits.lastIndexOf('Apple');
  let index2 = fruits.lastIndexOf('Apple', 4);
  let index3 = fruits.lastIndexOf('Apple', -7);
  console.log(index);
  console.log(index2);
  console.log(index3);
}

{
  let indices = [];
  const arr = ['a', 'b', 'a', 'c', 'a', 'd'];
  const elem = 'a';
  let index = arr.lastIndexOf(elem);
  while (index !== -1) {
    indices.push(index);
    index = index > 0 ? arr.lastIndexOf(elem, index - 1) : -1;
  }
  console.log(indices);
}
{
  let indices = [];
  const arr = ['a', 'b', 'a', 'c', 'a', 'd'];
  const elem = 'a';
  for (let i = arr.lastIndexOf(elem); i !== -1;) {
    indices.push(i);
    i = i > 0 ? arr.lastIndexOf(elem, i - 1) : -1;
  }
  console.log(indices);
}
