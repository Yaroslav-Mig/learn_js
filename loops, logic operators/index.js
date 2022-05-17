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

  let login = prompt('Кто там', '');

  if (login && login.toLocaleLowerCase() === 'админ') {
    let password = prompt('Пароль?', '');

    if (password === 'Я главный') {
      console.log('Здравствуйте');
    } else if (password === null) {
      console.log('Отменено');
    } else {
      console.log('Неверный пароль');
    }
  } else if (login === null || login === '') {
    console.log('Отменено');
  } else {
    console.log('Я вас не знаю');
  }
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
  alert(alert(1) || 2 || alert(3)); // сначала выведет 1, затем 2, т.к. алерт возвращает undefined
  console.log(null || (2 && 3) || 4); // 3

  let age = 34;
  if (age >= 14 && age <= 90) console.log(age);
  if (age < 14 || age > 90) console.log(age);
  if (!(age >= 14 && age <= 90)) console.log(age);

  console.log(1 && null && 2); // null
  console.log(alert(1) && alert(2)); // сначала 1, после undefined т.к. alert возвращает undefined

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

//TODO: nullish coalescing operator (??)
{
  let a;
  let b;
  let result = a ?? b;
  console.log(result);
  result = a !== null && a !== undefined ? a : b;
  console.log(result);

  const nullValue = null;
  const emptyText = ''; // falsy
  const someNumber = 42;
  const valA = nullValue ?? 'default for A';
  const valB = emptyText ?? 'default for B';
  const valC = someNumber ?? 0;
  console.log(valA); // "default for A"
  console.log(valB); // "" (as the empty string is not null or undefined)
  console.log(valC); // 42

  let user;
  console.log(user ?? 'User');

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
}
