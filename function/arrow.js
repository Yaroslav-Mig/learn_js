//TODO: there is no arguments, only use operator rest
{
  const sum = (...nums) => {
    let result = 0;
    for (let num of nums) {
      result += typeof num === 'number' ? num : 0;
    }
    return result;
  };

  console.log(sum(2, 5, -7, 11));
}

//TODO: don't have their own bindings to this. They take it outside. Don`t work for call, apply and bind
{
	const person = {
		firstName: 'Alex',
		getFirstName: () => {
			return this.firstName;
		},
	};

	const firstName = person.getFirstName();
	console.log(firstName);
}




