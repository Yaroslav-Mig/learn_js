// ! Type Conversions Number, String and Boolean

//TODO: String
{
  //? toString(), toString(radix)
  //* radix Optional - An integer in the range 2 through 36 specifying the base to use for representing numeric values.
  //* If toString() is given a radix less than 2 or greater than 36, a RangeError is thrown.
  //* The toString() method returns a number as a string.

  let x = 123;
  x = x.toString();
  console.log(x, typeof x);

  let y = true;
  y = String(y);
  console.log(y, typeof y);

  let z = 1;
  z = z + '';
  console.log(z, typeof z);

  //? toPrecision(), toPrecision(precision) - returns a string, with a number written with a specified length:
  //* If the precision argument is omitted, behaves as Number.prototype.toString().
  //* If the precision argument is a non-integer value, it is rounded to the nearest integer
  //* If precision is not between 1 and 100 (inclusive), a RangeError is thrown

  let i = 9.656;
  console.log(i.toPrecision());
  console.log(i.toPrecision(2));
  console.log(i.toPrecision(4));
  console.log(i.toPrecision(6));

  let numObj = 0.000123;
  console.log(numObj.toPrecision(1)); // logs '0.000123'
  console.log(numObj.toPrecision(5)); // logs '0.00012300'
  console.log(numObj.toPrecision(2)); // logs '0.00012'
  console.log(numObj.toPrecision(1)); // logs '0.0001'
  console.log('--------');

  //?toFixed(), toFixed(digits) - Return value a string
  // digits _Optional_ - The number of digits to appear after the decimal point; this may be a value between 0 and 20. If this argument is omitted, it is treated as 0.
  let n = 9.6567;
  console.log(n.toFixed(0));
  console.log(n.toFixed(2));
  console.log(n.toFixed(4));
  console.log(n.toFixed(6));
  console.log(Number((0.1 + 0.2).toFixed(1)) === 0.3);

  //* toFixed(2) is perfect for working with money.
  const financial = (value) => Number.parseFloat(value).toFixed(2);
  console.log(financial(123.456));
  console.log(financial(0.004));
  console.log(financial('1.23e+5'));
  console.log('--------');

  //? toExponential() returns a string, with a number rounded and written using exponential notation.
  //* toExponential(), toExponential(fractionDigits)
  //* fractionDigits - Optional. An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.
  //* Values between 0 and 100, inclusive, will not cause a RangeError.
  //* TypeError - If this method is invoked on an object that is not a Number.

  let f = 9.656;
  console.log(f.toExponential(2));
  console.log(f.toExponential(4));
  console.log(f.toExponential(6));

  let numObj2 = 77.1234;
  console.log(numObj2.toExponential()); // logs 7.71234e+1
  console.log(numObj2.toExponential(4)); // logs 7.7123e+1
  console.log(numObj2.toExponential(2)); // logs 7.71e+1
  console.log((77.1234).toExponential()); // logs 7.71234e+1
  console.log((77).toExponential()); // logs 7.7e+1
  console.log(parseFloat('7.71234e+1'));
  console.log('--------');
}

