// ! methods splice()

//* The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//* If start greater than the length of the array, start will be set to the length of the array.
//* In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items [n*] provided
//* If deleteCount is omitted, or if its value is equal to or larger than array.length - start, then all the elements from start to the end of the array will be deleted
//* However, deleteCount must not be omitted if there is any item1 parameter. If deleteCount is 0 or negative, no elements are removed
//* If you do not specify any elements, splice() will only remove elements from the array
//* An array containing the deleted elements. If no elements are removed, an empty array is returned.

// ? Syntax
// array.splice(index, howmany, item1, ....., itemX)
// index - Required.The position to add/remove items.Negative value defines the position from the end of the array.
// howmany - Optional. Number of items to be removed.
// item1, ..., itemX - Optional. New elements(s) to be added.
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

//TODO: add new items, removed snd replaced
{
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  console.log(fruits.splice(2, 1, 'Lemon', 'Kiwi'));
  console.log(fruits);

  const months = ['Jan', 'March', 'April', 'June'];
  console.log(months.splice(1, 0, 'Feb'));
  console.log(months);

  let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
  let removed = myFish.splice(3, 1);
  console.log(removed);
  console.log(myFish);
  let removed2 = myFish.splice(2, 1, 'trumpet');
  let removed3 = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
  let removed4 = myFish.splice(2, 2);
	let removed5 = myFish.splice(-2, 1);
	let removed6 = myFish.splice(2)
  console.log(myFish);
}

