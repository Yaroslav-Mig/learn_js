
//! Reverse string
//TODO: Reverse a string with split(), reverse() and join()
{
	const str = 'Hello';
	{
		const reverseStr = str.split('').reverse().join('');
		console.log(reverseStr);
	}
	//TODO: Reverse a string with a recursion and ternary operator
	{
		const reverseStr = (str) => (!str ? '' : reverseStr(str.slice(1)) + str.charAt(0));
		console.log(reverseStr(str));
	}
	//TODO: Reverse string using loop for
	{
		const reversString = (str) => {
			let newStr = '';
			for (let i = str.length - 1; i >= 0; i--) {
				newStr += str[i];
			}
			return newStr;
		};
		console.log(reversString(str));
	}
}
//! Repeat string
//TODO: to repeat a string with constructor new Array and fill()
{
  const repeatString = (str, times, divider) => Array(times).fill(str).join(divider);
  console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string with constructor new Array, from() and join
{
	const repeatString = (str, times, divider) => Array.from({ length: times }, () => str).join(divider);
	console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string recursion function
{
  const repeatString = (str, times, divider) => {
    if (times < 0) {
      return '';
    } else if (times === 1) {
      return str;
    } else {
      return str + divider + repeatString(str, times - 1, divider);
    }
  };
  console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string with repeat() and slice()
{
	const repeatString = (str, times, divider) => (str + divider).repeat(times).slice(0, -divider.length);
  console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string with loop while() and slice()
{
	const repeatString = (str, times, divider) => {
		let repeatStr = '';
		while (times--) {
			repeatStr += str + divider;
		}
		return repeatStr.slice(0, -divider.length);
	}
  console.log(repeatString('yo', 3, ','));
}