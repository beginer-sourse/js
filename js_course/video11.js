// video 11 strings

let game=new String("Piyush");
console.log(typeof(game));

console.log(game.toUpperCase());

console.log(game.indexOf("y"));
console.log(game.charAt(5));

const game1=game.substring(0,4);
console.log(game1);
// in sub string you can't use negative number. but in slice you can
// last number are not included.
const game2=game.slice(-5,2)
console.log(game2);

// trim the staring and end space.
const game3="    DeathKnight    "
console.log(game3.trim());

// replace
let game4=game3;
console.log(game4.replace("Knight","King"));
console.log(game4.includes("Death"));

console.log(`There are 4 games ${game1} ${game2} ${game3} ${game4}`);

const st=new String("this is a statement for split");
console.log(st.split(" "));
