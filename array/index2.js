// ! methods filter

//* The filter() method creates a new array filled with elements that pass a test provided by a function.
//* If no elements pass the test, an empty array will be returned.
//* Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.
//* The filter() method does not change the original array.
//* The filter() callbackFn is invoked only for indexes of the array which have assigned value
//* The filter() method does not execute the function for empty elements.

//TODO: use map instead of loop for
{
  let arr = [3, -12, 0, 4, 5, -7];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr2.push(arr[i]);
    }
  }
  console.log(arr2);

  let arr3 = arr.filter((el, index) => {
    if (index % 2 === 0) {
      return el >= 0;
    }
  });
  console.log(arr3);
}

{
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter((word) => word.length > 6);
  console.log(result);

  // TODO: Find all prime numbers in an array using filter() method
  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  function isPrime(number) {
    for (let i = 2; number > i; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }
  const arrPrime = array.filter(isPrime);
  console.log(arrPrime);

  // TODO: filter() to filter array content based on search criteria
  let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
  function filterItems(arr, query) {
    return arr.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  console.log(filterItems(fruits, 'ap'));

  let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' },
  ];
  let invalidValues = 0;
  let arrById = arr.filter((item) => {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidValues++;
    return false;
  });
  console.log('Filtered Array\n', arrById);
  console.log('Number of Invalid Entries =', invalidValues);
}
// TODO:Affecting Initial Array (modifying, appending and deleting)
{
  let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
  let changeWords = words.filter((word, index, arr) => {
    if (index < arr.length - 1) {
      arr[index + 1] += ' extra';
    }
    return word.length < 6;
  });
  console.log(changeWords);
}
{
  let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
  const appendedWords = words.filter((word, index, arr) => {
    arr.push('new');
    return word.length < 6;
  });
  console.log(appendedWords);
}

{
  let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
  const deleteWords = words.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
  });
  console.log(deleteWords);
}
// TODO:filter() and DOM
{
  const ages = [32, 33, 12, 40];

  const checkAges = (age) => age > document.getElementById('ageToCheck').value;

  document.getElementById('ageBtn').onclick = function () {
    document.getElementById('demo').innerHTML = ages.filter(checkAges);
  };
}

// TODO: Find all prime numbers in an array using method filter()
{
  const array = [-3, 17, 100, 0, 20, 2, 3, 87, 5, 6, 7, 42, 9, 67, 11, 75, 13];

  function isPrime(value) {
    if (number > 5 && (number % 2 === 0 || number % 5 === 0)) return false;
    const sqrtVal = Math.sqrt(value);
    for (let divisor = 2; divisor <= sqrtVal; divisor++) {
      if (value % divisor === 0) return false;
    }
    return value > 1;
  }

  console.log(array.filter(isPrime));
}
