const gameBoard = document.getElementById('game-board');
const gameBody = document.getElementById('game-body');

const GAME_SPEED = 5;
const GRID_SIZE = 21;

let gameOver = false;
let timer;

const main = () => {
  update();
  draw();

  if (gameOver) {
    isOver();
  }
};

// update snake position and food positon
const update = () => {
  updateSnake();
  updateFood();
};

// draw snake and food
const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake();
  drawFood();
};

const isOver = () => {
  clearInterval(timer);
  alert(`Game Over!\nYour score is ${snakeBody.length}.\nPress ctrl+r to restart xD`);
};

timer = setInterval(main, 1000 / GAME_SPEED);

// Utils maybe
const equalPos = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

const drawUtil = (e, c) => {
  const segmentElement = document.createElement('div');
  segmentElement.style.gridColumnStart = e.y;
  segmentElement.style.gridRowStart = e.x;
  segmentElement.classList.add(c);
  gameBoard.appendChild(segmentElement);
};