//TODO: Remove duplicate items in an array
{
  function unique(arr) {
    return [...new Set(arr)];
  }
  let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];
  console.log(unique(values));
}

//TODO: Filter anagrams
//* first words
{
  const cleanAnagrams = (arr) => {
    const result = [];
    arr.reduce((acc, cur) => {
      const sumChar = cur
        .toLowerCase()
        .split('')
        .reduce((acc, prev) => acc + prev.charCodeAt(0), 0);

      if (!acc.includes(sumChar)) {
        acc.push(sumChar);
        result.push(cur);
      }
      return acc;
    }, []);
    return result;
  };

  //* last words
  const filterAnagrams = (arr) => {
    const map = new Map();
    for (const value of arr) {
      const key = value
        .toLowerCase()
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
      map.set(key, value);
    }
    console.log(map.values());
    return Array.from(map.values());
  };

  let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
  console.log(cleanAnagrams(arr));
  console.log(filterAnagrams(arr));
}

{
  let map = new Map();
  map.set('name', 'John');
  let keys = Array.from(map.keys());
  keys.push('more');
}

//TODO: Weak store
{
  let messages = [
    { text: 'Hello', from: 'John' },
    { text: 'How goes?', from: 'John' },
    { text: 'See you soon', from: 'Alice' },
  ];
  let storeMessages = new WeakSet();

  const isRead = (input) => {
    if (!storeMessages.has(input)) {
      storeMessages.add(input);
    }
    return storeMessages.has(input);
	};
	console.log(isRead(messages[0]));
}
