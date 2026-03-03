// Question 11:Write a function reverseString(str) that returns the reversed string. Test it with "hello" and "JavaScript"


function reverseString(str) {
  //  using inbuilt method

  // return str.split("").reverse().join("")

  //  By taking a separate variable

  let rStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str[i];
  }
  return rStr;
}

// console.log(reverseString("hello"));