// ! methods sort()

//* The sort() method sorts the elements of an array
//* The default sort order is ascending. Built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
//* Returns the reference to the same array, now sorted.Note that the array is sorted in place, and no copy is made.
//* If compareFn omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
//* Empty slots are moved to the end of the array.

// ? Syntax
// array.sort()
// array.sort((a, b) => { /* … */ } )
// array.sort(compareFn)
// a - The first element for comparison.
// b - The second element for comparison.
// compareFn - Specifies a function that defines the sort order.

//TODO: sort()
{
  const months = ['March', 'Jan', 'Feb', 'Dec'];
  console.log(months.sort());

  const array1 = [1, 30, 4, 21, 100000];
  console.log(array1.sort());
  console.log([...array1].sort((a, b) => a - b));

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const randomSort = [...array2].sort(() => Math.random() - 0.5);
  console.log(randomSort);

  const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
  ];

  console.log(items.sort((a, b) => b.value - a.value));
  console.log([...items].sort((a, b) => (a.name > b.name ? 1 : -1)));

  let countries = ['Österreich', 'Andorra', 'Vietnam'];
  countries.sort((a, b) => (a > b ? 1 : -1));
  // Andorra, Vietnam, Österreich (wrong)

	countries.sort((a, b) => a.localeCompare(b));
	// Andorra,Österreich,Vietnam
}
