//  Classes uses the prototype internally  . When you write a modern class in JavaScript, the engine immediately translates it into a traditional prototype-based constructor function.

// class User{
//    constructor(name){
//     this.name = name
//    }

//    login(){
//     console.log(`Hey ${this.name}`)
//    }
// }

//  How Js read in internally :-

function User(name) {
  this.name = name;
}

User.prototype.login = function () {
  console.log(`Hey , ${this.name}`);
};

// new keyword -> It performs four hidden steps:-
// 1. It creates a brand new, empty object in memory {}.
// 2. It links this new object's internal prototype (often referenced as __proto__) directly to the User.prototype object.
// 3. It calls the constructor function, binding the this keyword to the newly created object.
// 4. It return the new object.

