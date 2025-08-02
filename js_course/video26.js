// video 26 // control flow

const userEmail = "hahitesh.ai" 
if (userEmail) { // consider the string true if string is not empty "" .
console.log("GOt user email");
}
else{
console.log ("Don't have user email");
}

// flasy values
// false, 0,"",-0,BigInt 0n, null, undefined, NaN

// truthy values
// "0","false", " ",[],{}, function(){}

let arr=[]
if(arr.length===0){
  console.log("array is empty");
  
}
else console.log("it is not empty");

let obj1={}
if(Object.keys(obj1).length===0) console.log("Object is empty");
else console.log(" Object is not empty");

// Nullish Coalescing Operator (??)
// sometimes values are comes null, undefined or nothing. so to adjust the code this operator is used.
let val1
// val1=10 ?? 34  // 10
// val1=null ?? 10 // 10
val1 =null ?? 93 ?? 10
console.log(val1); // 93

// terniary operator
// condition ? true : false

let a=4
"4"==a ? console.log("ok") : console.log("not ok");

// switch case 
let day="tuesday"
switch (day) {
  case "monday":
    console.log("it is monday");
    
    break;

  case "tuesday":
    console.log("it is tuesday");
    // break;
    // if we don't use break it will execute every case.
    
  default:
    console.log("it is neither monday nor tuesday");
    
    break;
}