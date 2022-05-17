// ! methods flat()

//* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//* The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
//* Return value is a new array with the sub-array elements concatenated into it.
//* The flat method removes empty slots in arrays:

// ? Syntax
// flat()
// flat(depth)

//TODO: flat()
{
  const arr1 = [0, 1, 2, [3, 4]];
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  const arr5 = [1, 2, , 4, 5];

  console.log(arr1.flat());
  console.log(arr2.flat(2));
  console.log(arr5.flat());
}

//TODO: reduce and concat
{
  // To flat single level array
  const arr = [1, 2, [3, 4]];
  arr.flat();

  // is equivalent to
  let flattened = arr.reduce((acc, val) => acc.concat(val), []);
  console.log(flattened);

  let flattened2 = [].concat(...arr);
  console.log(flattened2);
}

const arr = [1, 2, [3, 4, [5, 6]]];

//TODO: reduce + concat + isArray + recursivity
{
  function Flatten(arr) {
    return arr.reduce((acc, item) => {
      return acc.concat(Array.isArray(item) ? Flatten(item) : item);
    }, []);
  }
  console.log(Flatten(arr));
}
//TODO: reduce + concat + isArray + recursivity + Infinity
{
  function flatDeep(arr, depth = Infinity) {
    return depth > 0
      ? arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatDeep(item, depth - 1) : item), [])
      : [...arr];
  }
  console.log(flatDeep(arr));
}

//TODO: Use a stack
{
  function Flattened(input) {
    const stack = [...input];
    const flatArr = [];
    while (stack.length) {
      const next = stack.pop();
      Array.isArray(next) ? stack.push(...next) : flatArr.push(next);
    }
    return flatArr.reverse();
  }
  console.log(Flattened(arr));
}

//TODO: Use a map() + isArray() + concat + recursivity
{
  const flatten = (arr) => [].concat(...arr);

  function deepFlatten(arr) {
    return flatten(arr.map((item) => (Array.isArray(item) ? deepFlatten(item) : item)));
  }

  console.log(deepFlatten(arr));
}
