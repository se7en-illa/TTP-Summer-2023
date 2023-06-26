// Primitive Types - in JavaScript are basic data types that store single values. They include number, string, boolean, null, undefined, and symbol. Primitive types are immutable, meaning their values cannot be changed after they are created. When assigning a primitive value to a variable or passing it as an argument to a function, a new copy of the value is created.
let name1 = 'Alice';
let name2 = name1;

name2 = 'Bob';

console.log(name1); // Output: Alice
console.log(name2); // Output: Bob
// Explanation for code above - In this example, name1 is assigned the value "Alice", and then name2 is assigned the value of name1. When name2 is changed to "Bob", it does not affect the value of name1. This is because strings are primitive types, and assigning a primitive value creates a new copy.

// Primitive Type Example
let num1 = 5;
let num2 = num1;

num2 = 10;

console.log(num1); // Output: 5
console.log(num2); // Output: 10

// Primitive Type Example
let bool1 = true;
let bool2 = bool1;

bool2 = false;

console.log(bool1); // Output: true
console.log(bool2); // Output: false

// Complex types - also known as reference types, are objects that can store multiple values and have properties and methods. Examples of complex types in JavaScript include objects, arrays, and functions. Complex types are mutable, meaning their values can be modified by changing their properties or elements.
let person11 = {
  name: 'Alice',
  age: 30,
};
let person12 = person11;

person12.name = 'Bob';

console.log(person11.name); // Output: Bob
console.log(person12.name); // Output: Bob
// explanation for code above: In this example, person11 is an object with a name property, and person12 is assigned the reference to person1. Modifying the name property of person12 also changes the name property of person11. This is because objects are complex types, and assigning a complex type creates a reference to the same object in memory.

// Complex Type Example
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]

// Pass By value (integer - primitive)
function changeValue(x) {
  x = 5; // Assigning a new value to the parameter x
  console.log('Inside the function:', x);
}

let num3 = 10;
console.log('Before the function call:', num3); // Output: Before the function call: 10

changeValue(num3); // Passing the value of num to the function
console.log('After the function call:', num3); // Output: After the function call: 10

// Pass By Value (string - primitive)
function changeString(str) {
  str = 'Hello, World!';
}

let message = 'Goodbye';
changeString(message);

console.log('message', message); // Output: Goodbye

function capitalize(str) {
  str = str.toUpperCase();
  console.log(str); // Output: HELLO WORLD
}

let message2 = 'Hello World';
capitalize(message2);
console.log('message2', message2); // Output: Hello World

// Pass By value (boolean - primitive)
function negate(bool) {
  bool = !bool;
  console.log(bool); // Output: false
}

let isTrue = true;
negate(isTrue);
console.log('isTrue', isTrue); // Output: true

// Pass By Reference
function updateAge(person) {
  person.age = 30;
  console.log('Inside updateAge - person.age', person.age);
}

let john = { name: 'John', age: 25 };
console.log('Before updateAge - john.age', john.age);
updateAge(john);

console.log('After updateAge - john.age', john.age); // Output: 30
// Explanation for code above - In this example, an object john with properties name and age is passed into the updateAge function. Inside the function, the age property of the person object is modified, which affects the original john object. This is because objects are complex types, and they are passed by reference.

// Pass By Reference
function updateArray(arr) {
  arr.push(4);
  console.log(arr); // Output: [1, 2, 3, 4]
}

let numbers = [1, 2, 3];
updateArray(numbers);
console.log(numbers); // Output: [1, 2, 3, 4]

// Pass By reference - Object
function updateBookTitle(book) {
  book.info.title = 'New Book';
  console.log(book); // Output: { info: { title: 'New Book', pages: 200 } }
}

let myBook = {
  info: {
    title: 'Old Book',
    pages: 200,
  },
};
updateBookTitle(myBook);
console.log('myBook', myBook); // Output: { info: { title: 'New Book', pages: 200 } }

// == and ===
// == - first compares the types of the two values its comparing, and if the types are different it will convert both to the same type. Although, == is not really recommended as its output might sometimes be unexpected
// === - It compares both the values and types of the operands, without any sort of type conversion. Will onlty return true if the type and value are the same. This is the most recommended one to use - similar to == in other languages.

let arr4 = [1, 2, 3];
let arr5 = [1, 2, 3];

console.log(arr4 == arr5); // Output: false
// returns False because even though there values and type are the same, since arrays are complex values, there memory is being compared, thus each array has a unique memory

let arr6 = [1, 2, 3];
let arr7 = [1, 2, 3];
console.log(arr6 === arr7); // Output: false
// Even though arr6 and arr7 have the same elements, they are distinct arrays in memory, resulting in false.

let num4 = 5;
let num5 = '5';
console.log(num4 == num5); // Output: true
// True, because it converted num4 to a string and then compared both values

let num6 = 5;
let num7 = '5';
console.log(num6 === num7); // Output: False
// False, because its different type and different value

// Callback function - is a function that is passed as an argument to another function and is invoked or called at a specific point within the receiving function. The purpose of a callback function is to be executed when a certain event occurs or when a particular task is completed
function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}
greet('John', sayGoodbye); // Output: Hello, John! /n Goodbye!

function calculate(num1, num2, operation, callback) {
  let result;
  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'subtract') {
    result = num1 - num2;
  }
  callback(result);
}

function handleResult(result) {
  console.log('Result:', result);
}

calculate(5, 3, 'add', handleResult);
calculate(5, 3, 'subtract', handleResult);
