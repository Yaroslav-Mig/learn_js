
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