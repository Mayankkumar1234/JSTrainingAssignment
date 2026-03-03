
// // Question 10: Write a function calculate(a, b, operation) where operation is a callback (add, subtract, multiply). Verify it works with all three operations.

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function calculate(a, b, operator) {

  if (typeof Number(a) != "number" && typeof Number(b) != "number") return; // Perform validation to check the input data is valid number or not!
  return operator(Number(a), Number(b));
}

console.log(calculate(2, 4, add));
