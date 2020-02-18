// refactor the functions below into arrow syntax
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}

const a = () => ((2 ** 2 + 3) % 4) * 14;
//
function greet(name) {
  return `Hello, ${name}`;
}

const b = name => `Hello, ${name}`;
//
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

const c = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;
//
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

const d = num => {
  let triple = num * 3;
  return triple / 2;
};
//
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

const e = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
//
console.log(myNumberFunction());
console.log(greet("Ethan"));
console.log(timeOfDayGreet("Ethan", "morning"));
console.log(tripleAndHalf(3));
console.log(sumTwoNumbers(8, 7));

console.log(a);
