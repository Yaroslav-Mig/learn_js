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
  lastWork: 'IT',
};

const countProperties = (obj) => {
  return Object.keys(obj).length;
};

console.log(countProperties(user));

{
  const points = [
    { x: 5, y: 7 },
    { x: -2, y: 9 },
    { x: 0, y: 8 },
    { x: -1, y: -3 },
  ];

  pointsCopy = [...points];

  let i = pointsCopy.length;
  while (i--) {
    if (pointsCopy[i].x < 0 || pointsCopy[i].y < 0) {
      pointsCopy.splice(i, 1);
    }
  }
  console.log(pointsCopy);

	const filteredPoints = points.filter((item) => item.x >= 0 && item.y >= 0);
	console.log(filteredPoints);
}

{
	const listArticles = [
		{ title: "Статья 7", likes: 15 },
		{ title: "Статья 1", likes: 10 },
		{ title: "Статья 5", likes: 3 },
		{ title: "Статья 3", likes: 20 }
	];

	listArticles.sort((a, b) => a.likes > b.likes ? 1 : -1);
	console.log(listArticles);
}