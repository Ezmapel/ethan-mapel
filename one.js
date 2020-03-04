// create an object literal
// include a method that uses "this"

const obj = {
  object: "Coffee cup",
  body: "hand",
  bev: "coffee",

  statement() {
    return `I have a ${this.object} filled with ${this.bev} in my ${this.body}`;
  }
};

console.log(obj.statement());

// create a function in the global scope that prints "this"

function logDefaultContext() {
  console.log("this is: ", this);
}
logDefaultContext();
