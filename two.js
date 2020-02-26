const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
arr.indexOf("a");
arr.indexOf("b");
arr.indexOf("c");

// find the last index of "a", "b", and "c"
arr.lastIndexOf("a");
arr.lastIndexOf("b");
arr.lastIndexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
while (arr.indexOf("a") != arr.lastIndexOf("a")) {
  arr.splice(arr.lastIndexOf("a"), 1);
  console.log(arr);
}
console.log("Final array", arr);

// let i;
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
// }
// console.log(i);
