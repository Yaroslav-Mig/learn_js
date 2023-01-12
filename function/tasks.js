{
  const pow = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  };
  console.log(pow(2, 3));
  console.log(pow(3, 4));
  console.log(pow(5, 3));
}
console.log('--------');
{
  const pow = (x, n) => {
    return n === 1 ? x : x * pow(x, n - 1);
  };
  console.log(pow(2, 3));
  console.log(pow(3, 4));
  console.log(pow(5, 3));
}

console.log('--------');
{
  const pow = (x, n) => {
    const iterate = (acc, iter) => {
      if (iter === 1) {
        return acc;
      }
      return iterate(acc * x, iter - 1);
    };

    return iterate(x, n);
  };
  console.log(pow(2, 3));
  console.log(pow(3, 4));
  console.log(pow(5, 3));
}

{
  let company = {
    sales: [
      { name: 'John', salary: 1000 },
      { name: 'Alice', salary: 600 },
    ],
    development: {
      sites: [
        { name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 },
      ],
      internals: [{ name: 'Jack', salary: 1300 }],
    },
  };

  const sumSalaries = (input) => {
    return Object.values(input).reduce((sum, depart) => {
      const salary = Array.isArray(depart)
        ? depart.reduce((acc, person) => acc + person.salary, 0)
        : sumSalaries(depart);
      return (sum += salary);
    }, 0);
  };
  console.log(sumSalaries(company));
}

{
  const sumToWithLoop = (n) => {
    let iter = n;
    let sum = 0;
    while (iter--) {
      sum += n;
      n--;
    }
    return sum;
  };
  console.log(sumToWithLoop(100));

  const sumToWithRecursion = (n) => {
    const iterate = (sum, iter) => {
      if (iter === 0) {
        return sum;
      }
      return iterate(sum + iter, iter - 1);
    };
    return iterate(n, n - 1);
  };
  console.log(sumToWithRecursion(100));

  const sumTo = (n) => {
    return ((n + 1) / 2) * n;
  };
  console.log(sumTo(100));
}

{
  function fib(n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }
  console.log(fib(3));
  console.log(fib(7));

  function fibFor(n) {
    let current = 1;
    let prev = 0;
    for (let i = 1; i < n; i++) {
      const temp = current;
      current = current + prev;
      prev = temp;
    }
    return current;
  }
  console.log(fibFor(3));
  console.log(fibFor(7));
}

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function isObject(input) {
  return input !== null && typeof input === 'object';
}
{
  function printList(obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        if (key === 'value') {
          console.log(obj[key]);
        }
        if (isObject(obj[key])) {
          printList(obj[key]);
        }
      }
    }
  }
  printList(list);

  console.log('-------');

  function printListLoop(obj) {
    let prop = obj;
    while (isObject(prop)) {
      console.log(prop.value);
      prop = prop.next;
    }
  }
  printListLoop(list);
}
console.log('-------');

//TODO: show reverse linked list values
{
  function printListReverse(obj) {
    if (isObject(obj.next)) {
      printListReverse(obj.next);
    }
    console.log(obj.value);
  }
  printListReverse(list);

  console.log('-------');

  function printListLoopReverse(obj) {
    let prop = obj;
		const arr = [];

    while (isObject(prop)) {
      arr.push(prop.value);
      prop = prop.next;
		}

    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  printListLoopReverse(list);
}