// TODO: Numbers methods
{
  //* Численное преобразование происходит в математических функциях и выражениях.
  let a = '6' / '2';
  console.log(a, typeof a);

  let str = '123';
  console.log(typeof str);
  let number = Number(str);
  console.log(number, typeof number);

  //* если формат значений не соответ-т целому или дробному числу, то возвращается константа NaN
  //* Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
  //* Number() can also convert a date to a number.It returns the number of milliseconds since 1.1.1970.
  //* parseInt() если встречает недпустимый символ (не минус, не цифру), то преобразвание в число останавливается. Возвращает NaN если значение не может быть преобразовано

  console.log(Number('-3.8'));
  console.log(Number('5'));
  console.log(Number('08'));
  console.log(Number('11  '));
  console.log(Number('  12  '));
  console.log(Number('10ru'));
  console.log(Number('10,33'));
  console.log(Number('10 33'));
  console.log(Number('string'));
  console.log(Number(undefined)); // NaN
  console.log(Number(null)); // 0
  console.log(Number(true)); // 1
  console.log(Number(false)); // 0
  console.log(Number(new Date('1970-01-02'))); // since 1970-01-01 in the milliseconds
  console.log('--------');

  //? parseInt(string, radix)
  //* radix_ Optional_ - An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string
  console.log(parseInt('-5'));
  console.log(parseInt('-7.7'));
  console.log(parseInt('2m70cm'));
  console.log(parseInt('A2'));
  console.log(parseInt(' '));
  console.log(parseInt(new Date('1970-01-02')));
  console.log(parseInt('0xF', 16));
  console.log(parseInt('1111', 2));
  console.log(parseInt('15px', 10));
  console.log(parseInt('Hello', 8));
  console.log(parseInt('546', 2));
  console.log('--------');

  //?parseFloat(string)
  console.log(parseFloat('10'));
  console.log(parseFloat('10.33'));
  console.log(parseFloat('10 years'));
  console.log(parseFloat('F10'));
  console.log(parseFloat('  3.14  '));
  console.log(parseFloat('314e-2'));
  console.log(parseFloat('0.0314E+2'));
  console.log(parseFloat(900719925474099267n));
  console.log(parseFloat('900719925474099267n'));
  console.log('--------');

  //? valueOf() returns the wrapped primitive value of a Number object.
  //* In JS, a number can be a primitive value (typeof = number) or an object (typeof = object).
  //* All JavaScript data types have a valueOf() and a toString() method.

  const numObj = new Number(42);
  console.log(typeof numObj);
  const num = numObj.valueOf();
  console.log(num, typeof num);
  console.log('--------');
}

// TODO: Number Properties
//* MAX_VALUE returns the largest possible number in JavaScript.
//* MIN_VALUE returns the lowest possible number in JavaScript.
//* Represents infinity (returned on overflow)
//* Represents negative infinity (returned on overflow)
//* NaN - Represents a "Not-a-Number" value
{
  let x = Number.MAX_VALUE;
  console.log(x);

  let y = Number.MIN_VALUE;
  console.log(y);

  let i = Number.POSITIVE_INFINITY;
  let j = Number.NEGATIVE_INFINITY;
  console.log(i);
  console.log(j);
  console.log(-1 / 0);

  let z = 100 / 'Apple';
  console.log(z);
  let n = Number.NaN;
  console.log(n);
  console.log('--------');
}

//TODO: Number.isNaN() and isNaN()
{
  console.log(parseInt('bala')); // Number cannot be parsed
  console.log(Number(undefined)); // Number cannot be parsed
  console.log(Math.sqrt(-2)); // Math operation where the result is not a real number
  console.log(0 / 0); // Math operation where the result is not a real number
  console.log(7 * NaN); // Operand of an argument is NaN
  console.log(undefined + undefined); // Indeterminate form
  console.log(0 * Infinity); //Indeterminate form
  console.log('foo' / 3); // Any operation that involves a string and is not an addition operation
  console.log(NaN === NaN); // false
  console.log('--------');

  //* Additionally, some array methods cannot find NaN, while others can.
  let arr = [2, 4, NaN, 12];
  arr.indexOf(NaN); // -1 (false)
  arr.includes(NaN); // true
  arr.findIndex((n) => Number.isNaN(n)); // 2

  //? Number.isNaN() - method determines whether the passed value is NaN and its type is Number
  //* Number.isNaN(value). The value to be tested for NaN.
  //* Number.isNaN() returns true if a number is Not-a-Number, and the type is a Number
  console.log(Number.isNaN(123)); // false
  console.log(Number.isNaN('123')); // false
  console.log(Number.isNaN(-1.23)); // false
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN(0 / 0)); // true
  console.log(Number.isNaN(5 - 2)); // false
  console.log(Number.isNaN(0)); // false
  console.log(Number.isNaN('hello world')); // false
  console.log(Number.isNaN('2005/12/12')); // false
  console.log(Number.isNaN(' ')); // false
  console.log(Number.isNaN(false)); // false
  console.log(Number.isNaN(true)); // false
  console.log(Number.isNaN(undefined)); // false
  console.log(Number.isNaN(null)); // false
  console.log(Number.isNaN('NaN')); // false
  console.log(Number.isNaN({})); // false
  console.log(Number.isNaN(1n)); // false
  console.log('--------');

  //* polyfill Number.isNaN
  Number.isNaN =
    Number.isNaN ||
    function isNaN(input) {
      return typeof input === 'number' && input !== input;
    };
  console.log('--------');
  //? isNaN() - method returns true if a value is currently NaN, or it is going to be NaN after it is coerced to a number with function Number()
  //* isNaN(value) - The value to be tested.
  //* isNaN() converts the value to a number before testing it.

  console.log(isNaN(123)); // false
  console.log(isNaN('123')); // false
  console.log(isNaN(-1.23)); // false
  console.log(isNaN(NaN)); // true
  console.log(isNaN(0 / 0)); // true
  console.log(isNaN(5 - 2)); // false
  console.log(isNaN(0)); // false
  console.log(isNaN('hello world')); // true
  console.log(isNaN('2005/12/12')); // true
  console.log(isNaN(' ')); // false
  console.log(isNaN(false)); // false
  console.log(isNaN(true)); // false
  console.log(isNaN(undefined)); // true
  console.log(isNaN(null)); // false
  console.log(isNaN('NaN')); // true
  console.log(isNaN({})); // true
  console.log(isNaN(new Date())); // false
  console.log(isNaN(new Date().toString())); // true
  console.log(isNaN(Infinity)); // true
  // console.log(isNaN(1n)); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.

  //* polyfill isNaN
  function isNaN(input) {
    const n = Number(input);
    return n !== n;
  }
  console.log('--------');
}

