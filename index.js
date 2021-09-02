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
    refs.startBtnRef.classList.add('disabled');
    refs.bodyRef.style.backgroundColor = colors.getValue(randomIntegerFromInterval());
  }, 2000);
}

function onStopBtnClick() {
  refs.startBtnRef.classList.remove('disabled');
  clearInterval(startId);
}
