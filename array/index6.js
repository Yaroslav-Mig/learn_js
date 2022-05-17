// ! methods concat()

//* The concat() method is used to merge two or more arrays.
//* The concat() method returns a new array, containing the joined arrays.
//* The concat() method does not change the existing arrays.
//* If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called.
//* Concatenating array(s)/value(s) will leave the originals untouched.
//* Furthermore, any operation on the new array(except operations on elements which are object references) will have no effect on the original arrays

// ? Syntax
// array1.concat(array2, array3, ..., arrayX)
// concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, ... , valueN)

//TODO: Join arrays
{
  const arr1 = ['Cecilie', 'Lone'];
  const arr2 = ['Emil', 'Tobias', 'Linus'];
  const arr3 = ['Robin'];
  const children = arr1.concat(arr2, arr3);
  const childrenCopy = children.concat();
  console.log(children);
  console.log(childrenCopy);
  console.log(children === childrenCopy); //false

  const letters = ['a', 'b', 'c'];
  const alphaNumeric = letters.concat(1, [2, 3]);
  console.log(alphaNumeric);

  const lettersDouble = letters.concat(letters);
  console.log(lettersDouble);
}

//TODO: Concatenating nested arrays
{
  const num1 = [[1]];
  const num2 = [2, [3]];
  const numbers = num1.concat(num2);
  console.log(numbers);
  num1[0].push(4);
  console.log(numbers);
}
