
// Question 4: Variable Arguments Calculator
function add_multiple(...nums) {
  return nums.reduce((acc, curr) => curr + acc, 0); // Use the reduce to
}

// console.log(add_multiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function multiply_multiple(...nums) {
  return nums.reduce((acc, curr) => curr * acc, 1);
}
// // console.log(multiply_multiple(2, 3, 4));
