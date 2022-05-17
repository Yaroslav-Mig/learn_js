// ! methods spread

//TODO: merge with spread
const a = [3, 4, 5];
const b = [1, 2, 3];
{
  const c = [...b, ...a];
  console.log(c);
}

//TODO: clone with spread
{
  const d = [...b];
  console.log(d);
  console.log(d === b);
}

//TODO: string into array
{
  const e = [...'hello'];
  console.log(e);
}
//TODO: set into array, remove duplicates in set
{
  const f = [...new Set([1, 1, 2, 2, 3, 4, 2])];
  console.log(f);
}

//TODO: arguments, nodeList into array with spread
{
  function test(...arg) {
    console.log(arg);
  }
  test(1, 2, 3, 4);
  let p = document.querySelectorAll('p');
  console.log(p);
  p = [...p];
  let text = p.map((el) => el.textContent);
  console.log(p);
  console.log(text);
}
//TODO: merge object with spread
{
  const b1 = { name: 'Ivan', id1: 15 };
  const b2 = { name: 'Igor', id2: 33 };
  const mergedObj = { ...b1 };
  const mergedObj2 = { ...b1, ...b2 };
  const b3 = { ...b1, bike: true };

  console.log(mergedObj);
  console.log(mergedObj === b1);
  console.log(mergedObj2);
}
//TODO: practice
{
  const numbers = [5, 27, 42, 17];
  const max = Math.max(...numbers);
  console.log(max);
}
// ! methods rest
//TODO: rest in func
{
  function f(a, ...b) {
    console.log(a);
    console.log(b);
  }
  f(1, 4, 5, 6);
}
//TODO: rest vs arguments
{
  function f(a) {
    console.log(a);
    console.log(arguments);
  }
  f(100, 4, 5, 6);

  function fn() {
    const showArg = () => console.log(arguments[0]);
    showArg('hi');
    console.log([...arguments]);
    console.log(Array.from(arguments));
  }
  fn('hello');
}
//! Destructuring assignment
//TODO: rest with arr
{
  let [val, ...arr] = [1, 2, 3, 4];
  let [val1, val2] = [1, 2, 3, 4];
  let [firstName, surname] = [];
  console.log(val);
  console.log(arr);
  console.log(firstName, surname); //undefined

  let animalInnerArr = ['cat', 'dog', ['bird', 'wolf']];
  let [c1, c2, [d1, d2]] = animalInnerArr;
}
//TODO: parameters of functions, change var
{
  function sum([a, b]) {
    console.log(a, b);
  }
  sum([12, 13]);

  function getData() {
    return [12, 1, 13];
  }
  let [c, d, e] = getData();
  let ko = 'ko';
  let so = 'so';
  [ko, so] = [so, ko];
}
//TODO: rest with string
{
  let [str1, , str2] = 'intel pentium inside'.split(' ');
  console.log(str1);
  console.log(str2);
}
//TODO: rest with Set
{
  let [, el, el2] = new Set('hello');
  // let [one, two, three] = new Set(4, 2, 3);
  console.log(el);
  console.log(el2);
}
//TODO: rest values in default
{
  let [val = 1, val2 = 'hi'] = [100];
  console.log(val);
  console.log(val2);

  let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius'];
  console.log(name, surname);

  let options = {
    title: 'Menu',
  };
  let { width: w = prompt('width?'), title: t = prompt('title?') } = options;
  console.log(w, t);
}
//TODO: object
{
  const obj = {
    fname: 'alex',
    passport: true,
    age: 47,
  };
  const { age, passport: pas, fname, sex: s = 'man' } = obj;
  console.log(age, pas, fname, s);
  {
    const person = {
      name: 'Max',
      age: 20,
      address: {
        country: 'Germany',
        city: 'Berlin',
      },
    };
    const {
      name: fName = 'No name',
      age = 18,
      car = 'Nо car',
      address: { city: town, country },
    } = person;
    console.log(fName, age, town, country, car);

    const { name, ...info } = person;
    console.log(name, info);
  }
}
//TODO: smart parameters for function
{
  const person = {
    name: 'Max',
    age: 20,
    address: {
      country: 'Germany',
      city: 'Berlin',
    },
  };
  function logPerson(per) {
    console.log(per.name + ' ' + per.age);
  }
  logPerson(person);

  function logPerson2({ name, age }) {
    console.log(name + ' ' + age);
  }
  logPerson(person);

  let options = {
    title: 'My menu',
    items: ['Item1', 'Item2'],
  };
  function showMenu({ title = 'Untitled', width: w = 100, height: h = 200, items: [item1, item2] } = {}) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
  }
  showMenu(options);

  //*  такое деструктурирование подразумевает, что в showMenu() будет обязательно передан аргумент => showMenu() нет аргументов, ошибка
  //* Если нам нужны все значения по умолчанию, то нам следует передать пустой объект в вызов функции showMenu({})
  //* или сделать по умолчанию пустой объект для всего объекта параметров

  const student = {
    name: 'John Doe',
    age: 16,
    scores: { 
      maths: 74,
      english: 63,
      science: 85,
    },
  };
  function displaySummary({ name, scores: { maths: m = 0, english: e = 0, science: s = 0 } = {} } = {}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + m);
    console.log('Your English score is ' + e);
    console.log('Your Science score is ' + s);
  }
  displaySummary(student);
  displaySummary();
}

//TODO: Destructuring assignment for object and loops
{
  const user = {
    name: 'John',
    age: 30,
  };
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
  }

  let user2 = new Map();
  user2.set('name', 'Don');
  user2.set('age', '33');
  for (const [key, value] of user2) {
    console.log(`${key} : ${value}`);
  }
}

//TODO: immutable object with spread
{
  const criteria = {
    status: 'visitor',
    age: '18+',
  };
  const user = 'John';
  const ticket = 'Boston science';
  const visitor = { ...criteria, user, ticket };
  console.log(visitor);
}

//TODO:Delete field in a obj with Destructuring assignment and rest
{
  const person = {
    name: 'Marcus',
    city: 'Rome',
    born: 12,
  };

  function deleteField(source, obj) {
    const { [source]: forgot, ...other } = obj;
    return other;
  }
  console.log(deleteField('name', person));
}

