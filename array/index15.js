// ! methods fill() and keys()

//* The fill() method changes all elements in an array to a static value
//* The fill() method overwrites the original array.
//* Returns The filled array.
//* If start is negative, it is treated as array.length + start.
//* If end is negative, it is treated as array.length + end.
//* fill is a mutator method: it will change the array itself and return it, not a copy of it.
//* fill is intentionally generic: it does not require that its this value be an Array object.
//* If the first parameter is an object, each slot in the array will reference that object.
//* Using Array.prototype.fill() on an empty array would not modify it as the array has nothing to be modified.

//* The keys() method returns an Array Iterator object with the keys of an array.
//* The keys() method does not change the original array.

// ? Syntax
// array.fill(value, start, end)
// value - Required.The value to fill in.
// start - Optional.The start index (position).Default is 0.
// end - Optional.The stop index (position). Default is array length.
// fill(value)
// fill(value, start)
// fill(value, start, end)

// array.keys()

//TODO: fill()
{
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  console.log(fruits.fill('Kiwi'));
  console.log(fruits.fill('Lemon', 2, 4));

  console.log([1, 2, 3].fill(4));
  console.log([1, 2, 3].fill(4, 1));
  console.log([1, 2, 3].fill(4, 1, 2));
  console.log([1, 2, 3].fill(4, -3, -2));
}
//TODO: Using fill() to populate an empty array;
{
  let tempGirls = Array(5).fill('girl');
  console.log(tempGirls);
}
//TODO: A single object, referenced by each slot of the array
{
  let arr = Array(3).fill({});
  arr[0].hi = 'hi';
  console.log(arr);
}
//TODO: Using fill() to create a matrix of all 1
{
  const arr = new Array(3);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(4)
      .fill(1)
      .map((el, ind) => (el = ind));
  }
  console.log(arr);
}
{
  let count = 1;
  const arrFill = Array(5)
    .fill(1)
    .map((val, ind) => {
      count++;
      return (val = ind + count);
    });
  console.log(arrFill);
}

// Array keys()
{
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  const keys = fruits.keys();
  console.log(keys);
  let text = '';
  for (const key of keys) {
    text += key + ' ';
  }
  console.log(text);

  const arr = ['a', , 'c'];
  const sparseKeys = Object.keys(arr);
  const denseKeys = [...arr.keys()];
  const denseKeys2 = arr.keys();
  console.log(sparseKeys);
  console.log(denseKeys);
  console.log(denseKeys2);
}
