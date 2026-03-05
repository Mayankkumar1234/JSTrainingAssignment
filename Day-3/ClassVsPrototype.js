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

function User(name){
  this.name = name
}

User.prototype.login = function(){
  console.log(`Hey , ${this.name}`)
}