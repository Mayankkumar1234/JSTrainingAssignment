// Description

// Write an implementation of a function that generate a query string URL of object.The method take object and URL as parameter and return string ,where every key-value pair converted into query string.

// Ex  :  Input = {
//     "keyOne": "value One",
//   "keyTwo": "value Two",
//   "keyThree": "value Three",
// }
// url : "https://localhost:400",

// Output : https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three

function QueryStringUrlGenerator(inputObj, url) {
  url = url + "?";
  for (let [key, value] of Object.entries(inputObj)) {
    url = url + key + "=" + value + "&";
  }
  return url.slice(0, -1);
}

console.log(
  QueryStringUrlGenerator(
    {
      keyOne: "value One",
      keyTwo: "value Two",
      keyThree: "value Three",
    },
    "https://localhost:400",
  ),
);
