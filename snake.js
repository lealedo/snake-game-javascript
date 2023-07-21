let snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 10 },
  { x: 11, y: 9 },
];

const updateSnake = () => {
  const direction = getDirection();
  snakeBody.pop();

  const newHead = { ...snakeBody[0] };
  newHead.x += direction.x;
  newHead.y += direction.y;
  snakeBody.unshift(newHead);
  
  if (checkHead()) {
    gameOver = true;
  }
};



const drawSnake = () => {
  for (const i of snakeBody) {
    drawUtil(i, 'snake');
  }
};