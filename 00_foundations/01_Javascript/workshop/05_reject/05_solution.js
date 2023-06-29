const reject = (arr, callback) => {
  return arr.filter((val) => {
    if (!callback(val)) {
      return val;
    }
  });
};

function reject(arr, callback) {
  return arr.filter(function (val) {
    if (!callback(val)) {
      return val;
    }
  });
}

/*
This line defines the function reject that takes in two arguments: arr (an array) and callback (a function).
Inside the function, it uses the filter() method on the arr array to create a new array that contains only the values that satisfy the condition.
The filter() method takes a callback function as an argument and executes it for each element of the arr array.
For each element, the callback function is called with the element as an argument.
Inside the callback function, it checks if the result of calling callback(val) is false. This means that the val does not satisfy the condition specified in the callback function.
If the result is false, the val is returned, and it will be included in the new array created by filter().
If the result is true, the val is not returned, and it will be excluded from the new array.
The purpose of the reject function is to filter out the values from the arr array that return false when the callback function is called on each element. It achieves this by using the filter() method and the provided callback function to perform the filtering based on the specified condition.

You can use the reject function with the provided example:
*/

const testWord = (word) => {
  return word.length > 3;
};
const listOfWords = reject(
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  testWord
);
console.log(listOfWords); // Output: ['one', 'two', 'six']

/*
In this example, the testWord function checks if the length of a word is greater than 3. The reject function filters out the words from the array that return false when testWord is called on each element. The resulting listOfWords array contains the words 'one', 'two', and 'six'.
*/
