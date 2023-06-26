/*
an array is a list-like data structure in javascript
*/

let numbers = [1, 2, 3];

let names = ['george', 'john', 'thomas'];

let thisVariable = 'a value';

let mixedTypes = [30, true, 'apples', null, thisVariable];

/*
an array is a list-like data structure in javascript.
however, let's see what happens when we check the data type
*/

console.log(typeof mixedTypes);

/*
unfortunately, the type of an array is actually an object.
in the case of checking to see if something is an array,
we use the Array.isArray method
*/

let arr = [1, 2, 3];
console.log(Array.isArray(arr));
console.log(Array.isArray("this isn't an array and should return false"));

// Bracket Access
// we use brackets to access values in the array
// remember that while when we are counting, we start at 1,
// array and string indices start at 0
// this means that arrays and strings are zero-indexed

let nameArray = ['james', 'michael', 'harry'];

console.log(nameArray[1]);
console.log(nameArray[nameArray.length - 1]);

/*
PUSH METHOD

if we want to add a value to the end of an array, we can use the push method.
for example, if we wanted to add a name to our nameArray above:
*/

nameArray.push('emma');
console.log(nameArray);

// POP METHOD: removes the last value from an array

let popped = nameArray.pop();

console.log(popped);
console.log(nameArray);

// SHIFT METHOD: shift removes the first value from an array

let shift = nameArray.shift();

console.log(shift);
console.log(nameArray);

// UNSHIFT METHOD: unshift adds a value to the beginning of an array

nameArray.unshift('emma');
console.log(nameArray);

// indexOf METHOD: find the array index of a value. if something is not found, it will return -1

console.log(nameArray.indexOf('emma'));
console.log(nameArray.indexOf('jack'));

// SLICE METHOD: extracts a portion of the array

let sliced = nameArray.slice(0, 2);
console.log(sliced);

// INCLUDES METHOD: check if a value is in the array

console.log(nameArray.includes('emma'));
console.log(nameArray.includes('jack'));

// REVERSE METHOD: reverses the array. does NOT make a copy

console.log(nameArray);
console.log(nameArray.reverse());
console.log(nameArray);

// SPLICE METHOD: mutates the original array. used to add or remove elements from the middle of the array
// does NOT make a copy. it will modify the array
// first argument is an index, the second is a count of elements
// will delete started at provided index
// returns new array with all removed elements

let fruits = ['apples', 'bananas', 'grapes', 'oranges'];
console.log(fruits);
let fruitSlice = fruits.splice(0, 2);
console.log(fruits);
console.log(fruitSlice);

// JOIN METHOD: joins the array into a string

let friends = ['harry', 'ron', 'hermione'];

console.log('My friends are ' + friends.join(''));
console.log('My friends are ' + friends.join(' ')); // don't forget to add the space
console.log('My friends are ' + friends.join('X'));

// CONCAT METHOD: short for concatenate. combines arrays

let newFriends = ['fred', 'george', 'ginny'];
console.log(friends.concat(newFriends));

// NESTED ARRAYS: arrays can have many levels of nesting.

let relatedThings = [
  ['Windows', 'MacOS'],
  ['New York', 'Chicago'],
];

let operatingSystems = relatedThings[0];
let cities = relatedThings[1];

console.log(relatedThings);
console.log(operatingSystems);
console.log(cities);

// if i wanted to access a value within a nested array:
console.log(relatedThings[0][1]);

// LOOPING THROUGH NESTED ARRAYS

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < grid.length; i++) {
  let row = grid[i];
  console.log(row);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
