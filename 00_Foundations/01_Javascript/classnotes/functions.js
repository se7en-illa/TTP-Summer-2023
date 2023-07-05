/*
Functions

Functions are re-usable blocks of code. Up until now, we haven't worries about re-using any of the code that we've written. 
However, as our programs get longer and longer, we'll often find ourselves wanting to perform the same task again and again. 
For example, consider the following:

*/

let message1 = 'Hello';
let message2 = 'How are you';
let message3 = 'Goodbye';

console.log(message1 + '!!!');

console.log(message2 + '!!!');

console.log(message3 + '!!!');

/*
This works, but it was a bit exhausting to write. For each of the messages, 
we needed to re-write the code to concatenate the exclamation points to the end, 
and log the whole thing to the console.

This is where functions come in! Instead of writing the same code over and over again, 
we can write the code once, and then use it wherever we please! This is what our code would 
look like if we use a function:
*/

// function exclaim (message) {
//     console.log(message + "!!!");
//   }

//   exclaim(message1);
//   exclaim(message2);
//   exclaim(message3);

/*
There are two new syntax features to be aware of with functions:

Function declaration, which defines the function and how it works
Function invocation, which is how you use (that is, invoke) the function you've declared

A function declaration proceeds as follows:

First, we use the function keyword. This tells JavaScript that we are starting to write a 
new function.
Then, we write the name of the function. 
This is just like naming a variable (and the same rules apply). 
This is how we'll refer to the function in the future.
Then, we write a pair of parentheses. This is where we'll list the function's parameters 
Finally, we write a pair of curly braces.
Inside the curly braces, we can write all of the code that we want to re-use!
Here's a function that logs a few messages to the console:
*/

function greeting() {
  console.log('Why, hello!');
  console.log('So nice to see you!');
}

/*
However, we won't see those messages get logged yet - we've only defined the function. 
To cause the code inside the function to happen, we need to invoke the function!

FUNCTION INVOCATION
Function invocation is how we actually use functions. 
You'll hear a lot of different terms for this as well: 
"invoking a function", "executing a function", "running a function",
 "calling a function", etc. These are all synonymous.

For example, declare our greeting function from above again, and then execute it:
*/

// function declaration
function greeting() {
  console.log('Why, hello!');
  console.log('So nice to see you!');
}

// function invocation
greeting();

/* Parameters and Arguments

INPUT AND OUTPUT
Functions can do more than just make code portable and reusable. 
They're also the main way that JavaScript transforms input into output.

Recall that an important characteristic of a programming language is its ability to 
process input into output. Functions do this by receiving input as parameters, 
and then returning a value as output.


FUNCTION PARAMETERS
A function's parameters are special variables that represent data that the 
function will use. We say that they "represent" data because, 
when we define a function, we don't know exactly what that data will be - this will only be determined when the function is invoked. However, we can use these variables a placeholders in the meantime, and determine how we want to use them.

For example, say we wanted to write a function that adds three numbers together:
*/

function addThreeNums(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

/*
In this function, num1, num2, and num3 are the parameters. 
We can name the parameters whatever we want, 
but it's a good idea to name them something sensible 
(and all of the same rules for naming variables also apply to parameters). 
We can also have as many parameters as we want, 
but it's good practice not to go overboard with tons and tons of parameters.

Each parameter name goes inside the parentheses, 
and each parameter is separated by commas. 
The ordering of the parameters matters, 
because that will determine how the parameters get their values when we invoke the function, 
which brings us to arguments.

PASSING IN ARGUMENTS
We know that when we declare a function, we're just defining it - 
none of its code is executing yet. Only once we invoke it does it "come to life".

Likewise, when we invoke a function, we can supply the data that our 
function will use for its parameters. This data has a fancy term associated with it - 
we call these the function's arguments.
*/

function addThreeNums(num1, num2, num3) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num1 + num2 + num3);
}

addThreeNums(4, 10, 6);

/*
This code will result in logging 4, 10, 6, and then finally 20 to the console.

When we invoke addThreeNums, we passed in 4 as the first "argument", 
10 as the second "argument", and 6 as the third argument. 
Each argument supplies a value to its corresponding parameter. 
This means that when we go into the body of addThreeNums, 
the num1 parameter will have the value 4, num2 will be 10 and num3 will be 6.

This is important because we might want different parameters to play different roles. 
In this example, we've written a function called "punctuate" that takes two parameters: 
the first is intended to be a string representing a sentence, 
and the second parameter is another string with the punctuation mark we want 
to end the sentence with:
*/

function punctuate(sentence, punctuationMark) {
  console.log(sentence + punctuationMark);
}

punctuate('Hello', '!');
punctuate("I'm Ron Burgundy", '?');

/* returning values
 */

function plus(a, b) {
  let sum = a + b;
  return sum;
}

plus(5, 5);
console.log(plus(5, 5));
