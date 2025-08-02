const a=new Number(100000.0000)
console.log(a.toString().length);
console.log(a.toFixed(2));

// 10,00,00,000
console.log(a.toLocaleString('en-IN'));

// Maths

console.log(Math.abs(-4));
console.log(Math.round(9.23));
console.log(Math.floor(9.23));
console.log(Math.ceil(9.23));

// random will always comes between 0 to 1. it will never return 1 it will close to 0.999999
console.log(Math.random())
console.log(Math.floor((Math.random()*10)+1)); // 1 to 10. so that why it will not return 11.


const max=100
const min=40
// important
console.log(Math.floor(Math.random()*((max-min)+1)+min)); // between 40 to 100

//  video 13   Date and time 
let myDate= new Date();
console.log(myDate.toString())
// Tue Jun 17 2025 20:04:32 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString())
// 6/17/2025, 8:04:32 PM
console.log(myDate.toDateString());
//Tue Jun 17 2025

// month start from 0
// let createDate= new Date(2025,3,13)
// let createDate= new Date("2025-9-23")
// let createDate= new Date("09-23-2005")
let createDate= new Date(2025,3,13,5,9,34)  // month start from 0-11
console.log(createDate.toString());

// timestamp
let myDate1= Date.now(); // millisecond
console.log(myDate1);
console.log(createDate.getTime());

console.log(Math.floor(myDate1/1000)); // convert millisecond to seconds

/*
# 
1750170872953
1744501174000
1750170872
*/


