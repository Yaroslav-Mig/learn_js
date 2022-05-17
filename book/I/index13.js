//! Loops for(), while()
//* continues execution of the loop with the next iteration
//* Break out of a loop and transfers program control to the statement following the loop.
//* If the condition is always true, the loop will never end. This will crash your browser.
//* To execute multiple statements within the loop, use a block statement ({ /* ... */ }

//TODO: while()
//? while (condition) {statement}
//* The loop runs while the condition is true. Otherwise it stops.

{
  let i = 0;
  let n = 0;
  while (i < 5) {
    i++;
    if (i === 3) {
      continue;
    }
    n += 1;
  }
}

//TODO: for()
//? for (statement 1; statement 2; statement 3) { code block to be executed }
//* If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser.
//* The for statement defines a code block that is executed as long as a condition is true

{
  const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
  for (let i = 0, len = cars.length, text = ''; i < len; i++) {
    text += cars[i] + ' ';
    console.log(text);
  }

  let text = '';
  for (let i = 0; i < 5; i++) {
    if (i == 3) continue;
    text += i + ' ';
  }
  console.log(text);

  const nodeList = document.getElementsByTagName('p');
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color = 'blue';
  }
}

//TODO: tasks
{
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }

  let j = 0;
  while (j < 3) {
    console.log(j);
    j++;
  }

  function checkIsNumber(value) {
    if (value instanceof Number) {
      value = value.indexOf();
    }
    return !isNaN(value) && Number.isFinite(value);
  }

  let input;
  do {
    input = prompt('Введите число > 100');
    input = parseFloat(input);
  } while (!(checkIsNumber(input) && input > 100));

  function isPrime(value) {
    let array = new Array(value - 1);
    array = array.fill(0).map((el, ind) => (el = ind + 2));

    const primeArr = array.filter((number) => {
      if (number > 5 && (number % 2 === 0 || number % 5 === 0)) {
        return false;
      }
      const sqrtVal = Math.sqrt(number);
      for (let divisor = 2; divisor <= sqrtVal; divisor++) {
        if (number % divisor === 0) return false;
      }
      return value > 1;
    });
    return primeArr;
  }
  console.log(isPrime(10));

  function isPrimeLoop(limitVal) {
		const primeArr = [];
		
    for (let number = 2; number <= limitVal; number++) {
			let flag = true;
			
      for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor) {
          continue;
        } else {
          flag = false;
          break;
        }
			}
			
      if (flag) {
        primeArr.push(number);
      }
		}
    return primeArr;
  }
  console.log(isPrimeLoop(10));
}
