//TODO: Decorator
{
  function slow(x) {
    console.log(x);
    return x;
  }

  let worker = {
    someMethod() {
      return 2;
    },
    slow(x) {
      console.log('Called with ' + x);
      return x * this.someMethod();
    },
  };

  function cacheDecorator(fn) {
    const cache = new Map();

    return function (param) {
      if (cache.has(param)) {
        return cache.get(param);
      }
      console.log(cache);
      let result = fn.call(this, param);
      cache.set(param, result);
      return result;
    };
  }

  const slowFn = cacheDecorator(slow);
  slowFn(1);
  slowFn(1);

  worker.slow = cacheDecorator(worker.slow);
  console.log(worker.slow(2));
}

//TODO: forwarding
{
  let worker = {
    multiplyX2(num) {
      return num;
    },

    slow(min, max, mul) {
      console.log(`Called with ${min},${max},${mul}`);
      return (min + max) * this.multiplyX2(mul);
    },
  };

	const hash = (args) => args.join();

	let wrapperFn = function (fn) {
		return fn.apply(this, arguments);
	}

  function cacheDecorator(actionFn, hashFn) {
    const cache = new Map();

    return function (...args) {
      let key = hashFn(args);

      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = actionFn.call(this, ...args);
      cache.set(key, result);
      return result;
    };
  }

  worker.slow = cacheDecorator(worker.slow, hash);
  console.log(worker.slow(1, 2, 3));
}

{
  function f() {
    return g.apply(null, arguments);
	}

	function g(a, b, c) {
    return (a + b + c);
  }

  console.log(f(1, 2, 3));
}
