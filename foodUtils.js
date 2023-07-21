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
  food = {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
};