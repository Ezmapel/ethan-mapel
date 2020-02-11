// create an Array using an Array literal
let arr = [75, 92, 4, 1099];
console.log("array", arr);

// access the 1st item in the Array
console.log("first", arr[0]);

// access the last item in the Array
console.log("last", arr[3]);

// print the length of the Array
console.log("length", arr.length);

// use the length property to access the last item in the Array
console.log("last via length", arr[arr.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
for (const stuff of arr) {
  console.log("for loop", stuff + 10000000);
}

const arr2 = [];

for (const item of arr) {
  arr2.unshift(item - 2000);
}
console.log("arr", arr, "arr2", arr2);
