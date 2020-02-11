// Objects are the only thing in java script that is PASS BY REFERENCE - they are passed by the memory location on the computer
// How do you get an object TO PASS - by writing a for loop that iterates through to objects and test every key:value pair

// Everything else is PASS BY VALUE - literally just the value

console.log("2" + 2);
console.log(2 + "2");
console.log(2 + 2);
console.log("2" + "2");
console.log(true + true);
console.log(2 + true);

console.log(true + true + "true" + "false");
console.log(1 + 1 + "2" + "3");
// once a string is encountered going from left to right, EVERYTHING is treated as a string from that point forward
console.log(!"1" === false);
// a string ALWAYS returns TRUE

console.log("" === false);
console.log("" == false);
// NEVER USE A DOUBLE EQUAL - FUZZY EQUATORS

// === means strict equal (both type & value)

let num = 0;

if (num === 0) {
  console.log("OK");
} else {
  console.log("NOPE");
}

if (num === 0) {
  console.log("OK1");
}

if (num !== 0) {
  console.log("NOPE1");
}

if (num === 0) {
  console.log("OK2");
}
console.log("NOPE2");
// Add in return and then it will kick you out of the function so it doesn't return BOTH
