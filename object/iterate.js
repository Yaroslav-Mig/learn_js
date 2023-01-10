// TODO - Object.values(obj)
//* static method returns an array of a given object's own enumerable string-keyed property values
//* When using numeric keys, the values are returned in the keys' numerical order

{
  let user = {
    name: 'John',
    age: 30,
  };
  for (const value of Object.values(user)) {
    console.log(value);
  }

  const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
  console.log(Object.values(arrayLikeObj2));
}

// TODO - Object.keys(obj)
//* An array of strings representing the given object's own enumerable string-keyed property keys.
//* The order of the array returned by Object.keys() is the same as that provided by a for...in loop.
//* except that a for...in loop enumerates properties in the prototype chain as well
//* When using numeric keys, the values are returned in the keys' numerical order
//* Only strings may have own enumerable properties, while all other primitives return an empty array.
//* Non-object arguments are coerced to objects.

{
  const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  console.log(Object.keys(object1));

  const anObj = {
    100: 'a',
    2: 'b',
    7: 'c',
  };
  console.log(Object.keys(anObj));
  // ['2', '7', '100']

  const arr = ['a', 'b', 'c'];
  console.log(Object.keys(arr));
  // ['0', '1', '2']

  console.log(Object.keys('foo'));
  // ['0', '1', '2']
}
console.log('--------------');

// TODO - Object.entries()
//* returns an array of a given object's own enumerable string-keyed property key-value pairs is an array.
//* the first element is the property key (which is always a string), and the second element is the property value.
{
  const object1 = {
    a: 'somestring',
    b: 42,
  };

  for (let [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  const obj = { a: 5, b: 7, c: 9 };
  // Using array methods
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
    // "a 5", "b 7", "c 9"
  });

  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  const doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  console.log(doublePrices);
}
