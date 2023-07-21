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

const getInputMobile = (e) => {
  // e.preventDefault();
  const t = e.touches[0];
  console.log(t);

  const rect = gameBody.getBoundingClientRect();
  const treshold = 0.4;

  if (lastInputDirection.x === 0) {
    if (t.clientY < rect.height * treshold) {
      inputDirection = { x: -1, y: 0 };
    } else if (t.clientY > rect.height * (1 - treshold)) {
      inputDirection = { x: 1, y: 0 };
    }
  }
  else if (lastInputDirection.y === 0) {
    if (t.clientX < rect.width * treshold) {
      inputDirection = { x: 0, y: -1 };
    } else if (t.clientX > rect.width * (1 - treshold)) {
      inputDirection = { x: 0, y: 1 };
    }
  }
};

window.addEventListener('touchstart', getInputMobile);

const getDirection = () => {
  lastInputDirection = { ...inputDirection };
  // console.log(inputDirection);
  return inputDirection;
};