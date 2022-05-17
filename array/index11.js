// ! methods Array.isArray() and Array.from()

//* The isArray() method returns true if an object is an array, otherwise false.
//* Array.isArray() is a static property of the JavaScript Array object.
//* You can only use it as Array.isArray().Using x.isArray(), where x is an array will return undefined.
//* method does not change the original array.

//* The Array.from() method returns an array from any object with a length property.
//* The Array.from() method returns an array from any iterable object.
//* Array.from() is a static property of the JavaScript Array object.
//* You can only use it as Array.from(). Using x.from(), where x is an array will return undefined.

// ? Syntax
// Array.isArray(value)
// Array.from(object, mapFunction, thisValue)
// object - Required. The object to convert to an array.
// mapFunction - Optional. A map function to call on each item of the array.
// thisValue - Optional. A value to use as this for the mapFunction

//TODO: Array.isArray()
{
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  console.log(Array.isArray(fruits));
  Array.isArray([1, 2, 3]); // true
  Array.isArray({ foo: 123 }); // false
  Array.isArray('foobar'); // false
  Array.isArray(undefined); // false

  // all following calls return true
  Array.isArray([]);
  Array.isArray([1]);
  Array.isArray(new Array());
  Array.isArray(new Array('a', 'b', 'c', 'd'));
  Array.isArray(new Array(3));
  // Little known fact: Array.prototype itself is an array:
  Array.isArray(Array.prototype);

  // all following calls return false
  Array.isArray();
  Array.isArray({});
  Array.isArray(null);
  Array.isArray(undefined);
  Array.isArray(17);
  Array.isArray('Array');
  Array.isArray(true);
  Array.isArray(false);
  Array.isArray(new Uint8Array(32));
  Array.isArray({ __proto__: Array.prototype });
}

//TODO: Array.from()
{
  console.log(Array.from('foo'));
  const newArr = Array.from([1, 2, 3], (x) => x + x);
  console.log(newArr);

  Array.from({ length: 5 }, (_, i) => i);
  // [0, 1, 2, 3, 4]
}
//TODO: Array.from() map and set
{
  const set = new Set(['foo', 'bar', 'baz', 'foo']);
  console.log(Array.from(set));

  const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  console.log(Array.from(map));
  // [[1, 2], [2, 4], [4, 8]]

  const mapper = new Map([
    ['1', 'a'],
    ['2', 'b'],
  ]);
  Array.from(mapper.values());
  // ['a', 'b'];
  Array.from(mapper.keys());
  // ['1', '2'];
}
//TODO: Array from a NodeList
{
  // Create an array based on a property of DOM Elements
  const images = document.getElementsByTagName('img');
  const sources = Array.from(images, (image) => image.src);
  const insecureSources = sources.filter((link) => link.startsWith('http://'));
}
// TODO: Array from an Array-like object (arguments)
{
  function f() {
    return Array.from(arguments);
  }
  f(1, 2, 3);
  // [ 1, 2, 3 ]
}
//TODO: Sequence generator (range)
{
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  console.log(range(0, 4, 1));
	console.log(range(1, 10, 2));

	const A = 'A'.charCodeAt(0);
	const Z = 'Z'.charCodeAt(0);
	const alphabetArr = range(A, Z, 1).map(value => String.fromCharCode(value));
	console.log(alphabetArr);
}
