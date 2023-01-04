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

//! Repeat string
//TODO: to repeat a string with constructor new Array and fill()
{
  const repeatString = (str, times, divider) => Array(times).fill(str).join(divider);
  console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string with constructor new Array, from() and join
{
  const repeatString = (str, times, divider) =>
    Array.from({ length: times }, () => str).join(divider);
  console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string recursion function
{
  const repeatString = (str, times, divider) => {
    if (times < 0) {
      return '';
    } else if (times === 1) {
      return str;
    } else {
      return str + divider + repeatString(str, times - 1, divider);
    }
  };
  console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string with repeat() and slice()
{
  const repeatString = (str, times, divider) =>
    (str + divider).repeat(times).slice(0, -divider.length);
  console.log(repeatString('yo', 3, ','));
}
//TODO: to repeat a string with loop while() and slice()
{
  const repeatString = (str, times, divider) => {
    let repeatStr = '';
    while (times--) {
      repeatStr += str + divider;
    }
    return repeatStr.slice(0, -divider.length);
  };
  console.log(repeatString('yo', 3, ','));
}

//! Cut string
//TODO: to cut a string with slice()
{
  const truncateString = (str, endIndex) => `${str.slice(0, endIndex)}...`;
  console.log(truncateString('Всем студентам университета желаю удачи!', 10));
}

//! Short word in the string
//TODO: to cut a string with split() and loop
{
  const getMinLengthWord = (str) => {
    if (!str) {
      return null;
    } else {
      const arr = str.split(' ');
      let min = Infinity;
      let ind = arr.length;
      let result = null;
      while (ind--) {
        if (arr[ind].length < min) {
          min = arr[ind].length;
          result = arr[ind];
        }
      }
      return result;
    }
  };
  console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи!'));
  console.log(getMinLengthWord(''));
}
//TODO: to cut a string with slit() and reduce()
{
  const getMinLengthWord = (str) => {
    if (!str) {
      return null;
    }
    return str.split(' ').reduce((prev, cur) => (cur.length < prev.length ? (prev = cur) : prev));
  };
  console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи!'));
  console.log(getMinLengthWord(''));
}

//! Includes symbols in the string
//TODO: to cut a string with slit() and reduce()
{
  const isIncludes = (str, subStr) => {
    subStr = subStr.toLowerCase();
    str = str.toLowerCase();
    let flag = true;
    for (const iterator of subStr) {
      if (str.includes(iterator)) {
        continue;
      } else {
        return false;
      }
    }
    return flag;
  };
  console.log(isIncludes('Incubator', 'Cut'));
  console.log(isIncludes('Incubator', 'table'));
}
{
  const checkSpam = (str, ...spamWords) => {
    const lowerStr = str.toLowerCase();
    return spamWords.reduce((flag, spam) => {
      if (lowerStr.includes(spam.toLowerCase())) {
        flag = true;
      }
      return flag;
    }, false);
  };
  console.log(checkSpam('buy ViAgRA now', 'viagra', 'XXX'));
  console.log(checkSpam('free xxxxx', 'viagra', 'XXX'));
  console.log(checkSpam('innocent rabbit', 'viagra', 'XXX'));
}

//! Upper case first letter in the word of the string
//TODO: to cut a string with split(), loop ,toUpperCase, charAt() and slice()
{
  const setUpperCase = (str) => {
    let arr = str.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
  };
  console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!'));
}

//! truncation string
{
  const truncate = (str, max, end) => {
    if (str.length <= max) {
      return str;
    }
    const cutStr = str.slice(0, max + 1);
    return cutStr.slice(0, -3) + end;
  };

  console.log(truncate('Всем привет!', 20, '...'));
  console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20, '...'));
}
