//TODO: Lexical Env and Closure
{
  let funcRef = null;

  function F() {
    const a = 5;
    function FF() {
      console.log(a);
    }
    funcRef = FF;
  }
  F();
  funcRef();
}
{
  let funcRef = null;

  function F(params) {
    const a = 7;
    // console.log('local var A for func F A=' + a);
    funcRef = function (params) {
      const b = 10;
      // console.log('local var B for func funcRef B=' + b);
      // console.log('closure var A=' + a);
    };
  }
  F();
  funcRef();
}
{
  function F() {
    let num = 1;
    return function () {
      console.log(num);
    };
  }
  const funcRef = F();
  funcRef();
}
{
	let funcRef = null;

  function F() {
		let a = 8;
		console.log('local var A for func F A=' + a);
		console.log('----------');
		function FF() {
			let b = 13;
      console.log('local var B for func funcRef B=' + b);
			console.log('closure var A=' + a);
			console.log('----------');
    }
		funcRef = FF;
		FF();
		a++;
  }
  F();
	funcRef();
}
//TODO: counter
{
	function counter() {
		let a = 0;
		return function () {
			a++;
			console.log(a);
		}
	}
	count1 = counter();
	count1();
	count1();
	count1();
	count1();
	console.log('----------');
	count2 = counter();
	count2();
	count2();
	count2();
	count2();
}
{
	let num = 1;

function test() {
	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test();
func1();  // 1
func1();  // 2
console.log('----------');
let func2 = test();
func2();  // 3
func2();  // 4

	
}

