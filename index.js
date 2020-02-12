let variableName = "a";

// bang indicator (!) says if variable (!variableName) is empty, give a falsy value, otherwise give truthy?

if (!variableName) {
  console.log("falsy");
} else {
  console.log("truthy");
}

// Logical Operators
// And (&&), Or (||)

let food = "chicken";
let drink = "";
let snack = "chips";

if (drink || food) {
  console.log("That's a meal");
} else {
  console.log("you gonna be hungry");
}

if (drink && food) {
  console.log("That's a meal");
} else {
  console.log("you gonna be hungry");
}

if ((drink && food) || snack) {
  console.log("That's a meal");
} else {
  console.log("you gonna be hungry");
}

if (drink && food && snack) {
  console.log("That's a meal");
} else {
  console.log("you gonna be hungry");
}

console.log("_______________");

// Logical Operators
// ? what do you expect each line to print?
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(!(true && false));
console.log(false || !false);

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log("" && 0);
console.log(undefined || null);
console.log(!``);
console.log(!(1 && "false"));
console.log(NaN || !"true");

console.log("_______________");

// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
let num = 0;
// * your if statement here *
// if (!(num && 0)) {
//   console.log("The number is zero");
// } else {
//   console.log("its not zero");
// }

console.log("_______________");

// * your if statement here *
if (!num) {
  console.log("The number is zero");
} else {
  console.log("its not zero");
}
