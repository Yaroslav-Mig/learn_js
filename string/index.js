// ! methods split()
//* The split() method splits a string into an array of substrings.
//* The split() method returns the new array.
//* The split() method does not change the original string.
//* If (" ") is used as separator, the string is split between words.
//* If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire original string.
//* If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
//* if limit is 0, [] is returned.
//* When found, separator is removed from the string, and the substrings are returned in an array.

// ? Syntax
// split();
// split(separator);
// split(separator, limit);

//TODO: Split the words and Split the characters, including spaces:
{
  let text = 'How are you doing today?';
  const arr = text.split(' ');
  const arr2 = text.split('');
  const arr3 = text.split(' ', 0);
  const arr4 = text.split(' ', 2);
  console.log(arr);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  console.log(text.split());
}

//TODO: Copy string
{
  const str = 'The quick brown fox jumps over the lazy dog.';
  strCopy = str.split().join();
  console.log(strCopy);
  console.log(str === strCopy);
}

//TODO: Reverse string
const str = 'Hello';
{
  const reverseStr = str.split('').reverse().join('');
  console.log(reverseStr);
}