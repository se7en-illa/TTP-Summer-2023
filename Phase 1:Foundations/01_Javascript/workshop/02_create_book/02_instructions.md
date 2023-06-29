### Create Book

Create the function `createBook` that returns a book instance (object) that represents a book. The instance created from the `createBook` function should contain the following properties:

- `id` - the first argument to `createBook` is assigned to the `id` property
- `title` - the second argument is assigned to the `title` property
- `author` - the third argument is assigned to the `author` property
- `price` - the fourth argument is assigned to the `price` property
- `rating` - the `rating` property is initialized to an empty array

Each book instance has access to the following methods:

**Note:** the methods are accessible via the prototype chain, the methods are not attached directly on the instance

- `getInfo` - returns a string that includes the title and author of the book
- `getPrice` - returns the price of the book
- `addRating` - accepts a string argument that contains 1 to five stars (`'*'`), the string is stored in the `.rating` array
- `getRating` - calculates and returns the average rating of the book
