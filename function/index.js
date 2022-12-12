{
  function func(from, text = 'text didn`t add') {
    console.log(`${from} : ${text}`);
  }
  func('Ann');

  function showMessage(from, text = anotherFunction()) {}

  function showMessage2(from, text) {
    if (text === undefined) {
      text = 'text didn`t add';
    }
	}

	function showMessage3(from, text) {
		text = text || 'text didn`t add';
  }
}
