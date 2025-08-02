// call and this

// / call function in other function
function setUser(username){
  // Calls the function immediately with a specific this value.
  this.username=username // {this} refers to global object{that are windows in browser and {} in node} 
  // if it is called in another function.
  
  console.log('setUser functio is callled');
  
}

function createUser(username,email,age){
  // so that why we use {call} to subsitue this {{this} of setuser} to current contex that is new object

  // Calls a method of an object, substituting another object for the current object.
  // "Hey! Call the setUser() function, and force {this} inside it to be the same {this} as in createUser."
  setUser.call(this,username) // call function in other function
  this.email=email
  this.age=age
}

let newUser= new createUser('God of Gods','god@gmail.com',999999999999)

// createUser { email: 'god@gmail.com', age: 999999999999 } 
/*
You're calling setUser(username) without binding the correct this context.
So this inside setUser does not point to the new object being created by new createUser(...).
It ends up pointing {global object in callstack} to window (in non-strict mode) or undefined or {} {in node}
(in strict mode), so the username is not added to your new object.
*/

console.log(newUser);
/*
createUser {
  username: 'God of Gods',
  email: 'god@gmail.com',
  age: 999999999999
}
*/
