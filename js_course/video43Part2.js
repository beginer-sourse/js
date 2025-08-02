// prototype
// The .prototype property exists only on functions (constructor or class)
//  — not on regular objects.

let myHeroes=['Thor','spiderMan']

let heroPower={
  thor:'lighting',
  spiderMan:'Web',

  power:function(){
    console.log(`powers of superHeroes`);
    
  }
}

// if all things goes through objects then they can access methods of objects.
// if all things inheritance objects but object can't inheritance their methods that are
// in prototype below are given example

Object.prototype.PowerOf=function(){
  console.log('With Powers comes responsibilty');
  
}

// it access Main objects prototype methods 
// heroPower.prototype.PowerOf(); heroPower is a plain object literal, not a constructor 
// function, so it doesn't have a .prototype property.

heroPower.PowerOf(); // With Powers comes responsibilty

// it can access the methods of Objects.


// this can also access beacuse it inheritant the Objects methods
myHeroes.PowerOf() // With Powers comes responsibilty

// can Objects do same no they can't they didn't inheritant them
Array.prototype.Heros=function(){
  console.log('These are heroes');
  
}
myHeroes.Heros() // These are heroes
// heroPower.Heros() // heroPower.Heros is not a function




// Inheritance

// __proto__ is a reference to the internal prototype ([[Prototype]]) of an object.
//  It's how JavaScript enables inheritance between objects.

let user={
  name1:'ok',
  email:"example@gamil.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,
    __proto__:Teacher
}

const newUser = {
  name: "Alice",
  age: 25,
  hobby: "Reading"
};

// Teacher inhert TeachingSupport object. through __proto__
// TeachingSupport inhert Teacher Object  
// both inhertant eachother

//This is a circular prototype chain, which is not valid or recommended. JavaScript 
// will break or behave unpredictably if you try to create a loop in the prototype chain.
// Teacher.__proto__=TeachingSupport

Teacher.__proto__=user

console.log(Teacher.name1);
console.log(TeachingSupport.name1);

// modern syntax 
// In this newUser inhertant user
Object.setPrototypeOf(newUser,user)
console.log(newUser.name1);


let str=' Piyush Yadav '
// trim only removes whitespace from the beginning and end of a string.

// In this {this} referce to current contex
String.prototype.trueLength=function(){
  console.log(this); // [String: ' Piyush Yadav ']
  
  console.log(`${this}`); //  Piyush Yadav
  console.log(`True Length is ${this.trim().length}`)
  
}

str.trueLength() // True Length is 12