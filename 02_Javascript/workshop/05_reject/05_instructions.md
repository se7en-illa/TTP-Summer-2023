### Reject Function

Create the function `reject` that takes two arguments:

- arr: takes an array as its first argument

- func: takes a function as its second argument

The 'reject' function returns the values in the array that return `false` after the function (second argument) is called on each element of the Array.

In the example below, the `testWord` function accepts a word as an argument and returns `true` if the word length is greater than 3 and `false` if the word length is 3 or less than three.

Example:

```js

const reject = function(arr, func){...}; // pseudocode for the reject function
const testWord = word => { return word.length > 3; }
const listOfWords = reject(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'], testWord);
// listOfWords = ['one', 'two', 'six'];

```
