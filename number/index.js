{
  let billion = 1000000000;
  billion = 1e9;

  let number = 1.23e6;
  console.log(number);

  let ms = 0.000001;
  ms = 1e-6;

  console.log(1e-3 === 1 / 1000);
  console.log(1e3 === 1 * 1000);
}
{
  function hexColour(c) {
    if (c < 256) {
      return Math.abs(c).toString(16);
    }
    return 0;
  }
  console.log(hexColour(233));
}
{
  let sum = 0.1 + 0.2;
  console.log(sum === 0.3);
  console.log(Number(sum.toFixed(4)) === 0.3);
}
