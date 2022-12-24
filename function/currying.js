//TODO: polyfill for curring()
{
  const sum = (a, b, c) => a + b + c;

  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }
      return function (...newArgs) {
        return curried.apply(this, args.concat(newArgs));
      };
			//! return curried.bind(this, ...args);
    };
  }

  const curriedSum = curry(sum);
  console.log(curriedSum(2, 2, 3));
  console.log(curriedSum(2, 2)(3));
  console.log(curriedSum(2)(2)(3));
  console.log(curriedSum(2)(2, 3));
  console.log(curriedSum()(2)(2)(3));
}

//TODO: curring()
{
  const getVolume = (w, l, h) => w * l * h;

  const getVolumeWidth = getVolume.bind(null, 10);
  const getVolumeWidthLength = getVolumeWidth.bind(null, 20);

  const volume_1 = getVolumeWidthLength(5);
  const volume_2 = getVolumeWidthLength(7);
  const volume_3 = getVolumeWidthLength(15);

  console.dir(getVolumeWidth);
  console.dir(getVolumeWidthLength);

  console.group('results');
  console.log(volume_1);
  console.log(volume_2);
  console.log(volume_3);
  console.groupEnd();
}
{
  const getVolume = (w) => (l) => (h) => w * l * h;
  const getVolumeWidth = getVolume(10);
  const getVolumeWidthLength = getVolumeWidth(20);

  console.dir(getVolumeWidth);
  console.dir(getVolumeWidthLength);
}