//TODO: isFinite() and Number.isFinite()
{
  //? isFinite() - method returns true if a value is a finite number or it is going to be number after it is coerced to a number with function Number().
  //* isFinite() returns true if a value is a finite number. false if the value is Infinity, -Infinity, undefined or NaN
  //* Number.isFinite() returns true if a number is a finite number.
  //* isFinite() converts the value to a number before testing it.
  //* Infinite (not finite) values are Infinity, -Infinity, or NaN

  console.log(isFinite(123));
  console.log(isFinite('123'));
  console.log(isFinite(-1.23));
  console.log(isFinite(0));
  console.log(isFinite('2005/12/12'));
  console.log(isFinite(' '));
  console.log(isFinite(new Date()));
  console.log(isFinite(new Date().toString()));
  console.log(isFinite(false));
  console.log(isFinite(true));
  console.log(isFinite(null));
  console.log(isFinite(undefined));
  console.log(isFinite(Infinity));
  console.log(isFinite(-Infinity));
  console.log(isFinite(NaN));
  console.log('--------');

  console.log(Number.isFinite(123));
  console.log(Number.isFinite('123'));
  console.log(Number.isFinite(-1.23));
  console.log(Number.isFinite(0));
  console.log(Number.isFinite('2005/12/12'));
  console.log(Number.isFinite(' '));
  console.log(Number.isFinite(new Date()));
  console.log(Number.isFinite(new Date().toString()));
  console.log(Number.isFinite(false));
  console.log(Number.isFinite(true));
  console.log(Number.isFinite(null));
  console.log(Number.isFinite(undefined));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite(-Infinity));
  console.log(Number.isFinite(NaN));
  console.log('--------');
}

//! The only difference is this:
!isNaN(1/0) // --> true
isFinite(1/0) // --> false

{
  function checkIsNumber(value) {
    if (value instanceof Number) {
      value = value.valueOf();
    }
    return !isNaN(value) && Number.isFinite(value);
  }
  console.log(checkIsNumber(1));
  console.log(checkIsNumber('1'));
  console.log(checkIsNumber(' '));
  console.log(checkIsNumber('10ru'));
  console.log(checkIsNumber(2.3));
  console.log(checkIsNumber(0 / 0));
  console.log(checkIsNumber({}));
  console.log(checkIsNumber(new Number(2)));
  console.log(checkIsNumber(new Number('2')));
  console.log(checkIsNumber(new Number('2er')));
  console.log(checkIsNumber(false));
  console.log(checkIsNumber(true));
  console.log(checkIsNumber(undefined));
  console.log(checkIsNumber(null));
  console.log(checkIsNumber(NaN));
  console.log(checkIsNumber(Infinity));
  console.log(checkIsNumber(-Infinity));
  console.log('--------');
}

//TODO: Boolean
{
  console.log(Boolean(0));
  console.log(Boolean(''));
  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));
	console.log(Boolean(Infinity));
	console.log(Boolean(-Infinity));
	console.log(Boolean('  '));
	console.log(!!2);
	console.log(!!'foo');
	console.log(!!{});
	console.log(!![]);
}
