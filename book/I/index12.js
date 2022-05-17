//! Logical operators

//TODO: nullish coalescing operator (??)
{
  let a, b;
  let result = a ?? b;
  console.log(result);

  let user = 'Iva';
  console.log(user ?? 'No name');

  let firstName = null;
  let lastName = null;
  let nickName = 'Суперкодер';

  console.log(firstName ?? lastName ?? nickName ?? 'Аноним');
  console.log(firstName || lastName || nickName || 'Аноним');

  let height = 0;
  console.log(height || 100);
  console.log(height ?? 100);

  let height1 = null;
  let width1 = null;

	let area = (height1 ?? 100) * (width1 ?? 50);
	console.log(area);

	// let x = 1 && 2 ?? 3;
	// Syntax error - нужны скобки для оператора ??
}

//TODO: Polyfill operator '??'
{
  let a, b;
  let result = a !== null && a !== undefined ? a : b;
  console.log(result);
}
