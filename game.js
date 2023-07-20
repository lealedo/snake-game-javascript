const gameBoard = document.getElementById('game-board');

const GAME_SPEED = 5;

const main = () => {
  update();
  draw();
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


setInterval(main, 1000 / GAME_SPEED);