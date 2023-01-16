//TODO: setInterval
{
  const cube = document.getElementById('cube');
  let offset = 10;

  function move() {
    cube.style.marginLeft = offset + 'px';
    offset += 5;
  }
  const timerID = setInterval(move, 50);
  document.getElementById('stop').addEventListener('click', () => clearInterval(timerID));
}

{
  let intervalID = null;

  function changeColor() {
    if (!intervalID) {
      intervalID = setInterval(flashText, 1000);
    }
  }
  function flashText() {
    const elem = document.getElementById('my_box');
    elem.className = elem.className === 'go' ? 'stop' : 'go';
  }
  function stopTextColor() {
    clearInterval(intervalID);
    intervalID = null;
  }

  document.getElementById('start_color').addEventListener('click', changeColor);
  document.getElementById('stop_color').addEventListener('click', stopTextColor);
}

//TODO: setTimeout
{
  const cube = document.getElementById('cube_2');
  let offset = 10;
  let timerID = null;

  function move() {
    cube.style.marginLeft = offset + 'px';
    offset += 1;
    timerID = setTimeout(move, 50);
  }
  move();

  console.log(timerID);
  document.getElementById('stop_2').addEventListener('click', () => clearTimeout(timerID));
}
{
  const counter = document.getElementById('counter');
  const btn = document.getElementById('stop_counter');
  let count = 10;
  let timeoutID = null;

  function startCount() {
    if (count < 0) {
      count = 0;
      clearTimeout(timeoutID);
      alert('timer is switched off');
    } else {
      counter.innerHTML = count;
      count--;
      timeoutID = setTimeout(startCount, 1000);
    }
  }
  startCount();

  btn.addEventListener('click', () => clearTimeout(timeoutID));
}