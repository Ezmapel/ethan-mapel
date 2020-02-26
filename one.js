const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastOne = nums.pop();
let lastTwo = nums.pop();
console.log(lastOne);
console.log(lastTwo);
console.log(nums);

// remove each of the first two items with shift(), saving each item to a variable
let firstOne = nums.shift();
let firstTwo = nums.shift();
console.log(firstOne);
console.log(firstTwo);
console.log(nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(firstTwo);
nums.push(firstOne);
nums.unshift(lastTwo);
nums.unshift(lastOne);
console.log(nums);
