let inputDirection = { x: 0, y: 1 };
let lastInputDirection = { ...inputDirection };

const getInput = (e) => {
  if (lastInputDirection.x === 0) {
    if (e.key === 'ArrowUp') {
      inputDirection = { x: -1, y: 0 };
    } else if (e.key === 'ArrowDown') {
      inputDirection = { x: 1, y: 0 };
    }
  }
  else if (lastInputDirection.y === 0) {
    if (e.key === 'ArrowLeft') {
      inputDirection = { x: 0, y: -1 };
    } else if (e.key === 'ArrowRight') {
      inputDirection = { x: 0, y: 1 };
    }
  }
};

window.addEventListener('keydown', getInput);

const getDirection = () => {
  lastInputDirection = { ...inputDirection };
  console.log(inputDirection);
  return inputDirection;
};