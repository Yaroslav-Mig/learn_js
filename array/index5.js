// ! methods slice()

//* The slice() method returns selected elements in an array, as a new array. Method selects from a given start to the end (end not included).
//* IT does not change the original array. A new array containing the extracted elements.
//* If start is undefined, slice starts from the index 0.
//* If start is greater than the index range of the sequence, an empty array is returned.
//* A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
//* If end is omitted, slice extracts through the end of the sequence (arr.length).
//* If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
//* For objects, slice copies object references into the new array. Both the original and new array refer to the same object.
//* If an object changes, the changes are visible to both the new and original arrays.

// ? Syntax
// slice()
// slice(start)
// slice(start, end)
// start - Optional. Start position. Default is 0. Negative numbers select from the end of the array.
// end - Optional. End position but not including end. Default is last element.Negative numbers select from the end of the array.
//
//
//

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
