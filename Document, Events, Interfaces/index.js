// ! AddEventListener, Event handlers
const handlerFuncJS = () => console.log('onclick in JS3');
const handlerFuncHTML = () => console.log('onclick in HTML');

// TODO: 1 вариант. Создание функции при клике на элемент DOM
document.querySelector('#h3').onclick = function () {
  console.log('onclick in JS1');
};
// TODO: 2 вариант. Вызов функции в анонимной функции
document.querySelector('#h4').onclick = function () {
  console.log('onclick in JS2');
  handlerFuncJS();
};
// TODO: 3 вариант. нужно писать функцию без вызова
document.querySelector('#h5').onclick = handlerFuncJS;

// TODO: 4 вариант. назначение на элемент несколько обработчиков событий => функций
function helloFunc() {
  console.log(this);
  console.log('hello');
}
function byeFunc() {
  console.log(this);
  console.log('bye');
}
document.getElementById('text-1').onclick = byeFunc;
document.getElementById('text-1').onclick = helloFunc;
//* перезаписывает свойство элемента сверху и ссылается на последнюю функцию,
//* на элемент можно повесить одно событие данным способом
//* при данном способое не теряется контекст вызова - THIS
//* данный метод более тяжелый для памяти, чем AddEventListener, т.к. здесь хранится сама функция в свойстве объекта

document.getElementById('text-2').onclick = function () {
  helloFunc();
  byeFunc();
};
//* создание анонимной функции, ктр вызывает другие функции при событии на элементе (клик и т.д.)
//* при данном способе теряется контекст вызова - THIS

// TODO: 5 вариант. AddEventListener
document.getElementById('text-3').addEventListener('click', byeFunc);
document.getElementById('text-3').addEventListener('click', helloFunc);
//* можно повесить много событий на один элемент и this (контекст вызова) не теряется
//* данный метод легче и оптимизирован для памяти, т.к. здесь хранится ссылка на функцию  в свойстве объекта
//* можно повесить события на элементы, которые не являются DOM элементами. Например, окончание анимации, transition
document.getElementById('text-3').removeEventListener('click', helloFunc);
