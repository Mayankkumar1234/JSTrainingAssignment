
// 5. Sum of Nested Arrays

function validateValue(value) {   // created a separated function to validate every input 
  if (typeof value === "number" && !isNaN(value)) {
    return true;  // This return true for only number input
  }

  return false;
}

function sumNestedArray(arr) {   
  if (!Array.isArray(arr) || arr.length == 0) return;  // Checked the given input array is valid array or not
 
  return arr.reduce((acc, curr) => {  // Used the reduce method to calculate the sum
    //

    if (Array.isArray(curr)) {
      return acc + sumNestedArray(curr);   // Used the recursive method 
    } else {
      if (validateValue(curr)) {
        return acc + curr;
      } else {
        return acc;  // return only currSum if the the given value is not valid
      }
    }
  }, 0);

  // Second method :-

  let flatArray = arr.flat(Infinity);

  // let arrSum = flatArray.reduce((acc, curr) => {
  //   if (validateValue(curr)) {
  //     return acc + curr;
  //   } else {
  //     return acc;
  //   }
  // }, 0);

  // return arrSum;
}

// console.log(sumNestedArray([1, [null, [NaN, 4]], 5])); // Output: 15
