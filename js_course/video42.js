// Objects literals

let user={
  username:'God',
  logIn:80,

  method1:function(){
    console.log('this is method1');
    console.log(this.username); 
   console.log(this); // {this} is talking about current contex 
    
    // {this} refers to the object that is calling the method
  }
}

console.log(user); // { username: 'God', logIn: 80, method1: [Function: method1] }
console.log(user.username); // God
console.log(this); // {}
console.log(user.method1()); 
/*
  this is method1
  God
  { username: 'God', logIn: 80, method1: [Function: method1] }    
*/

user.method1() // You're calling the method as a property of the object 
const {method1: method1}=user // extracting the function from the object — so it loses its context.
method1() // all the details in function by using this.


// this is constructor function

// In Js, when you create an instance, you're creating a new object based on a constructor function or class.
// you can't use this in arrow function
let User1=function(username,age,hobby){
  this.username=username // this.username is variable. you can change name. // this is talking about current contex.
  this.age=age
  this.hobby=hobby

  
}

/* // in constructor function
  JavaScript creates a new object behind the scenes.
  this refers to that new object.
  Properties like this.username get attached to the newly created object.
  user1 is just a constructor function, not an object.
*/

let user1=new User1('GoodBoy',20,'nothing')
console.log(user1); // User1 { username: 'GoodBoy', age: 20, hobby: 'nothing' }
let user2=new User1('BadBoy',20,'nothing')
console.log(user2.constructor); // [Function: User1]

console.log(user1 instanceof User1); // true
console.log(user2 instanceof Object) // true

/*
instanceof operator tests the presence of constructor.prototype in object's 
prototype chain. This usually (though not always) means object was constructed with constructor.
*/