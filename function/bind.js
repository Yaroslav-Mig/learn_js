//TODO: Polyfill
const person = {
  userName: 'Yar',
};
function showInfo(cell, email) {
  console.log(`Name: ${this.userName}, cell: ${cell}, e-mail: ${email}`);
}

{
  function bind(fn, context, ...rest) {
    return function (...args) {
      const uniqID = Date.now().toString();
      context[uniqID] = fn;
      const result = context[uniqID](...rest.concat(args));
      delete context[uniqID];
      return result;
    };
  }

  bind(showInfo, person, '312-155', 'yar@mail.ru')();
  bind(showInfo, person, '312-155')('yar@mail.ru');
  bind(showInfo, person)('312-155', 'yar@mail.ru');
  console.log('---------------');
}
{
  function bind(fn, context) {
    let rest = Array.prototype.slice.call(arguments, 2);

    return function () {
      const args = Array.from(arguments);
      return fn.apply(context, rest.concat(args));
    };
  }
  bind(showInfo, person, '312-155', 'yar@mail.ru')();
  bind(showInfo, person, '312-155')('yar@mail.ru');
  bind(showInfo, person)('312-155', 'yar@mail.ru');
  console.log('---------------');
}
{
  function bind(fn, context, ...rest) {
    return function (...args) {
      return fn.apply(context, rest.concat(args));
    };
  }
  bind(showInfo, person, '312-155', 'yar@mail.ru')();
  bind(showInfo, person, '312-155')('yar@mail.ru');
	bind(showInfo, person)('312-155', 'yar@mail.ru');
	console.log('---------------');
}
	//TODO: apply()
{
  function apply(fn, context, args) {
    const uniqID = Date.now().toString();
    context[uniqID] = fn;
    const result = context[uniqID](...args);
    delete context[uniqID];
    return result;
  }

	apply(showInfo, person, ['458-465', 'bik@mail.ru']);
	console.log('---------------');
}
//TODO: call()
{
	function call(fn, context, ...args) {
		const uniqID = Date.now().toString();
		context[uniqID] = fn;
		const result = context[uniqID](...args);
		delete context[uniqID];
		return result;
	}
}
call(showInfo, person, '458-465', 'bik@mail.ru')
