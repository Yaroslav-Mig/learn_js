//* The Map object holds key-value pairs and remembers the original insertion order of the keys.
//* Any value (both objects and primitive values) may be used as either a key or a value
//* Every map.set() call returns the map itself,
//* A key in the Map may only occur once

//TODO: Map
{
  let map = new Map();

  map.set('1', 'str1');
  map.set(1, 'num1');
  map.set(true, 'boolean');

  map.set('1', 'str2').set(1, 'num2').set(true, 'boolean2');

  map.get(1);
  map.get('1');

  console.dir(map);
  console.log(typeof map);
  console.log(map.toString());
  console.log('-----------');

  const contacts = new Map();
  contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
  contacts.has('Jessie'); // true
  contacts.get('Hilary'); // undefined
  contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });
  contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
  contacts.delete('Raymond'); // false
  contacts.delete('Jessie'); // true
  console.log(contacts.size); // 1
  console.log(contacts);
  console.log('-----------');
}
//*  it converts all Object keys, such as john and ben bellow, to same string "[object Object]"
{
  let john = { name: 'John' };
  let ben = { name: 'Ben' };
  const visitCount = new Map();

  let visitsCountObj = {};
  visitsCountObj[john] = 123;
  visitsCountObj[ben] = 234;

  visitCount.set(john, 101);
  console.dir(visitCount);
  console.dir(visitsCountObj);
}

//TODO: Iteration over Map
//* For looping over a map, there are 3 methods: keys(), values() and entries()
//* methods returns a new iterator object
//* Map has a built-in forEach method, similar to Array
//* A Map object is iterated by key-value pairs — a for...of
//* loop returns a 2 - member array of[key, value] for each iteration like entries()
{
  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
  ]);

  console.dir(recipeMap);
  console.log(recipeMap.keys());
  console.log(recipeMap.values());
  console.log(recipeMap.entries());

  //! iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
  }
  //! iterate over values (amount)
  for (let amount of recipeMap.values()) {
    console.log(amount);
  }
  //! iterate over [key, value] entries
  // the same as of recipeMap.entries()
  for (let entry of recipeMap) {
    console.log(entry);
  }
  for (let [key, value] of recipeMap) {
    console.log(key, value);
  }

  const myMap = new Map();
  myMap.set('0', 'foo');
  myMap.set(1, 'bar');
  myMap.set({}, 'baz');

  const mapIter = myMap.values();
  console.log(mapIter.next());
  console.log(mapIter.next());
  console.log(mapIter.next());
  console.log(mapIter.next());
}

//TODO: Object.fromEntries() and Object.fromEntries()
{
  let obj = {
    name: 'John',
    age: 30,
  };

  const map = new Map(Object.entries(obj));
  console.log(map.get('name'));

  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4],
  ]);
  console.log(prices);

  const product = new Map();
  product.set('banana', 1);
  product.set('orange', 2);
  product.set('meat', 4);
  console.log(product);

  const obj2 = Object.fromEntries(product);
  console.log(obj2);
}

//TODO: WeakMap()
{
  let john = { name: 'John' };
  let weakMap = new WeakMap();

  weakMap.set(john, '...');
  console.log(weakMap.has(john));
  john = null;
  console.log(weakMap.has(john));

  let visitCount = new WeakMap();

  function countUser() {
    let count = visitCount.get(user) || 0;
    visitCount.set(user, count + 1);
  }

	let cache = new WeakMap();
	let obj1 = {}

  function process(obj) {
    if (!cache.has(obj)) {
      let value = obj;
      cache.set(obj, value);
    }

    return cache.get(obj);
  }

  let result1 = process(obj1);
  let result2 = process(obj1);
  obj1 = null;
}
