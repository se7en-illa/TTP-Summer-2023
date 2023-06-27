const thrice = (callback) => {
  let count = 0;
  return () => {
    if (count < 3) {
      count++;
      return callback();
    }
  };
};

/*
This code defines the thrice function using an arrow function syntax.
The thrice function takes a callback function as an argument.
It initializes a count variable to keep track of the number of times the callback function has been invoked.
The thrice function returns another function defined using an arrow function syntax.
This inner function acts as a closure, capturing the count variable in its lexical environment.
Inside the inner function, it checks if the count is less than 3. If it is, the following steps are performed:
The count is incremented by one using the count++ shorthand notation.
The callback function is invoked using callback() and its return value is returned from the inner function.
If the count is 3 or greater, the inner function does not execute any code and returns undefined.
Since the inner function is returned from the thrice function, it becomes the function assigned to the helloWorld variable in the provided example.
The purpose of the thrice function is to create a closure that allows the returned function to invoke the callback function up to three times. After the third invocation, the returned function returns undefined for subsequent invocations. By using the closure and the count variable, the thrice function keeps track of how many times the returned function has been called.

You can use the thrice function with the provided example:
*/

const helloWorld = thrice(function () {
  return 'Hello World';
});

const firstCall = helloWorld();
console.log(firstCall); // Output: "Hello World"

const secondCall = helloWorld();
console.log(secondCall); // Output: "Hello World"

const thirdCall = helloWorld();
console.log(thirdCall); // Output: "Hello World"

const fourthCall = helloWorld();
console.log(fourthCall); // Output: undefined

const fifthCall = helloWorld();
console.log(fifthCall); // Output: undefined

/*
In this example, the helloWorld variable holds the function returned from the thrice function. The first three invocations of helloWorld return the return value of the callback function, which is the string "Hello World". After the third invocation, subsequent invocations of helloWorld return undefined, as specified in the requirements.
*/
