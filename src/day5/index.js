const processInstructions = function processInstructions(instructions, steps, currentStep) {

  // TODO actually follow the logic.

  if (instructions[currentStep] !== undefined) {
    currentStep++;
    return processInstructions(instructions, steps, currentStep);
  }
  else {
    return currentStep;
  }
};

const taskOne = function taskOne(instructionString) {
  const instructions = instructionString.split('\n');

  let steps = 0;
  let currentStep = 0;
  steps = processInstructions(instructions, steps, currentStep);
  return steps;
};

const taskTwo = function taskTwo() {

};

module.exports = {
  taskOne,
  taskTwo,
};
