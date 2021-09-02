const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  bodyRef: document.querySelector('body'),
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
};

let startId = null;

refs.startBtnRef.addEventListener('click', onStartBtnClick);
refs.stopBtnRef.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
  startId = setInterval(() => {
    refs.startBtnRef.setAttribute('disabled', 'disabled');
    const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.bodyRef.style.backgroundColor = currentColor;
  }, 500);
}

function onStopBtnClick() {
  refs.startBtnRef.removeAttribute('disabled');
  clearInterval(startId);
}
