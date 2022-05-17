// ! Event handlers

// TODO: 1 вариант. Создание функции при клике на элемент DOM
{
  const one = document.querySelector('.block-1');
  one.onclick = myClick;

  function myClick() {
    console.log('click 1');
    console.log(this);
    one.onclick = null;
    const two = document.querySelector('.block-2');
    two.onclick = myClick2;
  }
  function myClick2() {
    console.log('click 2');
    console.log(this);
    const two = document.querySelector('.block-2'); //* можно заменить на  const two = this
    two.onclick = myClick3;
  }
  function myClick3() {
    console.log('Yo!');
  }
}
// ! Bubbling and capturing
{
  document.querySelector('.block-3').onclick = myClick3;
  // document.querySelector('body').onclick = myClick3;
  // document.querySelector('html').onclick = myClick3;

  //* this становится тот элемент на кого повешан обработчик событий
  //* event.target - тот элемент по которому произошло событие(например кликнули)
  //* event.currentTarget - тот элемент на котором висит обработчик события
  //* this === e.currentTarget - всегда равно
  //* this === e.target - только если событий спровоцировал тот элемен на котором висит событие

  function myClick3(event) {
    console.log(event);
    console.log('click 3');
    console.log (event.target);
    console.log(event.currentTarget);
    console.log(this);
    console.log('---------------');
  }

  // TODO: Делегирование событий (класс, атрибуты data-)
	document.onclick = function (event) {
		console.log(event);
		console.log(event.eventPhase);
		console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
		console.log(this);
    if (event.target.className === 'block-4') {
      console.log('click 4');
		}
  };

  // TODO: Прекращения всплытия событий и отключения события по умолчанию
  document.querySelector('.block-6').onclick = function (event) {
    event.stopPropagation();
		console.log('click 6');
		console.log(event.eventPhase);
  };
	document.querySelector('.block-5').onclick = function (e) {
		console.log(e.eventPhase);
    console.log('click 5');
		this.style.display = 'none';
		e.stopPropagation();
  };
}
