// singleton used in object.create not in object literals
// refrence data type
// object literals

let s1=Symbol("key1") // symbol is not constructor that why

let obj1={
  name:'ok',
  "email":"piyush@gmail.com", // this is how email (all the keys) is saved in computer.(by making it string)
  logIn:["Tuesday","Wednesday"],
  [s1]:"mykey1" // this how you use symbol in object.
}
// right syntax to use keys are
console.log(obj1["name"]);
console.log(obj1.name); 
console.log(obj1["email"]);
console.log(obj1[s1]); // this how you call symbol

obj1["email"]="new@gamil.com"
// Object.freeze(obj1) // it freeze the object. that why you can't change anything in object
console.log(obj1);
obj1["email"]="newEmail@gamil.com"
console.log(obj1);

obj1.fun1=function(){
  console.log("this is ");
}
obj1.fun2=function(){
  console.log(`This is ${this.name}`); // this keyword use for when we are calling for objects element
}
console.log(obj1.fun1); //[Function (anonymous)]
console.log(obj1.fun1()); // this is //undefined
console.log(obj1.fun2());

