// ! methods join()

//* The join() method returns an array or an array-like object as a string.
//* The join() method does not change the original array.
//* Any separator can be specified. The default is comma (,). If it omitted, the array elements are separated with a comma (",").
//* If separator is an empty string, all elements are joined without any characters in between them.
//* Warning: If an element is undefined, null or an empty array [], it is converted to an empty string.

// ? Syntax
// join()
// join(separator)

{
  const fruits = ['Banana', undefined, 'Orange', 'Apple', , 'Mango'];
  console.log(fruits.join(''));
  console.log(fruits.join());
  console.log(fruits.join(' '));
  console.log(fruits.join(' and '));
}

//TODO: Joining an array-like object
{
  function fn(a, b, c) {
    const join = Array.prototype.join;
    console.log(typeof join.call(arguments));
    console.log(join.call(arguments));
  }
  fn(1, 'a', true);
}
