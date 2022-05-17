// ! methods push(), pop(), shift() and unshift()

//* The pop() method removes the last element from an array and returns that element;undefined if the array is empty. This method changes the original array and length of the array.
//* Array.prototype.shift() has similar behavior to pop, but applied to the first element in an array.
//* The push() method adds one or more elements to the end of an array and returns the new length of the array.
//* The unshift() method adds adds one or more elements to the beginning of an array. It overwrites the original array and returns the new length of the array.
//* Warning: If an element is undefined, null or an empty array [], it is converted to an empty string.

// ? Syntax
// pop()
// push(element0)
// push(element0, element1)
// push(element0, element1, /* ... ,*/ elementN)
// shift()
//unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* ... ,*/ elementN)

//TODO: removes its last element with pop()
{
  let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
  let popped = myFish.pop();
  console.log(myFish);
  console.log(popped);
}
//TODO: Using apply( ) or call ( ) on array-like objects
{
  let myFish = { 0: 'angel', 1: 'clown', 2: 'mandarin', 3: 'sturgeon', length: 4 };
  let popped = Array.prototype.pop.call(myFish);
  console.log(myFish);
  console.log(popped);
}

//TODO: add elements
{
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.push('Kiwi');
  console.log(fruits);

  const animals = ['pigs', 'goats', 'sheep'];
  const total = animals.push('dog', 'chicken', 'cat');
  console.log(animals);
  console.log(total);
}
//TODO: Merging two arrays with push() and spread operator
{
  let vegetables = ['parsnip', 'potato'];
  let moreVegs = ['celery', 'beetroot'];
  vegetables.push(...moreVegs);
  console.log(vegetables);
}
//TODO: Pop() and push() Dom
{
  let goods = [];
  let id = document.getElementById('goods');

  document.querySelector('.push').onclick = function () {
    if (!goods.includes(id.value) && id.value.trim()) {
      goods.push(id.value);
      id.value = '';
    }
    console.log(goods);
  };

  document.querySelector('.pop').onclick = function () {
    const removedId = goods.pop();
    console.log(`Товар ${removedId} был удалён`);
    console.log(goods);
  };
}

//TODO: Shift() remove first element, Using shift() method in while loop
{
  const array = [1, 2, 3];
  const firstEl = array.shift();
  console.log(firstEl);

  let names = ['Andrew', 'Edward', 'Paul', 'Chris', 'John'];
  let i = '';
  while (typeof (i = names.shift()) !== 'undefined') {
    console.log(i);
  }
}

//TODO: Unshift() add element
{
  let arr = [4, 5, 6];
  arr.unshift(1, 2, 3);
  console.log(arr);
  arr.unshift([-2, -1]);
  console.log(arr);
}
