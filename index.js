// loops
// don't use while loops much anymore - easy to create an accidental endless loop, and it has a variable defined outside of the local scope (outside the while loop)

// ? TO DO: create a for loop that TOTALS the numbers from 1 to 100

let num = 0;

for (let i = 1; i <= 100; i++) {
  num += i;
}

console.log(num);
// for loop: variable, what you want variable to end up equaling, and your incrementation
// for (let i = 2; i <= 100; i++) {
//   console.log(i);
// }

let n = 0;
let whileTotal = 0;

while (n <= 100) {
  whileTotal += n;
  n++;
}

console.log(whileTotal);
