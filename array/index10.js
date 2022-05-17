// ! methods Reduce()

//* The reduce() method executes a reducer callback function for array each element.
//* method returns a single value: the function's accumulated result.
//* method does not execute the function for empty array elements.
//* method does not change the original array.
//* Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
//* reduce does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.
//* It is a TypeError if the array contains no elements and initialValue is not provided.
//*

// ? Syntax
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
// function() - Required. A function to be run for each element in the array.
// total - Required. The initialValue, or the previously returned value of the function.
// currentValue - Required. The value of the current element.
// currentIndex - Optional. The index of the current element.
// arr - Optional. The array the current element belongs to.
// initialValue - Optional.A value to be passed to the function as the initial value.

//TODO: reduce()
{
  const getMax = (a, b) => Math.max(a, b);
  [1, 100].reduce(getMax, 50); // 100
  [50].reduce(getMax, 10); // 50

  // callback is invoked once for element at index 1
  [1, 100].reduce(getMax); // 100

  // callback is not invoked
  [50].reduce(getMax); // 50
  [].reduce(getMax, 1); // 1

  // [].reduce(getMax); // TypeError

  const numbers = [175, 50, 25];
  const number = numbers.reduce((acc, val) => acc - val);
  console.log(number);

  const array1 = [1, 2, 3, 4];
  const reducer = (prevValue, currentValue) => prevValue + currentValue;
  console.log(reducer());
}

//TODO: reduce()
{
  const numbers = [15.5, 2.3, 1.1, 4.7];
  const getSum = (total, num) => total + Math.round(num);
  const number = numbers.reduce(getSum, 0);
  console.log(number);

  const array = [15, 16, 17, 18, 19];
  console.table(array);
  function reducer(previous, current, index, arr) {
    const result = previous + current;
    console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${result}`);
    return result;
  }
  console.log(array.reduce(reducer));

  let total = [0, 1, 2, 3].reduce((prevVal, curVal) => prevVal + curVal, 0);
  console.log(total);

  let initialValue = 0;
  let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((prev, cur) => {
    return prev + cur.x;
  }, initialValue);
  console.log(sum);
}

//TODO: Flatten an array of arrays
{
  let flattened = [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce((totalArr, curArr) => totalArr.concat(curArr), []);
  console.log(flattened);
}

// TODO: Counting instances of values in an object
{
  const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
  const countedNames = names.reduce((object, value) => {
    if (value in object) {
      object[value]++;
    } else {
      object[value] = 1;
    }
    return object;
  }, {});
  console.log(countedNames);
}

// TODO: Grouping objects by a property
{
  const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
  ];
  const groupedPeopleAge = people.reduce((acc, obj) => {
    const key = obj.age;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
  console.log(groupedPeopleAge);

  function groupBy(arrObj, property) {
    return arrObj.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  const groupedPeople = groupBy(people, 'age');
  console.log(groupedPeople);
}

// TODO: Replace .filter().map() with .reduce()
{
  const numbers = [-5, 6, 2, 0];
  const transformFn = (arr, condition, multiply) => {
    let result = [];
    result = arr.filter((val) => val > condition);
    result = result.map((val) => val * multiply);
    return result;
  };
  console.log(transformFn(numbers, 0, 2));

  const doubledPositiveNumbers = numbers.reduce((prevVal, currentVal) => {
    if (currentVal > 0) {
      prevVal.push(currentVal * 2);
    }
    return prevVal;
  }, []);
  console.log(doubledPositiveNumbers);
}

// TODO: Bonding arrays contained in an array of objects using the spread operator and initialValue
{
  let friends = [
    {
      name: 'Anna',
      books: ['Bible', 'Harry Potter'],
      age: 21,
    },
    {
      name: 'Bob',
      books: ['War and peace', 'Romeo and Juliet'],
      age: 26,
    },
    {
      name: 'Alice',
      books: ['The Lord of the Rings', 'The Shining'],
      age: 18,
    },
  ];
  const allBooks = friends.reduce((arr, curVal) => {
			return [...arr, ...curVal.books];
			// option 2
      arr.push(...curVal.books);
      return arr;
    },
    ['Alphabet']
  );
  console.log(allBooks);
}

// TODO: Remove duplicate items in an array
{
	let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
	const arrNoDuplicates = myArray.reduce((acc, value, index) => {
		if (!acc.includes(value)) {
			acc.push(value);
		}
		return acc;	
	}, [])
	console.log(arrNoDuplicates);
}