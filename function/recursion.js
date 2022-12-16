const obj = {
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
console.log(getSum(obj));

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
	return flatArr.reverse()
};
console.dir(flattenArr(arr4));
