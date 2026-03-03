

// Question 9: Flatten Nested Arrays

let flatArr = [];

function FlatNestedArray(arr) {
  for (let val of arr) {
    if (Array.isArray(val)) {
      // Check the val is Array or not
      FlatNestedArray(val);
    } else {
      flatArr.push(val);
    }
  }

  return flatArr;
}
let arr1 = [
  1,
  2,
  3,
  4,
  [, 5, 6, 7, [8, 9, 10], [11, 12, 13]],
  14,
  15,
  [16, 17, 18],
];

console.log(FlatNestedArray(arr1));
//  Flat an array using the inbuit method flat :-

let flattedArr = arr1.flat(Infinity); // Use the js inbuilt method to flat the array directly
console.log(flattedArr);
