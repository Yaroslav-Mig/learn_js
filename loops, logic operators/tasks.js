//! Check type of triangle
//* Функция должна возвращать:
//*  - "10", equilateral,
//*  - "01", isosceles,
//*  - "11", simple triangle,
//*  - "00", doesn`t exist.
//TODO: Conditional branching and Logical operators
{
  function getTriangleType(a, b, c) {
    if (c > a + b || a > b + c || b > a + c) {
      return '00';
    } else if (a === b && b === c) {
      return '10';
    } else if (a === b || a === c || b === c) {
      return '01';
    } else {
      return '11';
    }
  }
}
