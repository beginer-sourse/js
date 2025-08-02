// getter and setter

// get is used to define a method that returns a property value.

// set is used to define a method that sets/updates a property value.



class user{
  constructor(username,hobby){
    this.username=username
    this.hobby=hobby
  }
  /*
This invokes the set name() method, not a direct assignment to a property.

So it doesn’t cause an infinite loop, because:

The setter sets a different property (this._name) inside itself.

If the setter had written this.name = value, then yes — it would cause infinite recursion (stack overflow).
*/
  set username(value){ 
    // we use new property and give that property value back.
    this._username=value
  }

  get username(){
    return this._username;
  }
}

let user1=new user('lion','eating')
console.log(user1.username); // lion



// this is through defineProperty

function User(emaill, password){
    this._email = emaill;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email =  ` Hi ${value}`
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

/*
this._email and this.email are two completely different properties.
this._email is a normal property on the object (a data field).

this.email is an accessor property — it’s defined with a get and set.

They are independent.

So:

this._email = email assigns the value "chai@chai.com" directly to _email

Then you define a getter/setter on a new property email that reads/writes to _email

There’s no circular reference, because you're not assigning this.email = email inside the setter.
*/

const chai = new User("chai@chai.com", "chai")
console.log(chai._email); // chai@chai.com  
console.log(chai.email); // CHAI@CHAI.COM 

chai.email='New@gmail.com'
console.log(chai._email); //  Hi New@gmail.com
console.log(chai.email); // HI NEW@GMAIL.COM


