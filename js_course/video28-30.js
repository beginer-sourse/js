// video 28 // filter ,map and reduce

let arr1=[1,2,3,4,5,6,7,8,9,10]
arr1.forEach((i)=>{
  console.log(i);
  
});

console.log('\n');


// filter 
// filter create shadow copy of given arrays.
// needs callback function
// filter returns what you seek (gives only true value according to condition)
// In this we use implicit arrow function
let f1=arr1.filter( (item)=>(item>4)) // it will returns the value
console.log(f1); // [ 5, 6, 7, 8, 9, 10 ]
 

// In explit arrow function you have to always return it

// but when we use explict arrow function
let f2=arr1.filter((item)=>{item>7}) // it return [] because of {} [curly brackets] creates scope 
// and we have to return it. 
console.log(f2);

let f3=arr1.filter((item)=>{ return item>7}) // it return [] because of {} it creates scope 
// and we have to return it. 
console.log(f3); //[ 8, 9, 10 ]

let arr2=[]
arr1.forEach((i) => {
  if(i>8){
    arr2.push(i)
  }
});
console.log(arr2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let books1=books.filter((bk)=>{ return bk.genre=="History" && bk.edition>2000})
console.log(books1);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/


// map in array. 
// you can use 3 parmeters in this element, index, array
//The map() method of Array instances creates a new array populated with
//the results of calling a provided function on every element in the calling array.
 
let arr3=[2,13,4,5,3,53]
let arr3map=arr3.map((i)=>(i+10))  // [12,23,14,15,13,63]
console.log(arr3map);


// chainging of map and filter
let arr4Chain = arr3.map((i)=>(i+90))
               .map((i)=>i*100)
               .filter((i)=>{return i>9500})
console.log(arr4Chain);


// reduce()  
//in reduce it uses goes through all elements in array and give result single element
// initial value of accmulator is set by user and current value is taken from array of 
// current element. and then accumulator takes sum of acc(accmulator) and curr(current).

// takes callback function
// let arr3=[2,13,4,5,3,53]
let arr5Red=arr3.reduce((acc,curr)=>{
  console.log(`acc valur ${acc} and curr value ${curr}`);
  
  return acc+curr
},0)
console.log(arr5Red);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let shopp=shoppingCart.reduce((acc,curr)=>{
  return acc+curr.price
},0)
console.log(shopp);

