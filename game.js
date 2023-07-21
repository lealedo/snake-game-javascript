const gameBoard = document.getElementById('game-board');

const GAME_SPEED = 5;

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
};

// draw snake and food
const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake();
};

const isOver = () => {
  clearInterval(timer);
  alert(`Game Over!\nYour score is ${snakeBody.length}.`);
};

timer = setInterval(main, 1000 / GAME_SPEED);