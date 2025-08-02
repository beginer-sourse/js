// video 14 arrays

let arr1=[1,2,3,4,5]
let arr2=["ok","good"]
let arr3 =new Array(10,30,23,42)
console.log(arr3[3]);
arr3.push(90)
console.log(arr3);
arr3.pop() // remove last elemnt from array
console.log(arr3);

// shift and unshift opeartor
 
arr3.shift(); // removes first element from array
console.log(arr3);
arr3.unshift(100) // adds elemnts from start
console.log(arr3); 

console.log(arr3.includes(34));
console.log(arr3.indexOf(100));

// join
console.log(typeof(arr3.join())); // it binds all element and convert them into string
console.log(arr3.join())

// slice, splice
let arr4=arr1

console.log("oriinal array",arr1);
console.log(arr4.slice(1,3))

console.log("oriinal array after slice",arr1);

console.log(arr4.splice(1,3));
console.log("oriinal array after splice",arr1);
console.log(arr1);

/*
    oriinal array [ 1, 2, 3, 4, 5 ]
    [ 2, 3 ]
    oriinal array after slice [ 1, 2, 3, 4, 5 ]
    [ 2, 3, 4 ]
    oriinal array after splice [ 1, 5 ]
    [ 1, 5 ]
*/

// video 15
// concat and spread operator
// merge arrays like two array merge

let array1=[1,2,3,4,5]
let array2=[10,20,30,40,50]
array1.push(array2) // [ 1, 2, 3, 4, 5, [ 10, 20, 30, 40, 50 ] ]
console.log(array1);

// concat
array1=[1,2,3,4,5]
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let array3=array1.concat(array2)
console.log(array3);

/*
    [
    1,  2,  3,  4,  5,
    10, 20, 30, 40, 50
    ]
*/

// spread operator
let array4=[...array1,...array2]
console.log(array4);

// flat 
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let array5=[1,2,4,[23,42,12,2],90,2,[322,42],[903]]
let flatArray=array5.flat(Infinity);
console.log(flatArray); 
/* 
[
    1,   2,  4, 23,  42,
    12,   2, 90,  2, 322,
    42, 903
]
*/
console.log(array5);

console.log(Array.isArray([78,34]));
console.log(Array.from("Piyush")); //[ 'P', 'i', 'y', 'u', 's', 'h' ]
console.log(Array.from({name:"piyush"})); // [] i can't decide what to make an array key or its value.


const s1=100
const s2=234

console.log(Array.of(s1,s2)); //[ 100, 234 ]


let newArr=new Array(10)
newArr.forEach(element => {
    console.log(i);
    
});