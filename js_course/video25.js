// video 25 
// call stack

// js is single threaded
// in callstack it works like stack LIFO
function one() {
    console.log('o')
    two()
}
let two=()=>{
    console.log("t")
    three()
}
function three() {
    console.log('3')
}
one()
two()
three()