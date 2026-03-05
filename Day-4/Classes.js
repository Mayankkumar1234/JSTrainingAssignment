// // class Person {}

// // const person = new Person();

// // console.log(typeof Person);

// // Cannot be called without new (throws TypeError)
// // Cannot be used in function-call style: Person() → error

// // Person()

// // Inheritance and extend keyword in js :-

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayName() {
//     return `Name :${this.name}`;
//   }
// }

// class Admin extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// const admin = new Admin("Rohit", 21);

// // console.log(admin.sayName());

// //  Method overloading in js :- Method overriding occurs when a child class (subclass) provides a specific implementation for a method that is already defined in its parent class (superclass). This allows subclasses to modify or extend inherited behavior.

// class Animal {
//   speak() {
//     console.log("Animal voice...");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak();
//     console.log("woof woof");
//   }
// }

// // const myDog = new Dog();
// // myDog.speak();




// const Person = {
//   greet(){
//     console.log(`Hello , my name`)
//   }
// }


