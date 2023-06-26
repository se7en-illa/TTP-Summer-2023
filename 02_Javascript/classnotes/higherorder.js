// Higher Order Functions -  is a function that can accept other functions as arguments and/or return functions as results. In other words, it treats functions as values

// forEach - Higher order function (built in - javascript)
let numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach(function (num) {
  console.log(num * 2);
});
// Output: 2 4 6 8 10
// forEach is looping over every single element in numbers4 and is calling the function(num) in each iteration

// Map - Higher Order Function (built in)
let numbers10 = [1, 2, 3, 4, 5];
let doubled2 = numbers10.map(function (num) {
  return num * 2;
});
console.log(doubled2);
// Output: [2, 4, 6, 8, 10]
// The map function is used to create a new array doubled2 where each element of the original numbers10 array is multiplied by 2. The provided function (num) => num * 2 is called for each element, and the returned value is added to the new doubled2 array. So, the output will be [2, 4, 6, 8, 10], which is the original numbers array with each element doubled.

// Filter - Higher Order Function (built in)
let numbers11 = [1, 2, 3, 4, 5];
let evenNumbers = numbers11.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);
// Output: [2, 4]
//The filter function is used to create a new array evenNumbers that contains only the even numbers from the original numbers11 array. The provided function (num) => num % 2 === 0 is called for each element, and if the condition num % 2 === 0 evaluates to true, the element is included in the new evenNumbers array. In this case, only the numbers 2 and 4 pass the condition, so they are filtered into the new array.

// Reduce - Higher Order Function (built in)
//The reduce() function in JavaScript is used to perform a reduction/accumulation operation on an array. It iterates over the elements of an array and accumulates a single value based on the logic defined in the callback function.
let numbers12 = [1, 2, 3, 4, 5];
let sum = numbers12.reduce((accumulator, num) => {
  accumulator += num;
  return accumulator;
}, 0);
console.log(sum);
// Output: 15
//By setting the initial value as 0, the accumulation process starts from 0. The callback function then adds each element of the numbers array to the accumulator (accumulator + num), resulting in the sum of all the numbers in the array. If the initial value was not provided, the first element of the array (1) would be used as the initial value, and the sum would be different.
