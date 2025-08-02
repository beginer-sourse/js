function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2
/*
everything in js is an object actually means
everthing came from Objects

string ------> Object------>null(undefined)
array ------> Object------>null(undefined)
functions ------> Object------>null(undefined)
*/

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
// in prototype there are methods that can be use. or you can add them in prototype
console.log(multipleBy5.prototype); // {}
// prototype shows empty but it have methods in it. 

// this will show how protype have methods in them and how we can use it

// {this} referes to current contex and protype are in current contex.


/*
  Prototype is how JavaScript does inheritance
  Yes. All functions (which can act as constructors) have a .prototype object that is
  used when you create instances using the new keyword.
*/

function createUser(username,score){ 
  this.username=username
  this.score=score
}
// this is constructor function which creates object when called on backseen.

// this helps us to create our own methods in functions like in array there are 
// different methods all are in prototype. and if we can access it we can create our own methods

// construtor function  can use prototype
createUser.prototype.increment=function(){
  this.score++ // {this} shows which score to increment user1 or user2.
  // this helps us detemine which instance we are talking about user1 or user2
} // with this we create new method. remember all the methods are in protoype in js

createUser.prototype.printMe=function(){
  console.log(this.score)
}
// with word {new} we created an new every time instance.

let user1= new createUser('hero',89)
let user2= new createUser('villan',92)

user1.printMe() // 89

user2.printMe() // there is error that shows printMe like methods is not there
// but printMe method is in prototype but it shows only when we use {new} word  
// it shows new methods is added in protoype.


// If your object doesn’t have a certain property or method, JavaScript goes up the
//  prototype chain to check if its prototype has it.

//  user1 --> User.prototype --> Object.prototype --> null



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property 
of the constructor function. This means that it has access to properties and methods 
defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return value 
is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called, if it
doesn't return a non-primitive value (object, array, function, etc.), the newly 
created object is returned.

*/
