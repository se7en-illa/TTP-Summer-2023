// Getting various built in methods for Strings & Integers
var methods = Object.getOwnPropertyNames(Number.prototype);
console.log(methods);

/*
Let's use some of the methods below for Number that we see

'toFixed',
'toPrecision',
'toString',
*/

// Integers Methods Usage
// Integers Methods Usage - toFixed() - This method is used to format a number with a fixed number of decimal places. It returns a string representation of the number with the specified precision. The number is rounded to the specified number of decimal places, and if necessary, zeros are padded to the right
// let userInput = Number(prompt("Enter a decimal: "));
// console.log(userInput.toFixed(2));
// console.log(typeof userInput);

// Integers Methods Usage - toPrecision() - This method is used to format a number to a specified length, including both integer and decimal parts. It returns a string representation of the number with the specified precision
let num = 1234.5678;
console.log('num.toPrecision(5)', num.toPrecision(4));
console.log('typeof num', typeof num);
console.log('String(num)', String(num));

// Integers Methods Usage - toString() - converts Int variables to String
let myNum = 24;
myNum = myNum.toString();
console.log('myNum', myNum);
console.log(typeof myNum);

// 2D Arrays
let myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(myArr[0][2]);
console.log(myArr[2][1]);

let myArr2 = [[['a', 'b', 'c']], [4, 5, 6], [7, 8, 9]];
console.log(myArr2[0][0][0]);

// Objects - object is a collection of key-value pairs, where each key is a unique identifier and each value can be of any data type, including other objects.

// create empty object
let person = new Object();
person.name = 'John';
person.age = '23';
person.city = 'NY';

console.log('person', person);
console.log('person.name', person.name);
console.log('person.city', person.city);

// create object with data
let person2 = {
  name: 'Bob', // key:value pair
  age: 21,
  city: 'CA',
};
console.log('person2.age', person2.age);

person2.sport = 'soccer'; // add in new key,value pair
console.log('person2.sport', person2.sport);

person2.sport = 'basketball'; // update value
console.log('person2.sport', person2.sport);

console.log('person2', person2);
delete person2.sport; // delete an object property
console.log('person2', person2);

// Looping through Object Properties
let person3 = {
  name: 'Bob',
  age: 21,
  city: 'CA',
};
for (let key in person3) {
  console.log('key', key);
  console.log('person3[key]', person3[key]);
}

for (let [key, value] of Object.entries(person3)) {
  console.log('key', key);
  console.log('value', value);
}

let keys = Object.keys(person3); // access keys (only)
console.log('keys', keys);

let keys2 = Object.values(person3); // access values only
console.log('keys', keys2);

// Nested Objects
let student = {
  name: 'John Doe',
  age: 20,
  grade: 'A',
  address: {
    street: '123 Main Street',
    city: 'New York',
    country: 'USA',
  },
};
console.log('student.address.street', student.address.street);

let company = {
  name: 'ABC Corp',
  location: 'New York',
  departments: {
    sales: {
      manager: 'John Smith',
      employees: {
        employee1: {
          name: 'Alice',
          position: 'Sales Representative',
        },
        employee2: {
          name: 'Bob',
          position: 'Sales Manager',
        },
      },
    },
    marketing: {
      manager: 'Jane Doe',
      employees: {
        employee1: {
          name: 'Charlie',
          position: 'Marketing Coordinator',
        },
        employee2: {
          name: 'David',
          position: 'Marketing Specialist',
        },
      },
    },
  },
};
console.log(
  'company.departments.sales.employees.employee1.name',
  company.departments.sales.employees.employee1.name
);

// Object functions
let person4 = {
  name: 'John',
  age: 30,
  sayHello: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
};
person4.sayHello('bob');

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
console.log('calculator.add(5, 3)', calculator.add(5, 3)); // Output: 8
console.log('calculator.subtract(10, 4)', calculator.subtract(10, 4)); // Output: 6

// this keyword refers to the current object car. It is a special keyword in JavaScript that is used to access properties and methods within an object. this.brand and this.model are used to access the brand and model properties. Without using "this." our startEngine function won't know that brand and model by themselves exist. Thus, we use this.brand and this.model to access those properties.
let car = {
  brand: 'Tesla',
  model: 'Model 3',
  startEngine: function () {
    console.log('Starting the ' + this.brand + ' ' + this.model);
  },
};

