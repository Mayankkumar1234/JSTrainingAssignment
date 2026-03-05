//  What is proto and prototype in s :-

// -

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

// const animal = {
//   eats:true
// }

const dog = {
  name: "Dog",
  barks: true,
};

// dog.__proto__ = animal;

console.log(dog.barks);
// console.log(dog.eats)

Object.prototype.getName = function () {
  return this.name;
};

console.log(dog.getName());

//  Inheritance in Js:-

const User = {
  name: "Rahul",
};

User.__proto__.sayName = function () {
  console.log(this.name);
};

// console.log(User);

const temp = {
  name: "Kunal",
};

temp.__proto__ = User; // Cannot use prototype here to set the property or method , throw Type Error

// console.log(temp.sayName());

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// const Teacher = {
//   makeVideo: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };

// const TASupport = {
//   makeAssignment: "JS assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// // Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);

// console.log(TeachingSupport);


const Person ={
  name:"Mayank"
}

const newUser = Object.create(Person);

console.log(newUser)