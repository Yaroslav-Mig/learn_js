// ! methods indexOf()

//* The indexOf() method returns the first index (position) of a specified value.
//* The indexOf() method returns -1 if the value is not found.
//* The indexOf() method starts at a specified index and searches from left to right.
//* By default the search starts at the first element and ends at the last.Negative start values counts from the last element (but still searches from right to left).
//* indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).

// ? Syntax
// array.indexOf(item, start)
// index - Required.The value to search for.
// start - Optional. Where to start the search. Default value is 0.Negative values start the search from the end of the array.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

//TODO: find index
{
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  console.log(beasts.indexOf('bison'));
  console.log(beasts.indexOf('giraffe'));
}

//TODO: Finding all the occurrences of an element
{
  let indices = [];
  const array = ['a', 'b', 'a', 'c', 'a', 'd'];
  const element = 'a';
  let index = array.indexOf(element);
  while (index !== -1) {
    indices.push(index);
    index = array.indexOf(element, index + 1);
  }
  console.table(array);
  console.log(indices);
}

//TODO: Finding if an element exists in the array or not and updating the array
{
  const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

  const updateArray = (arr, el) => {
    if (arr.indexOf(el) === -1) {
      arr.push(el);
      console.log(`New element in tha array is ${el}`);
    } else {
      console.log(`${el} is exist in the array`);
    }
  };
  console.log(updateArray(veggies, 'spinach'));
  console.log(updateArray(veggies, 'spinach'));
}

//TODO: pollyfill
{
  const array = [1, 2, 3];
  function indexOf(array, item, fromIndex) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === item) {
        return i;
      }
    }
    return -1;
  }
  console.log(indexOf(array, 12));
}
