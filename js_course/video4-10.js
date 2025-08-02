console.log("hello");


// video 4

const accountId=123;
var accountId2=12345;
let accountId3=1234567;
accountId4=12345678910
// never use var
// var is function scoped, let and const are block scoped
// const can't be reassigned, let can be reassigned

console.table([accountId,accountId2,accountId3,accountId4]);


// video 6  Data type conversion

let a=undefined
console.log(typeof (a));
let b= Number(a);
console.log(typeof(b));
console.log(b);


/*
  a=>"90"
  a=90

  a=>"90abc"
  a=NaN (Not a number)

  a=true,false 
  a=1,0

  a=null,undefined
  a=0,NaN

  // number, boolean, string conversion 
*/


//video 7 why sting to number is confusing

console.log(2+5+"h"); // 7h
console.log("h"+2+4);// h24

console.log(+true); // 1
console.log(+""); // 0

// video 8 comparsion of datatypes

/*
  This happens because:
  Comparisons like >, <, >=, <= convert both sides to numbers
  But == has its own weird set of rules and doesn't always coerce types in a consistent way
*/
console.log(null>0);
console.log(null==0);
console.log(null>=0);

// if we put undefined in place of null it will always gives false.

/*
JavaScript is a dynamically typed language. This means that the type of a variable is checked during runtime,
not during compile time. In contrast, statically typed languages require explicit type declarations for variables, 
and the type checking occurs before the code is executed.
*/

// typeof null is object and object is function.


// video 10 stack and heap memory management
/*
stack is used for primitive datatypes and heap is used for reference datatype.
primitive datatype copies the original message but in refrence it refer to original message.
if you change anything in primitive then original copy remain change. change only occur in copy.
but in refrence change occur in original copy.
symbol is datatype used for unquie value
*/

// refrence objects, array, function.

let v1=90;
v2=v1;
console.log(v2);
v2=100
console.log(v1);
console.log(v2);

let var1={
  Id:Symbol("123"),
  name:"ok"
};

let var2=var1;
console.log(var2);
var2.name="noob"
console.log(var1);

