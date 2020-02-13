// TODO: using the function expressions below, refactor them into function declarations
// const greet = function() {
//   console.log("Hello!");
// };

function greet() {
  console.log("Hello!");
}

// invoke a function like this:
greet();

// const threeModTwo = function() {
//   console.log(3 % 2);
// };

function threeModTwo() {
  console.log(3 % 2);
}

threeModTwo();

// let age = 18;
// const checkDrivingAge = function() {
//   if (age >= 16) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

let age = 18;
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkDrivingAge();

// print the function below
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}

console.log(myNumberFunction);

// now, invoke the myNumberFunction function
myNumberFunction();

// print just the function of console.log (no invocation)
console.log(console.log);

// Don't really need a console.log in your function to output the results of the function...can use 'return'
function y() {
  return "This string is a return";
}

y();

console.log(y());

function x() {
  console.log("This string is a return");
}

x();

console.log(x());

console.log("_________________");
// Return can help us with if...else statements
let apple = 100;

function check() {
  if (apple > 5) {
    return "Greater than 5";
  }
  return "Less than or equal to 5";
}

console.log(check());

console.log("_________________");

// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}

console.log(myNumberFunction());

// change the function above to return a value


// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log("This will never print because it is after the return statement.");
}

// ? will the following function short circuit?
let height = 50;
function checkCircusRides() {
  if (height < 48) {
    return "Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
}

console.log(checkCircusRides());
// change the function above to use short circuiting
