// Named Parameters
// write a function that takes two named parameters:
function twoNamed(x, y) {
  console.log(x);
  console.log(y);
  return x + y;
}

// print each named parameter,
// then return the parameters added together

// invoke the function and pass in two numbers
console.log(twoNamed(3, 7));
// invoke the function and pass in more than two numbers
console.log(twoNamed(4, 5, 6));
// invoke the function and pass in only one number
console.log(twoNamed(8));
// change the function to set default values for the parameters
function twoNamedDef(x = 1, y = 10) {
  console.log(x);
  console.log(y);
  return x + y;
}
// again, invoke the function and pass in only one number
console.log(twoNamedDef(1));

// Rest Operator
// add a rest operator to the function's parameters (function f(x,...any) {})
// any is the name for all the rest of the parameters
// if you do 'return x, any' and say x is 1 and ...any is 2, 3, 4, you will get back 1, [2,3,4]

function twoNamedRest(x = 1, y = 10, ...rest) {
  console.log(x);
  console.log(y);
  console.log(rest);
  return x + y + rest[0];
}

// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
console.log(twoNamedRest(2, 6, 99));

let newVar = twoNamedRest(2, 6, 99);

console.log(newVar);
// function f(x, ...any) {
//   return [x, any];
// }

// console.log(f(1, 2, 3, 4));
