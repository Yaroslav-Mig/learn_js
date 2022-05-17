//! Logical operators

//TODO: || (OR)
{
  let age = 12;
  if (age < 14 || age > 90) {
    console.log('true1');
  }

  console.log(1 || 0); // 1
  console.log(true || 'mo matter'); // true
  console.log(null || 1); // 1
  console.log(null || 0 || 1); //1
  console.log(undefined || null || 0); // 0

  let currentUser = null;
  let defaultUser = 'John';
  let nameUser = currentUser || defaultUser || 'unnamed';
  console.log(nameUser); // defaultUser
}

//TODO: && (AND)
{
  console.log(true && true); // true
  console.log(false && true); // false
  console.log(true && false); // false
  console.log(false && false); // false

  console.log(1 && 0); // 0
  console.log(1 && 5); //5
  console.log(null && 5); // null
  console.log(0 && 'no mater'); // 0
  console.log(1 && 2 && null && 3); // null
  console.log(1 && 2 && 3); // 3

  let x = 1;
  x > 0 && console.log('true');
  if (x > 0) {
    console.log('true');
  }
}
//TODO: ! and !!
{
  console.log(!true);
  console.log(!0);
  console.log(!null);
  console.log(!NaN);
  console.log(!!'SoS');
  console.log(!!null);
}

//TODO: Tasks
{
  console.log(null || 2 || undefined); // 2
	// alert(alert(1) || 2 || alert(3));
	// сначала выведет 1, затем 2, т.к. алерт возвращает undefined
  console.log(null || (2 && 3) || 4); // 3

  let age = 34;
  if (age >= 14 && age <= 90) console.log(age);
  if (age < 14 || age > 90) console.log(age);
  if (!(age >= 14 && age <= 90)) console.log(age);

  console.log(1 && null && 2); // null
	// console.log(alert(1) && alert(2));
	// сначала 1, после undefined т.к. alert возвращает undefined

  // if (-1 || 0) alert('first'); 
  // if (-1 && 0) alert('second');
  // if (null || (-1 && 1)) alert('third');

  let log = prompt('Login', '');

  if (log === 'Админ') {
    let pas = prompt('Password', '');

    if (pas === 'Я главный!') {
      console.log('Здравствуйте!');
    } else if (pas === null || pas === '') {
      console.log('Отменено');
    } else {
      console.log('Неверный пароль');
    }
  } else if (log === null || log === '') {
    console.log('Отменено');
  } else {
    console.log('Я вас не знаю');
  }
}
