let user = {
  name: "mayank",
  age: 21,
  subject: ["HTML", "CSS", "JS", "ReactJS", "NodeJS"],
  address: {
    area: "Ganga Colony",
    city: "Meerut",
    state: "UP",
  },
};

// const deep = structuredClone(user);   // Used the structure clone for deep clome

// const deepClone = JSON.parse(JSON.stringify(user));  // Use the JSON method for deep clone
// deep.city = "Ghanziabad";
// deep.area = "Ghukna mod";

// console.log(deep);
// console.log(deepClone);

//  Deep Clone without using any inbuilt method :-

// let shallowClone = { ...user };

// shallowClone.name = "Rohit";
// shallowClone.age = 31;
// shallowClone.address.state = "MP";

// console.log(user);
// console.log(shallowClone);

