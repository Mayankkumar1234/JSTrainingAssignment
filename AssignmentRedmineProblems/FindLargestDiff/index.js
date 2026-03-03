function findLargestDiff(arr) {
  if (!Array.isArray(arr) || arr.length <= 0) return;

  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  return max - min;
}

let arr =[-10, 0, 10, 20]
console.log(findLargestDiff(arr));