car.startEngine(); // Output: Starting the Tesla Model 3

// another way of defining functions in objects
let car2 = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  displayDetails() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    );
  },
};

car2.displayDetails(); // Output: Brand: Toyota, Model: Camry, Year: 2022

// Nested Object Functions
let car3 = {
  brand: 'Tesla',
  model: 'Model 3',
  displayInfo: function () {
    console.log('Brand: ' + this.brand);
    console.log('Model: ' + this.model);
  },
  engine: {
    type: 'Electric',
    start: function () {
      console.log('Starting the ' + this.type + ' engine...');
    },
    stop: function () {
      console.log('Stopping the ' + this.type + ' engine...');
    },
  },
};

// Calling the displayInfo function
car3.displayInfo();
// Output: Brand: Tesla
//         Model: Model 3

// Calling the engine's start and stop functions
car3.engine.start();
// Output: Starting the Electric engine...

car3.engine.stop();
// Output: Stopping the Electric engine...

// Object constructors - in the examples above, we've created objects, but we've set values for each, meaning we can't really re-use the objects that we made. In order to make these objects more flexible, we can create an object like we would a function, pass in parameters, and create this. placeholders for these parameters.
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

// Creating instances of the Person object using the constructor
let person01 = new Person('John', 30, 'New York');
let person02 = new Person('Jane', 25, 'London');

console.log('person1', person01); // Output: Person { name: 'John', age: 30, city: 'New York' }
console.log('person01.name', person01.name);
console.log('person1', person02); // Output: Person { name: 'Jane', age: 25, city: 'London' }
console.log('person02.city', person02.city);

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function () {
    return `${this.title} by ${this.author} (${this.year})`;
  };
}

// Creating instances of the Book object using the constructor
let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
let book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

console.log(book1); // Output: Book { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, getInfo: [Function] }
console.log(book2); // Output: Book { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, getInfo: [Function] }

console.log(book1.getInfo()); // Output: The Great Gatsby by F. Scott Fitzgerald (1925)
console.log(book2.getInfo()); // Output: To Kill a Mockingbird by Harper Lee (1960)

// - more practice
function Book2(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function () {
    return `${this.title} by ${this.author} (${this.year})`;
  };
}
Book2.prototype.getAge = function () {
  const currentYear = new Date().getFullYear(); // getMonth() Jan - 0 feb - 1
  const age = currentYear - this.year;
  return age;
};
let book3 = new Book2('Spiderman', 'IDK', 1920);
console.log('book3', book3);
console.log(book3.getAge());

// More Object Methods (built in)
// - Create Method
const person10 = {
  greet() {
    console.log('Hello!');
  },
};

const john2 = Object.create(person10);
john2.greet(); // Output: Hello!
//the code creates an object person with a greet method, then creates another object john that inherits from person, and finally calls the greet method on john to display the greeting message "Hello!".

// - hasOwnProperty method
const person20 = {
  name: 'John',
  age: 30,
};

console.log(person20.hasOwnProperty('name')); // Output: true
console.log(person20.hasOwnProperty('age')); // Output: true
console.log(person20.hasOwnProperty('city')); // Output: false
// checking to see if that property exists in the object

// - create and hasOwnProperty method
const vehicle3 = {
  type: 'car',
  startEngine() {
    console.log('Engine started!');
  },
};

const tesla3 = Object.create(vehicle3);
tesla3.model = 'Model 3';

console.log(tesla3.hasOwnProperty('model')); // Output: true
console.log(tesla3.hasOwnProperty('type')); // Output: false (inherited property)
tesla3.startEngine(); // Output: Engine started!
// hasOwnProperty() checks if the property inside of () is directly owned by that object. Since tesla3 inherited type from vehicle 3, this means type isn't owned by tesla3, but by vehicle3, thus it returns False

// more Object practice
function createMovie(id, name, director, year) {
  let movie = Object.create(createMovie);

  movie.id = id;
  movie.name = name;
  movie.director = director;
  movie.year = year;
  return movie;
}

createMovie.getInfo = function () {
  return `${this.director}, ${this.year}`;
};

let movieCreate = new createMovie(1, 'Spiderman', 'IDK', 2023);
console.log(movieCreate.getInfo());
