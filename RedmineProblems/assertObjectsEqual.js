function assertObjectsEqual(expected, actual, str) {
  if (str !== "detects that two objects are equal") return;

  for (let [key1, val1] of Object.entries(expected)) {
    for (let [key2, val2] of Object.entries(actual)) {
      if (key1 !== key2 && val1 !== val2) {
        return `Failed Expected ${expected} but got ${actual}`;
      }
    }
  }

  return "Passed";
}

var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 };
console.log(
  JSON.parse(JSON.stringify(expected)) === JSON.parse(JSON.stringify(actual)),
);

// assertObjectsEqual(actual, expected, "detects that two objects are equal");

var expected = { foo: 6, bar: 5 };
var actual = { foo: 5, bar: 6 };
// assertObjectsEqual(actual, expected, "detects that two objects are equal");
// Output : FAILED Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}
