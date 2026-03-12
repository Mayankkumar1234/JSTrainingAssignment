let input = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: 30,
    },
  },
};

function flatNestedObject(inputObj) {
  let result = {};
  for (const i in inputObj) {
    if (
      typeof inputObj[i] === "object" &&
      inputObj[i] !== null &&
      !Array.isArray(inputObj[i])
    ) {
      const temp = flatNestedObject(inputObj[i]);

      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = inputObj[i];
    }
  }
  return result;
}

let nestedObj = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
  keyFour: {
    keyA: true,
    keyB: false,
    keyC: {
      keyCOne: "key C one value",
      keyCTwo: "key C two value",
      keyCThree: 1234,
      keyD: {
        keyDOne: "Key D one value",
      },
    },
  },
};

newObj = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
  "keyFour.keyA": true,
};

let obj = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: 30,
    },
  },
};

console.log(flatNestedObject(nestedObj));
