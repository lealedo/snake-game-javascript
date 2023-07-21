const onFood = () => {
  for (const i of snakeBody) {
    if (equalPos(food, i)) {
      return true;
    }
  }
};

const growSnake = () => {
  snakeBody.push(snakeBody[snakeBody.length - 1]);
};

const genFood = () => {
  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE + 1),
      y: Math.floor(Math.random() * GRID_SIZE + 1),
    };
  } while (onFood());
};