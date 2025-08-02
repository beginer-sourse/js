// singleton object
let obj1=new Object // this singleton object 

let obj2={} // not a singleton object
obj2.id=Symbol("123er")
obj2.email="some@gmail.com"
obj2.name={
  fullname:{
    firstname:"boot",
    lastname:"root"
  }
}
console.log(obj2); 
console.log(obj2.name.fullname.firstname);
// optional chain when there is no variable of that name in object we use(?) example
// console.log(obj2.name?.fullname.firstname);
let obj3={1:'a',2:'b'}
let obj4={3:"c",4:'d'}
let obj5=Object.assign({},obj3,obj4) // {} empty object is {target} and obj3,4 are source.
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// spread operator
let obj6={...obj3,...obj4}
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// this is how data comes from database 
let data=[
  {
    name:"something"
  },
  {
    callbook:[9023,32324]
  }
]
console.log(data[1].callbook);

// some methods of object
// keys,values,entries,hasOwnproperty
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));
/*
[
  [ 'id', Symbol(123er) ],
  [ 'email', 'some@gmail.com' ],
  [ 'name', { fullname: [Object] } ]
]
*/

console.log(obj2.hasOwnProperty("name")) //true

// video 18  Object de-structure

let object1={
  name:"good Lad",
  email:"mot@gamil.com"
}
console.log(object1.name); // rather than write whole object name again and again. it is better to de-structure

const {name:n}=object1
console.log(n);

// https://jsonformatter.org // this is for understand api and it format
// https://randomuser.me // here you can find different api's


// video 19 functions

function sum1(a,b){ 
  return a+b
}

function sum2(a,b){
  if(!a || !b){
    console.log("Please put some value");
    return
  }
  return a+b
}


function sum3(a=3,b=5){ // set default if there is no argumentaed provided.
  if(!a || !b){
    console.log("Please put some value");
    return
  }
  return a+b
}

let r1=sum1(9,2)
console.log(r1); // 11

let r2=sum2() // Please put some value // undefined
console.log(r2);

let r3=sum3()
console.log(r3); //8

// video 20 // functions with objects
let fun3=function(val1,val2, ...num1){ // in this ... used as rest operator not as spread
  return num1
}
console.log(fun3(93,2,3,23,24,12,32,43)); //[ 3, 23, 24, 12, 32, 43 ]

let object2={
  username:"nod",
  price:34000
}

function handleObj(anyObj){
  console.log(`This is ${anyObj.username}, and its price ${anyObj.price}`);
}
handleObj(object2)
handleObj({
  username:"root",
  price:89000
})

const arr1=[3,2,4,53,51]
function forSecVal(array){
  return array[2]
}
console.log(forSecVal(arr1));
console.log(forSecVal([3,23,55,64]));

// video 21 global,local scope

// let a=90
// const b=100  // these are in global scope
// var c=20

if(true){
 let a=90
 const b=100
 var c=20
 d=90 
}
// console.log(a);
// console.log(b);
console.log(c); // var comes out of local scope while let const didn't
console.log(d);  // this will also comes out of scope


// video 22 scope level and mini hoisting

console.log(fun1(2)); // you can call function before initialization
function fun1(num2){
  return num2
}

// console.log(fun2(3)); //  Cannot access 'fun2' before initialization this might be because function stored in variable
let fun2=function(num2){ // this function is stored in variable
  return num2
}

console.log(fun1(2));
console.log(fun2(3));

