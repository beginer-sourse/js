// video 27 // for loop break and continue


// nested loop
for (let i = 1; i <= 10; i++) {
  if(i==8){
    continue  // 8 is skipped  // this skip current iteration
  }
  for (let j = 1; j <= 10; j++) {
    if(i==10){
      break // after execution breakes out of loop. 
    }
    console.log(`${i} * ${j} = ${i*j}`);
  }
  console.log('\n');
   
}

// while loop do while loop

let i=0
while (i<=10) {
  console.log(i);
  i++
  
}
console.log("\n");

// do while

let j=0
do {
  console.log(80);
  j++
} while (j<0);

console.log("\n");

// forof loop
// in forof loop values comes as a result but in forIn loop keys comes as a result
let arr=[3,2,4,5,454,231,123]
for (const i of arr) {
  console.log(i);
  // 3 2 4 5 454 231 123
}

// map
// know for key-value pair and original insertion order of the keys. also remain unique
let map=new Map()
map.set("a",100)
map.set("b",200)
map.set("c",300)

map.set("a", 2342) // Map(3) { 'a' => 2342, 'b' => 200, 'c' => 300 }

console.log(map); // Map(3) { 'a' => 100, 'b' => 200, 'c' => 300 }
console.log(map.get("c")); // 300

// forof
for (const i of map) { // keys // when [i] is like this it gives only keys but when not it gives
  console.log(i); 
  /*
    a 
    b 
    c 
  */
 /*
  [ 'a', 2342 ]
  [ 'b', 200 ]
  [ 'c', 300 ] 
 */
}

for (const [i,j] of map) {
  console.log(i,": ",j);
  /*
    a :  2342
    b :  200
    c :  300
  */
} // you can't iterat object in same way as map.




// for loop for object
// foIn works for object but not for map.
// forIn
// forIn gives only keys.

// in forof loop values comes as a result but in forIn loop keys comes as a result
console.log("\n");


let obj1={
  name:"ok",
  cpp:"c++",
  js:"javascript"
}
for (const key in obj1) {
  console.log(key); // keys
  /*
  name
  cpp
  js
  */
}
console.log('\n');

for (const key in obj1) {
  console.log(obj1[key]); // values 
  // this work only in forin loop in normal you have to write like console.log(Object.key(obj1)) console.log(Object.values(obj1))
  /*
  ok
  c++
  javascript
  */
} // map can't be itrate in forin 

let arr1=[32,32234,434,535]
for (const key in arr1) {
  console.log(key); // gives key of array that is index of array.
  console.log(arr1[key]);
  
  /*
  0
  32
  1
  32234
  2
  434
  3
  535
  */
}

// foreach loop comes in higher order in array
// it use callback function and callback doesn't have name
let arr2=['goat',"root","boot"]
arr2.forEach( (i) => {
  console.log(i);
  /*
  goat
  root
  boot 
  */
} );  

console.log('\n');


function printMe(i){
  console.log(i);
  
}
arr2.forEach(printMe); // give only refrence of function not execute it like printMe()

// you can use 3 paramters in forEach loop

arr2.forEach((item,index,arr) => {
  console.log(item," ",index," ",arr);
  /*
  goat   0   [ 'goat', 'root', 'boot' ]
  root   1   [ 'goat', 'root', 'boot' ]
  boot   2   [ 'goat', 'root', 'boot' ]
  */
});

let arr3=[
  {
    language:"English",
    state:"New York"
  },
  {
    language:"Hindi",
    state:"Delhi"
  },
  {
    language:"Marathi",
    state:"Mumbai"
  }
]
arr3.forEach(
  (item,index)=>{
    console.log(item);
    
    console.log(item.state ," ",item["language"]);
    
  }
);

