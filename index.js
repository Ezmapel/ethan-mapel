const x = 7;
const y = 10;

console.log(x !== y);

const me = {
  name: "Ethan"
};

const someone = {
  name: "Ethan"
};

console.log(me === someone); // false

// Will it spit out true or false? Weirdly enough, false
// Primitives pass by value (it looks at the value)
// Objects pass by reference (memory addresses, or memory reference...and two objects, even if they have the same contents, are stored in different memory references, and thus do not pass by reference, hence they churn out false)

// BUT if we get down to the primitive level, then it can churn out a true

console.log(me.name === someone.name); // true

// Next time:
if (x === y) {
  console.log("x and y are the same");
} else {
  console.log("not the same");
}
