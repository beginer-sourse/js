// video 23 This and arrow function
const users={
  name:"noob",
  welcome:function(){
    console.log(`Hi ${this.name}`);
    
  }
} // this is used for current context
users.welcome()
users.name="enfc"
// n="web"  // this doesn't change name to change users.name="web"
users.welcome()
// console.log();

console.log(this); // returns in node {} but in browser it returns windows object.

// this can't be used in function 
function one(){
  let name="ok"
  console.log(this); // objects of different kinds
  
  console.log(this.name); // undefined
  
}
one();

let o=function one(){
  let name="ok"
  console.log(this); // objects of different kinds
  
  console.log(this.name); // undefined
  
}
o();

// arrow function // explit return
let fun1=()=>{
  let name="ok"
  console.log(this); // {}
  console.log(this.name); // undefined
  return 1
  
}
fun1();
console.log(fun1());

()=>{ // in explit function always return if you used curly bracket {}
  return 1
}

// implicit in arrow function
let fun2=(num1,num2) => num1+num2
let fun3=(num1,num2) => (num1+num2)
console.log(fun2(4,2))
console.log(fun3(123,32));

// video 24 
// Immediately Invoked Function Expressions IIFE
/*
1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the 
  function and other for execution ()();
2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other 
   variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
3. To write two or multiple IIFE one should be end with semicolon ;
*/

// IIFE

(()=>console.log("not")
)();

((name)=>console.log(`${name}`)
)("vote")