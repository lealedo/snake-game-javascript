const checkBorder = () => {
  return snakeBody[0].x < 1 || snakeBody[0].x > GRID_SIZE || snakeBody[0].y < 1 || snakeBody[0].y > GRID_SIZE;
};

const checkIntersect = () => {
  for (let i = 1; i < snakeBody.length; i++) {
    if (equalPos(snakeBody[0], snakeBody[i])) {
      return true;
    }
  }
  return false;
};

const checkHead = () => {
  return checkBorder() || checkIntersect();
};