// ! кросс-браузерные события

const eventsObj = {
  addEvent: function (elem, type, func) {
    if (typeof addEventListener !== 'undefined') {
      elem.addEventListener(type, func, false);
    } else if (typeof attachEvent !== 'undefined') {
      elem.attachEvent(`on${type}`, func);
    } else {
      elem[`on${type}`] = func;
    }
  },
  removeEvent: function (elem, type, func) {
    if (typeof removeEventListener !== 'undefined') {
      elem.removeEventListener(type, func, false);
    } else if (typeof detachEvent !== 'undefined') {
      elem.detachEvent(`on${type}`, func);
    } else {
      elem[`on${type}`] = null;
    }
  },
  getTarget: function (event) {
    if (typeof event !== 'undefined') {
      return event.target;
    } else {
      return event.srcElement;
    }
  },
  preventDefault: function (event) {
    if (typeof event.preventDefault !== 'undefined') {
      return event.preventDefault();
    } else {
      return (event.returnValue = false);
    }
  },
  stopPropagation: function (event) {
    if (typeof event.stopPropagation !== 'undefined') {
      return event.stopPropagation();
    } else {
      return (event.cancelBubble = true);
    }
  },
};

// ! Event handlers, stopPropagation, preventDefault
// TODO: 1 вариант. Создание функции при клике на элемент DOM

const smallBox = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const bigBox = document.getElementById('box-inner');
const link = document.getElementById('tut-by');

function changeColor(e) {
  const attr = eventsObj.getTarget(e).dataset.color;
  if (attr) {
    if (e.type === 'click') {
      bigBox.className = `box-wrapper ${attr}`;
      smallBox.style.backgroundColor = attr === 'day' ? 'peru' : 'turquoise';
    } else if (e.type === 'mouseover') {
      bigBox.className = 'box-wrapper';
    }
  } else if (this.id === 'tut-by') {
    //* this === event.currentTarget
    eventsObj.preventDefault(e); //* оключает стандартное поведение элемента по умолчанию
  }
  eventsObj.stopPropagation(e);
}
function sayInfo(e) {
  if (this.hasAttribute('data-color')) {
    alert('Вы изменили стиль');
    eventsObj.stopPropagation(e); //* отмена распространения события по дереву элементов
    eventsObj.removeEvent(eventsObj.getTarget(e), 'click', sayInfo);
    //* проверка кросс-браузерности removeEventListener() и event.target
    // this.removeEventListener('click', sayInfo, false);
    //* this === e.currentTarget
  }
}

smallBox.onclick = function (event) {
  console.log(event);
  if (eventsObj.getTarget(event).style.backgroundColor !== 'turquoise') {
    event.target.style.backgroundColor = 'turquoise';
  } else {
    event.target.style.backgroundColor = 'peru';
  }
  event.stopPropagation();
};

link.addEventListener('click', changeColor, false);
// for (let elem of buttons) {
//   elem.onclick = changeColor;
// }
//* одно событие (функция) на элемент

for (let elem of buttons) {
  eventsObj.addEvent(elem, 'click', changeColor); // elem.addEventListener('click', changeColor, false);
  // eventsObj.addEvent(elem, 'mouseover', changeColor);
  eventsObj.addEvent(elem, 'click', sayInfo); // elem.addEventListener('click', sayInfo, false);
}
//* несколько событий (функций) на эелмент DOM-дерева

// TODO: старые версии IE < 9

function oldIE() {
  var buttons = document.getElementsByTagName('button');

  var doSomething = function (e) {
    e = e || window.e;
    e.returnValue = false;
    var elem = e.srcElement;
    if (elem.id === 'day') {
    } else if (elem.id === 'night') {
    }
  };
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].attachEvent('onclick', doSomething);
    buttons[i].detachEvent('onclick', doSomething);
  }
}
//* e.returnValue = false замена для старых браузеров e.preventDefault()
//* 
//* this не работает поэтому чтобы обратиться к элементу  на котором висит событие => e.srcElement.id
//* вместо addEventListener() используется attachEvent() - только 2 параметра
//* вместо removeEventListener() используется detachEvent() - только 2 параметра
//* event = event || window.event для поддержки старых IE
//* event.cancelBubble = true - предотвращает всплытие по дереву DOM. Старое свойство до stopPropagation()

// TODO: проверка по классам без делигирование
function changeColor2(e) {
  if (eventsObj.getTarget(e).id === 'day') {
    bigBox.className = 'box-wrapper day';
    smallBox.style.backgroundColor = 'peru';
  } else if (this.id === 'night') {
    bigBox.className = 'box-wrapper night';
    smallBox.style.backgroundColor = 'turquoise';
  } else if (this.id === 'tut-by') {
    //* this === event.currentTarget
    eventsObj.preventDefault(e);
    //* оключает стандартное поведение элемента по умолчанию
  }
  e.stopPropagation();
}
