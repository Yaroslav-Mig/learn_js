//* The Set object lets you store unique values of any type
//* A value in the Set may only occur once; it is unique in the Set's collection
//* It can be looped over with for...of and forEach

//TODO: Set()
{
  let set = new Set();

  let john = { name: 'John' };
  let pete = { name: 'Pete' };
  let mary = { name: 'Mary' };

  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  console.log(set.size);
  console.dir(set);

  for (const iterator of set) {
    console.log(iterator);
  }
}

//TODO: Iteration over Set
//*The entries() method returns a new Iterator object that contains an array of [value, value]
//* The values() method returns a new Iterator object that contains the values for each element
{
  const set1 = new Set();
  set1.add(42);
  set1.add('forty two');

  const iterator1 = set1.entries();

  for (const entry of iterator1) {
    console.log(entry);
  }

  let set2 = new Set(['oranges', 'apples', 'bananas']);
  set2.forEach((value, valueAgain, set) => console.log(value));

  const mySet = new Set();
  mySet.add('foo');
  mySet.add('bar');
  mySet.add('baz');

  const setIter = mySet.values();
  console.log(setIter.next().value); // "foo"
  console.log(setIter.next().value); // "bar"
  console.log(setIter.next().value); // "baz"
}

//TODO: WeakSet()
{
  let visitedSet = new WeakSet();

  let john = { name: 'John' };
  let pete = { name: 'Pete' };
  let mary = { name: 'Mary' };

  visitedSet.add(john);
  visitedSet.add(pete);
  visitedSet.add(john);

  console.log(visitedSet.has(john));
  console.log(visitedSet.has(mary));

  john = null;
}
