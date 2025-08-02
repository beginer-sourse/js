// class constructor

// class work same like constructor function
// both can use prototype, functions are stored in prototype, creates new instances


class User{
  constructor(username,age,password){
    this.username=username
    this.age=age
    this.password=password
  }

  encrptpassword(){
    console.log(`this is passwoed${this.password}`);
    console.log(this);
    
  }
}

/*
The object literally contains the function as a property.
So when you do console.log(this) from method1, it prints the whole object, including
 the function
/*


/*
Class methods like encrptpassword() are not inside the instance object itself.
Instead, they live on the prototype of the class.
*/


// create new instance 
let User1=new User('God War',999,'Uni')
console.log(User1.hasOwnProperty('username')); // true

console.log(User1.hasOwnProperty('encrptpassword')); // false 
// because User1 is new instance of object that contain -----
//  User { username: 'God War', age: 999, password: 'Uni' }
// and function is stored in prototype of class you created.

console.log(User.prototype.hasOwnProperty('encrptpassword'));// true
// console.log(User1.prototype.hasOwnProperty('encrptpassword'));
// didn't work beacuse user1 is an object. they can't access prototype. unlike constrctor function and class



User1.encrptpassword()
// this is passwoedUni
// User { username: 'God War', age: 999, password: 'Uni' }

console.log(User1); // User { username: 'God War', age: 999, password: 'Uni' }


/*
let user1=new User() // example
user1.sayHi()

JavaScript looks at user1 → does it have sayHi? // {in it's property}

// user1 inhertant User's property. if method isn't in user's property then it inherent
user's prototype
If not, it looks at user1.__proto__ → which is User.prototype

If still not found, it goes to Object.prototype

Finally, it reaches null (end of chain)
*/

// behind scene
function newUser(username,age,goal){
  this.username=username
  this.age=age
  this.goal=goal
}

/*
You used new to create an instance (changeUser), which:

Creates a new empty object

Sets its __proto__ to newUser.prototype

Binds this inside newUser() to that new object
*/
newUser.prototype.password=function(){ // these are methods in prototype
  console.log('this is password of new user');
  
}
newUser.prototype.uppercase=function () {
  console.log(this.username.toUpperCase());
  
}
// with {new} keyword the new function is added in prototype of that instance or all
// new instance of  constructor function. without {new} keyword it doesn't add in new
// instance
let changeUser= new newUser(' world king',99999,'rule')
console.log(changeUser); // newUser { username: ' world king', age: 99999, goal: 'rule' }
changeUser.password()
changeUser.uppercase()
