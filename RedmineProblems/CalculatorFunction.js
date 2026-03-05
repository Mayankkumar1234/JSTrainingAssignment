// Description

// Make a Calculator that takes function and variables as an argument and returns values based on the calculation of the function provided to it.
// Do this for all the functions implemented.
// Add more function tests: temperature conversion, area, etc.

// Note:
// Verify and validate the number of arguments allowed as per the requirement of function provided
// Handle use of arrow functions

// function checkValidArguments(allowedArgs, ...args) {
//   if (allowedArgs.length !== args.length) {
//     throw new Error(
//       `Invalid number of arguments. Expected ${allowedArgs.length} but got ${args.length}`,
//     );
//   }
// }

//  created a add function to perform the addition of n numbers
function add(nums) {
  if (
    nums.length <= 1 ||
    nums.some((val) => typeof val !== "number" || isNaN(val)) // Validate the nums only work if the array contains the valid numbers
  ) {
    throw new Error(
      "Please provide  all the valid arguments or valid  number of arguments",
    );
  }

  return nums.reduce((acc, curr) => {
    // Used the reduce method to calculate the sum of the numbers
    return acc + curr;
  }, 0);
}

function calcCircleArea(radius) {
  // created a Calculate circle area function to find the circle area
  if (radius.length >= 0 || isNaN(radius[0])) {
    throw new Error("Please provide the valid argument");
  }
  console.log(radius);
  return Math.PI * radius[0] * radius[0];
}

function celsiusToFahrenheit(celcius) {
  if (celcius.length <= 0 || isNaN(celcius[0])) {
    throw new Error("Please provide the valid argument");
  }
  const fahrenheit = (celcius[0] * 9) / 5 + 32;
  return fahrenheit;
}

function Calculator(callback, ...args) {
  let calculatedData = 0;
  try {
    calculatedData = callback(args);
  } catch (error) {
    return error.message;
  }
  return calculatedData;
}

// console.log(Calculator(add, 1, 2, 3));

console.log(Calculator(calcCircleArea, 5, 3, 2));
