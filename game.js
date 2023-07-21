const gameBoard = document.getElementById('game-board');

const GAME_SPEED = 5;

let gameOver = false;
let timer;

const main = () => {
  update();
  draw();
  isOver();
};

// update snake position and food positon
const update = () => {
  updateSnake();
};

// draw snake and food
const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake();
};

const isOver = () => {
  if (gameOver) {
    clearInterval(timer);
  }
}

timer = setInterval(main, 1000 / GAME_SPEED);