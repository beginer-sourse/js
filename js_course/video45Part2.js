// Inhertiance and staticProps


// staticprops restrict property to accessable to instance and child class

class User{
  constructor(username){
    this.username=username
  }
  PrintMe(){
    console.log(`Printed : ${this.username}`);
    
  }

  static newMethod(){
    console.log("this method is restricted");
    
  }

}
// extend ketword use to inhertant User
class Teacher extends User{ // instance of user. inhertanted User
  constructor(username,age,exp){
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(username) // behind sence it add {this} on is own
    this.age=age
    this.exp=exp
  }

  tachMethod1(){
    console.log(`This contain teacher details ${this.username},  ${this.age},  ${this.exp}`);
    
  }
}

let test1=new Teacher('Emily',78,60)
console.log(test1); //Teacher { username: 'Emily', age: 78, exp: 60 }
test1.tachMethod1() // This contain teacher details Emily,  78,  60


//test1.newMethod() // now this child class instance can't access this method.


let User1=new User("Bro")
console.log(User1); //User { username: 'Bro' }
User1.PrintMe() // Printed : Bro

console.log(test1 instanceof User); // true


// User1.newMethod() // this instance of User also can't access that method
