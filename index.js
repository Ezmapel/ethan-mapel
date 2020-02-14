function fizzBuzz() {
  for (i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else i % 5 === 0;
    console.log("Buzz");
  }
}
console.log(fizzBuzz());

function fizzbuzz(number) {
  let fizz = !(number % 3) ? "fizz" : `"${number}"`;
  let buzz = !(number % 5) ? "buzz" : "";
  return `"${fizz}${buzz}"`;
}
for (let i = 0; i < 100; i++) {
  console.log(fizzbuzz(i));
}
