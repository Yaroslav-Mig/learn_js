//! Loops switch()
//* The switch statement executes a block of code depending on different cases.
//* An expression whose result is matched against each case clause (using the strict comparison, ===). The values must be of the same type to match.
//* The break keyword breaks out of the switch block.If break is omitted, the next code block in the switch statement is executed.
//* The default keyword specifies some code to run if there is no case match
//* If multiple cases matches a case value, the first case is selected.
//* If no default label is found, the program continues to the statement(s) after the switch.

//TODO: switch()
//? switch(expression) {
//?   case n:
//?     code block
//?     break;
//?   case n:
//?     code block
//?     break;
//?   default:
//?     default code block;
//? }

let foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
  // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

{
  document.getElementById('btn-1').onclick = function () {
    let text;
    const fruits = document.getElementById('myInput').value.toLowerCase();

    switch (fruits) {
      case 'banana':
        text = 'Banana is good!';
        break;
      case 'orange':
        text = 'I am not a fan of orange.';
        break;
      case 'apple':
        text = 'How you like them apples?';
        break;
      default:
        text = 'I have never heard of that fruit...';
    }

    document.getElementById('demo').innerHTML = text;
  };
}

{
  let text = null;
  switch (new Date().getDay()) {
    case 6:
      text = 'Today is saturday';
      break;
    case 0:
      text = 'Today is sunday';
      break;
    default:
      text = 'Looking forward to the Weekend';
  }
  console.log(text);
}
{
  let Animal = 'Giraffe';
  switch (Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
      console.log('This animal is not extinct.');
      break;
    case 'Dinosaur':
    default:
      console.log('This animal is extinct.');
  }
}

//TODO: switch() task
{
  const number = +prompt('Введите число между 0 и 3', '');

  switch (number) {
    case 0:
      console.log('Вы ввели число 0');
      break;
    case 1:
      console.log('Вы ввели число 1');
      break;
    case 2:
		case 3:
			console.log('Вы ввели число 2, а может и 3');
			break;
  }
}
