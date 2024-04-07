// ! methods slice()

//* The slice() method returns selected elements in an array, as a new array. Method selects from a given start to the end (end not included).
//* IT does not change the original array. A new array containing the extracted elements.
//* If start is undefined, slice starts from the index 0.
//* If start is equal or greater than the index range of the sequence, an empty array is returned.
//* A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
//* Negative start index — if -array.length <= start < 0, start + array.length is used.
//* Negative start index - if start < -array.length or start is omitted, 0 is used.
//* Negative end index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
//* Negative end index - if end < -array.length, 0 is used.
//* If end is omitted, slice extracts through the end of the sequence (arr.length).
//* If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
//* If end implies a position before or at the start position, nothing is extracted.
//* For objects, slice copies object references into the new array. Both the original and new array refer to the same object.
//* If an object changes, the changes are visible to both the new and original arrays.

// ? Syntax
// slice()
// slice(start)
// slice(start, end)
// start - Optional. Start position. Default is 0. Negative numbers select from the end of the array.
// end - Optional. End position but not including end. Default is last element.Negative numbers select from the end of the array.

// ? Return value
// A new array containing the selected elements.

//TODO: extract elements with slice()
{
  const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  console.log(fruits.slice(2));
  console.log(fruits.slice(2, 4));
  console.log(fruits.slice(1));
  console.log(fruits.slice(-2));
  console.log(fruits.slice(1, -2));
  console.log(fruits.slice());
}

//TODO: Using slice, create newCar from myCar, nested object
{
  let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
  let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
  let newCar = myCar.slice(0, 2);
  console.log(newCar);
  console.log('myCar = ' + JSON.stringify(myCar));
  console.log('newCar = ' + JSON.stringify(newCar));

  // Display the values of myCar, newCar, and the color of myHonda referenced from both array
  myHonda.color = 'purple';
  console.log('The new color of my Honda is ' + myHonda.color);
  console.log('myCar[0].color = ' + myCar[0].color);
  console.log('newCar[0].color = ' + newCar[0].color);

  // change the color honda
  newCar = JSON.parse(JSON.stringify(newCar));
  newCar[0].color = 'black';
  console.log(newCar);
  console.log(myCar);
}

//TODO: polyfill for function slice()
{
  const sliceFn = (arr, start = 0, end = arr.length) => {
    const length = arr.length;

    if (start >= length) {
      return [];
    }

    if (Math.abs(start) >= length && start < 0) {
      start = 0;
    } else if (start < 0) {
      start = start + length;
    }

    if (end > length) {
      end = length;
    } else if (Math.abs(end) >= length && end < 0) {
      return [];
    } else if (end < 0) {
      end = end + length;
    }

    let newArr = [];
    for (let i = start; i < end; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  };

  const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

  console.log('----------------');
  //* normal
  console.log(sliceFn(fruits, 1, 3));
  console.log(fruits.slice(1, 3));
  console.log('----------------');

  //* there are no arguments
  console.log(sliceFn(fruits));
  console.log(fruits.slice());
  console.log('----------------');

  //* If end is omitted
  console.log(sliceFn(fruits, 1));
  console.log(fruits.slice(1));
  console.log('----------------');

  //* If end is greater than the length of the sequence
  console.log(sliceFn(fruits, 1, 7));
  console.log(fruits.slice(1, 7));
  console.log('----------------');

  //* If start is greater than the index range of the sequence
  console.log(sliceFn(fruits, 5, 7));
  console.log(fruits.slice(5, 7));
  console.log('----------------');

  //* If start is greater than the end
  console.log(sliceFn(fruits, 3, 1));
  console.log(fruits.slice(3, 1));
  console.log('----------------');

  //* A negative index indicates an offset from the end of the sequence
  console.log(sliceFn(fruits, -2));
  console.log(fruits.slice(-2));
  console.log('----------------');
  console.log(sliceFn(fruits, 2, -1));
  console.log(fruits.slice(2, -1));
  console.log('----------------');

  //* Both negative indexes
  console.log(sliceFn(fruits, -2, -1));
  console.log(fruits.slice(-2, -1));
  console.log('----------------');
  console.log(sliceFn(fruits, -5, -1));
  console.log(fruits.slice(-5, -1));
  console.log('----------------');

  //* If start negative index is greater than the index range of the sequence
  console.log(sliceFn(fruits, -6, -1));
  console.log(fruits.slice(-6, -1));
  console.log('----------------');

  //* If end negative index is greater than the index range of the sequence
  console.log(sliceFn(fruits, -3, -6));
  console.log(fruits.slice(-3, -6));
  console.log('----------------');
}
