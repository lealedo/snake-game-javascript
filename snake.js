let snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 10 },
  { x: 11, y: 9 },
];

const updateSnake = () => {
  direction = getDirection();
  snakeBody.pop();

  newHead = { ...snakeBody[0] };
  newHead.x += direction.x;
  newHead.y += direction.y;
  snakeBody.unshift(newHead);
  
  if (checkHead()) {
    gameOver = true;
  }
};



const drawSnake = () => {
  for (const i of snakeBody) {
    const segmentElement = document.createElement('div');
    segmentElement.style.gridColumnStart = i.y;
    segmentElement.style.gridRowStart = i.x;
    segmentElement.classList.add('snake');
    gameBoard.appendChild(segmentElement);
  }
};