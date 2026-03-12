// Description

// - Implement a calculator to perform the following operation
// - Simple algebraic operations like add, subtract, multiply, divide, modulus, etc.

function validateInput(...args) {
  if (args.some((ele) => ele === NaN || typeof ele !== "number")) {
    return false;
  }
  return true;
}

const Calculator = {
  add(a, b) {
    if (validateInput(a, b)) {
      return a + b;
    }

    return false;
  },
  subtract(a, b) {
    if (validateInput(a, b)) {
      return a - b;
    }
    return false;
  },
  multiply(a, b) {
    if (validateInput(a, b)) {
      return a * b;
    }
    return false;
  },
  divide(a, b) {
    if (validateInput(a, b)) {
      return a / b;
    }
    return false;
  },
  mod(a, b) {
    if (validateInput(a, b)) {
      return a % b;
    }
    return false;
  },
};

let addOutput = Calculator.add(null, 2);

if (!addOutput) {
  console.log("Addition", addOutput);
} else {
  console.log("Please pass the valid arguments");
}
