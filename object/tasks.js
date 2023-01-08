let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(input) {
  sum = 0;
  for (const value of Object.values(input)) {
    sum += value;
  }
  return sum;
}
console.log(sumSalaries(salaries));

const getSalaries = (input) => {
  return Object.values(input).reduce((acc, val) => acc + val, 0);
};
console.log(getSalaries(salaries));

let user = {
  name: 'John',
	age: 30,
	isMarried: false,
	lastWork:'IT'
};

const countProperties = (obj) => {
	return Object.keys(obj).length;
}

console.log(countProperties(user));

