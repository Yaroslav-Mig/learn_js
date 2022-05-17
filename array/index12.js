// ! methods every() and some()

//* The every() method executes a function for each array element.
//* method returns true if the function returns true for all elements.
//* method returns false if the function returns false for one element.
//* method does not execute the function for empty elements.
//* The every() method does not change the original array
//* Note: Calling this method on an empty array will return true for any condition!

//* The some() method checks if any array elements pass a test (provided as a function)
//* The some() method executes the function once for each array element:
//* true if the callback function returns a truthy value for at least one element in the array. Otherwise, false
//* Calling this method on an empty array returns false for any condition!
//* The some() method does not execute the function for empty array elements.
//* The some() method does not change the original array.

// ? Syntax
// array.every(function(currentValue, index, arr), thisValue)
// Array.from(object, mapFunction, thisValue)
// object - Required. The object to convert to an array.
// mapFunction - Optional. A map function to call on each item of the array.
// thisValue - Optional. A value to use as this for the mapFunction

// array.some(function(value, index, arr), this)

//TODO: every()
{
  const survey = [
    { name: 'Steve', answer: 'Yes' },
    { name: 'Jessica', answer: 'Yes' },
    { name: 'Peter', answer: 'Yes' },
    { name: 'Elaine', answer: 'Yes' },
  ];
  const isSameAnswer = (el, index, arr) => {
    if (index === 0) {
      return true;
    } else {
      return el.answer === arr[index - 1].answer;
    }
  };
  const result = survey.every(isSameAnswer);
  console.log(result);

  const ages = [32, 33, 12, 40];
  const setAge = document.getElementById('ageBtn');

  const checkAge = (age) => age > document.getElementById('ageToCheck').value;

  setAge.onclick = function () {
    document.getElementById('demo').innerHTML = ages.every(checkAge);
  };
}
//TODO: Check if one array is a subset of another array
{
  function isSubset(arr1, arr2) {
    return arr2.every((element) => arr1.includes(element));
  }
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
}
//TODO: some()
{
  function isBigger(arr, number) {
    return arr.some((element) => element > number);
  }
  console.log(isBigger([2, 5, 8, 1, 4], 10));
  console.log(isBigger([12, 5, 8, 1, 4], 10));

  const fruits = ['apple', 'banana', 'mango', 'guava'];
  const checkItem = (arr, item) => {
    return arr.some((el) => el === item);
  };
  console.log(checkItem(fruits, 'mango'));
  console.log(checkItem(fruits, 'kiwi'));

  const TRUTHY_VALUES = [true, 'true', 1];

  function getBoolean(value) {
    'use strict';

    if (typeof value === 'string') {
      value = value.toLowerCase().trim();
    }
    return TRUTHY_VALUES.some((el) => el === value);
  }
  console.log(getBoolean(false)); // false
  console.log(getBoolean('false')); // false
  console.log(getBoolean(1)); // true
  console.log(getBoolean('true')); // true
}
