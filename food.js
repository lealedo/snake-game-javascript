let food = { x: 6, y: 6 };

const updateFood = () => {
  if (onFood()) {
    growSnake();
    genFood();
  }
};

const drawFood = () => {
  drawUtil(food, 'food');
};