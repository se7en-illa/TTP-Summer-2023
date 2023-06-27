function createBook(id, title, author, price) {
  let book = Object.create(createBook);

  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}

createBook.getInfo = function () {
  return `${this.title} by ${this.author}`;
};

createBook.getPrice = function () {
  return this.price;
};

createBook.addRating = function (rating) {
  this.rating.push(rating);
};

createBook.getRating = function () {
  let rating = this.rating;
  let stars = 0;

  for (let i = 0; i < rating.length; i++) {
    stars += rating[i].length;
  }

  return stars / rating.length;
};

function createBook(id, title, author, price) {
  // This line defines the function createBook that takes in four arguments: id, title, author, and price.
  let book = Object.create(createBook); // creates a new object book using Object.create() and sets the prototype of book to be the createBook function itself. This allows the book instance to access the methods defined on the createBook function's prototype.
  // This block of code sets the properties of the book instance.
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
} // The id, title, author, and price arguments passed to createBook are assigned to the respective properties of the book object.
// The rating property is initialized as an empty array.

createBook.getInfo = function () {
  return `${this.title} by ${this.author}`;
};
/*
This line adds a method called getInfo to the createBook function's prototype.
The method is defined using a function expression and returns a string that includes the title and author of the book.
*/

createBook.getPrice = function () {
  return this.price;
};
/*
This line adds a method called getPrice to the createBook function's prototype.
The method is defined using a function expression and returns the price of the book.
*/

createBook.addRating = function (rating) {
  this.rating.push(rating);
};
/*
This line adds a method called addRating to the createBook function's prototype.
The method is defined using a function expression and accepts a rating argument, 
which is pushed to the rating array of the book instance.
*/

createBook.getRating = function () {
  let rating = this.rating;
  let stars = 0;

  for (let i = 0; i < rating.length; i++) {
    stars += rating[i].length;
  }

  return stars / rating.length;
};
/*
This line adds a method called getRating to the createBook function's prototype.
The method is defined using a function expression.
It calculates the average rating of the book by iterating over the rating array and summing the length of each rating string.
The average rating is obtained by dividing the total number of stars by the length of the rating array, and it is returned as the result.
*/

/*
The solution creates a createBook function that acts as a factory function to generate book instances. Each book instance has properties for id, title, author, price, and rating, as well as access to the methods defined on the createBook function's prototype.
*/
