// ! Object handlers: handleEvent

//*  если addEventListener получает объект в качестве обработчика, то
//* он вызывает object.handleEvent(event), когда происходит событие.

btn.addEventListener('click', {
  handleEvent(e) {
    console.log(e.type + ' на ' + e.currentTarget);
  },
});

// TODO: объект обрабатывает оба события
class Menu2 {
  handleEvent(e) {
    switch (e.type) {
      case 'mousedown':
        e.currentTarget.innerHTML = 'Нажата кнопка мыши';
        break;
      case 'mouseup':
        e.currentTarget.innerHTML += '...и отжата';
    }
  }
}

// TODO 2: обработка событий в объекте разделена по методам
class Menu {
  handleEvent(e) {
    const method = 'on' + e.type[0].toUpperCase() + e.type.slice(1);
    this[method](e);
  }
  onMousedown(e) {
    e.currentTarget.innerHTML = 'Нажата кнопка мыши';
  }
  onMouseup(e) {
    e.currentTarget.innerHTML += '...и отжата';
  }
}

const menu = new Menu();
btn.addEventListener('mousedown', menu, false);
btn.addEventListener('mouseup', menu, false);

// TODO 3: Действия браузера по умолчанию
{
  menu.onclick = function (event) {
    if (event.target.nodeName != 'A') return;
    let href = event.target.getAttribute('href');
    console.log(href); //* может быть подгрузка с сервера, генерация интерфейса и т.п.
		return false; //* отменить действие браузера (переход по ссылке)
	};
	//* данный метод работает, только если обработчик назначен через on<событие>
	
	elem.oncontextmenu = function(event) {
    event.preventDefault();
    console.log("Контекстное меню кнопки");
  };
  document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return;
    event.preventDefault();
    console.log("Контекстное меню документа");
  };
	//* event.defaultPrevented
	//* true, если действие по умолчанию было предотвращено, и false, если нет.
}
