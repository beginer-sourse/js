// some Hidden propeties about Object

// Arrow functions do not bind their own this — they inherit from the parent scope.

console.log(Math.PI); // 3.141592653589793
// you can't change it.
Math.PI=890
console.log(Math.PI); // 3.141592653589793 // remains same after changing.

let descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false, // it will not change
  enumerable: false, // it will not iterate
  configurable: false
}
*/

console.log('\n');


let user={
  username:'Volvo',
  age:89,

  fun1:function () {
    console.log('Experiment one ');
    
  }
}



let descriptor1=Object.getOwnPropertyDescriptors(user)

console.log(descriptor1);

/*
{
  username: {
    value: 'Volvo',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 89, writable: true, enumerable: true, configurable: true }
*/
user.username="BMW"
console.log(user);


Object.defineProperty(user,'username',{
  enumerable:false,
  writable:false
})

let descriptor2=Object.getOwnPropertyDescriptor(user,'username')
console.log(descriptor2);

for (let key in user) {
  // [Function: fun1] in output // so this we call code fat na
  // it was not value we were expecting.

  if(typeof user[key]!='function'){ 

    console.log(key); // age //it brings age only beacuse username enumerbale is false
    console.log(user[key]); // 89 // see it didn't show username value beacuse enumerbale
  }


}

// if i used destructure before BMW then username would have volvo in username

user.username="Masrati"
console.log(user.username); // BMW // didn't change beacuse writable is false.

user.age=32
console.log(user.age); // 32 like i was able to change 



