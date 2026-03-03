

// Question 2: Simple Algebraic Operations

//  Use the function to perform the different operation
function Calculator(operator) {
  if (operator == "+") {
    // check the operation for addition
    return function (a, b) {
      return a + b;
    };
  } else if (operator == "-") {
    //  check the operation for sub
    return function (a, b) {
      return a - b;
    };
  } else if (operator == "*") {
    //  check the operation for multiply
    return function (a, b) {
      return a * b;
    };
  } else if (operator == "/") {
    //   check the operation for divide
    return function (a, b) {
      return a / b;
    };
  } else if (operator == "%") {
    //  check the operation for modulo
    return function (a, b) {
      return a % b;
    };
  }  
}

// let output = Calculator("+");
// // console.log(output(2, 4));

// // Created a calculator  object to perform the operation directly using . operator

const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
  mod(a, b) {
    return a % b;
  },
};

