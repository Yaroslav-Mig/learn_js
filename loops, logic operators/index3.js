//! Difference between Loops for(), forEach(), for..in(), for..of()
//* For..in iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols),
//* including inherited enumerable properties.
//* for...in should not be used to iterate over an Array where the index order is important.

//*The for...of statement creates a loop iterating over iterable objects,
//* including: built -in String, Array, array - like objects(e.g., arguments or NodeList), TypedArray, Map, Set
//* On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.

//? for (variable in object) {
//?  statement
//? }

//? for (variable of iterable) {
//?   statement
//? }

// TODO: for() and for/in access for index key in the array
const arr = ['a', 'b', 'c'];
{
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
  console.log('---------');

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      console.log(element);
    }
  }
}
console.log('---------');

// TODO: forEach() и for/of access for element in the array
{
  arr.forEach((element) => console.log(element));
  console.log('---------');
  for (const iterator of arr) {
    console.log(iterator);
  }
}
console.log('---------');

// TODO: assign non-numerical property to the array
//* Only for..in() display string property, 3 others methods ignore non-numerical property
//* Should not use for/in for the arr in JS
{
  console.log(typeof arr);
  console.log(arr[1] === arr['1']); // true, JavaScript arrays are just special objects
  arr.text = 'bad';
  console.log(arr.text);

  for (const iterator of arr) {
    console.log(iterator);
  }
  console.log('---------');
  arr.forEach((el, i) => console.log(i, el));
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
  console.log('---------');

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      console.log(element);
    }
  }
}
console.log('---------');

// TODO: hollow in arrays - empty elements
//* for() and for/of don`t skip empty elements, forEach() and for/of does
{
  const arr = ['a', , 'c'];
  console.log(arr.length);

  // Prints "a, undefined, c"
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
  // Prints "a, undefined, c"
  for (const v of arr) {
    console.log(v);
  }
  console.log('---------');
  // Prints "a, c"
  arr.forEach((v) => console.log(v));

  // Prints "a, c"
  for (let i in arr) {
    console.log(arr[i]);
  }
}

// TODO: this context in loops

{
  ('use strict');
  const arr = ['a'];
  // Prints "undefined"
  arr.forEach(function () {
    console.log(this);
  });
  arr.forEach(() => console.log(this));
}

// TODO: for..of()
{
  const iterable = 'boo';
  for (const value of iterable) {
    console.log(value);
  }

  const iterable2 = new Uint8Array([0x00, 0xff]);
  for (const value of iterable2) {
    console.log(value);
  }

  const iterable3 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]);

  for (const entry of iterable3) {
    console.log(entry);
  }
  for (const [key, value] of iterable3) {
    console.log(value);
  }

  const iterable4 = new Set([1, 1, 2, 2, 3, 3]);
  for (const value of iterable4) {
    console.log(value);
  }

  (function () {
    for (const argument of arguments) {
      console.log(argument);
    }
  })(1, 2, 3);

  const articleParagraphs = document.querySelectorAll('section > p');
  console.log(articleParagraphs);
  for (const paragraph of articleParagraphs) {
    paragraph.classList.add('read');
  }
}

// TODO: Difference between for...of and for...in
//* for...of and for...in - The main difference between them is in what they iterate over.
//* The for...in statement iterates over the enumerable properties of an object.
//* The for...of statement iterates over values that the iterable object defines to be iterated over.
{
  Object.prototype.objCustom = function () {};
  Array.prototype.arrCustom = function () {};

  const iterable = [3, 5, 7];
  iterable.foo = 'hello';

  for (const i in iterable) {
    console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
  }

  for (const i in iterable) {
    if (iterable.hasOwnProperty(i)) {
      console.log(i); // logs "0", "1", "2", "foo"
    }
  }

  for (const i of iterable) {
    console.log(i); // logs 3, 5, 7
  }
}