const pixelBoard = document.getElementById('pixel-board');
const pixelList = document.getElementsByClassName('line');
const pixels = document.getElementsByClassName('pixel');
const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const paletteColor = document.getElementById('color-palette');
const elementColor = document.getElementsByClassName('selected');
const clearBoard = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');
const inputSize = document.getElementById('board-size');
let numbersOfPixels = 5;
const randomColors = ['rgb(0,0,0)'];

function createLine(numberLine) {
  for (let index = 0; index < numberLine; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
  }
}

function createPixel(numbersOfPixels) {
  createLine(numbersOfPixels);
  for (let i = 0; i < numbersOfPixels; i += 1) {
    for (let index = 0; index < numbersOfPixels; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelList[index].appendChild(pixel);
    }
  }
}

function setPixelsColor() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function setClassSelected() {
  const colorPalette = document.querySelector('.color');
  colorPalette.classList.add('selected');
}

createPixel(numbersOfPixels);

function addClassColor(event) {
  elementColor[0].classList.remove('selected');
  const colorSelected = event.target;
  colorSelected.classList.add('selected');
}

pixelBoard.addEventListener('click', (event) => {
  const pixelSelected = event.target;
  pixelSelected.style.backgroundColor = elementColor[0].style.backgroundColor;
});

paletteColor.addEventListener('click', addClassColor);

clearBoard.addEventListener('click', () => {
  setPixelsColor();
});

generateBoard.addEventListener('click', () => {
  if (inputSize.value < 0 || inputSize.value === '') {
    alert('Valor inválido!');
  } else {
    pixelBoard.innerHTML = '';

    numbersOfPixels = inputSize.value;
    createPixel(numbersOfPixels);
    setPixelsColor();
  }
});

inputSize.addEventListener('focusout', () => {
  if (inputSize.value < 5) {
    inputSize.value = 5;
  }
  if (inputSize.value > 50) {
    inputSize.value = 50;
  }
});

while (randomColors.length < 4) {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  const elementArrayColors = `rgb(${r}, ${g}, ${b})`;

  if (randomColors.includes(elementArrayColors) === false) {
    randomColors.push(elementArrayColors);
  }
}

window.onload = function start() {
  setPixelsColor();
  setClassSelected();

  bt1.style.backgroundColor = 'black';
  bt2.style.backgroundColor = randomColors[1];
  bt3.style.backgroundColor = randomColors[2];
  bt4.style.backgroundColor = randomColors[3];
};