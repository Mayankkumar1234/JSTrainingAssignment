function findLargestDiff(arr) {
  if (!Array.isArray(arr) || arr.length <= 0) return;  // Validate the array and thier length

  let max = -1000000    // Initialize the value with negative infinity
  let min = 10000000;    // Initialize the value with positive infinity
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== "number" || isNaN(arr[i]))  continue   // Check every value if it not a number skipping the value
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  return max - min;
}




console.log(findLargestDiff(arr));

//  How does this work internally 