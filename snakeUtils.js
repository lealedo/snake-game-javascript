const GRID_SIZE = 21;

const checkBorder = () => {
  return snakeBody[0].x < 1 || snakeBody[0].x > GRID_SIZE || snakeBody[0].y <1 || snakeBody[0].y > GRID_SIZE;
}

const equalPos = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos1.y;
}

const checkIntersect = () => {
  for (let i = 1; i < snakeBody.length; i++) {
    return equalPos(snakeBody[0], snakeBody[i]);
  }
  return false;
}

const checkHead = () => {
  return checkBorder() || checkIntersect();
}