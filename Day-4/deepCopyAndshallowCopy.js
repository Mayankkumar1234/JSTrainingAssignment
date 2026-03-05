//  Shallow Copy :-

const original = {
  name: "Mayank",
  age: 25,
  address: { city: "Meerut", pin: 250001 },
  hobbies: ["cricket", "coding"],
};

const shallow = { ...original }; // or Object.assign({}, original)

shallow.name = "Rohit"; // Only affect the shallow copy
shallow.address.city = "Delhi"; // Change the original object city as well.
shallow.hobbies.push("gaming");

console.log(original);

console.log(shallow);

// Deep Copy :-

const deep = structuredClone(original); // ---> JSON.parse(JSON.stringify())

deep.address.city = "Kotana"; // Does not affect the original one
deep.hobbies.push("Reading");

console.log(original);
console.log(deep);

const newUser = {
  name: "Mayank",
  age: 21,
  address: { city: "Meerut", pin: 250001 },
  sayHello() {
    console.log(`Hello ${this.name}`);
  },
};

const deepCopy = structuredClone(newUser);

console.log(deepCopy);
