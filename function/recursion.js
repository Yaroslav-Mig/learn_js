//TODO: recursive process
const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

//TODO: factorial with loops
{
  const factorial = (n) => {
    let counter = 1;
    let result = 1;

    while (counter <= n) {
      result = result * counter;
      counter++;
    }
    return result;
  };
  console.log(factorial(4));

  const factorialFor = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  };
  console.log(factorialFor(3));
}

//TODO: iterative process
{
  const factorial = (n) => {
    const iterate = (iter, acc) => {
      if (iter === 1) {
        return acc;
      }
      return iterate(iter - 1, iter * acc);
    };

    return iterate(n, 1);
  };

  console.log(factorial(4)); //24
}

const list = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: 4,
  },
  f: {
    g: 5,
    j: 6,
    k: {
      l: 7,
      m: {
        n: 8,
        o: 9,
      },
    },
  },
};

const getSum = (obj) => {
  let sum = 0;
  for (const key in obj) {
    const value = obj[key];
    typeof value === 'object' ? (sum += getSum(value)) : (sum += value);
  }
  return sum;
};
console.log(getSum(list));

const arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

const getFlatArr = (arr) => {
  return arr.reduce((acc, val) => {
    const item = Array.isArray(val) ? getFlatArr(val) : val;
    return acc.concat(item);
  }, []);
};
const str = getFlatArr(arr).join('');
console.log(str);

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const flattenArr = (input) => {
  const stack = [...input];
  const flatArr = [];
  while (stack.length) {
    const next = stack.pop();
    Array.isArray(next) ? stack.push(...next) : flatArr.push(next);
  }
  return flatArr.reverse();
};
console.dir(flattenArr(arr4));
