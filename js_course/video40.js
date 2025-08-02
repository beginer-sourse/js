// promise
// promise uses callback function and then also


let promiseOne=new Promise((reslove,reject)=>{
  setTimeout(() => {
    console.log('promise one created one'); // resolve will occur after async task is completed
    reslove() 
  }, 1000);
})

promiseOne.then(()=>{
  console.log('First promised is consumed');
  
})

// second promise

new Promise((reslove,reject)=>{
  setTimeout(() => {
    console.log('Second promise is created ');
    reslove()
  }, 1000);
}).then(()=>{
  console.log('Second promise is consumed');
  
})

// this is 3rd promise
let promiseThree=new Promise((reslove,reject)=>{
  setTimeout(() => {
    console.log('this is 3rd promise ');
    reslove({user:"ok",email:"no@gamil.com"})
  }, 1000);
})

promiseThree.then((user)=>{
  console.log(user);
})


// this is 4th promise
/*
let user={user:"ok",email:"no@gamil.com"} 

let promise4=new Promise((reslove,reject)=>{
  setTimeout(() => {
    console.log('this is 4th promise ');
    reslove(user)
  }, 1000);
})

promise4.then((user)=>{
  console.log(user);
})
*/



// this is Fourth Promise
let promiseFour=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let success=false
    if(!success){
      resolve({userName:"God",email:"no@gamil.com"})
    }
    else{
      reject('Error')
    }
  },2000)
})
.then((user)=>{
  return user.userName
})
.then((falot)=>(console.log(falot)))
.catch((err)=>{
  console.log(err);
})
// using a semicolon (;) inside an implicit return, which is not allowed in JavaScript.
.finally(()=>(console.log('promise is either resolved or rejected')))



// this is fifth promise
let promiseFive=new Promise((reslove,reject)=>{
  let success=true
  setTimeout(()=>{
    if(!success){
      reslove('Fifth is resolved')
    }
    else{
      reject('fifth is rejected')
    }
  },2000)
})

// async always returns promise
// await Can only be used inside async functions.

// Pauses the execution of the function until the promise resolves.

const consumeFive=async ()=>{
  try {
   let response= await promiseFive
   console.log(response);
   
  } catch (error) {
    console.log("this is error ",error);
    
  }
}
consumeFive().then(()=>(console.log('hello')
))


let PSix=async()=>{
  try {
    // await beaucse it will take time. or you can say until promise is resolved of fetch
    let responce= await fetch('https://api.github.com/users/hiteshchoudhary');
    console.log(typeof responce);  // string
    let data= await responce.json() // it takes time to convert that why await is used
    console.log(data);
    
  } catch (error) {
    console.log('Error');
    
  }
}
PSix()

 
