const useMapToUpperCase = (str) => {
  return str.split(' ').map((val) => {
    return val.toUpperCase();
  });
};

/*
This function useMapToUpperCase takes a string str as an argument.
It splits the string into an array of words using the split(' ') method, assuming words are separated by spaces.
It uses the map() method on the resulting array to create a new array where each word is transformed to uppercase using the toUpperCase() method.
The map() method applies the provided callback function (val) => { return val.toUpperCase(); } to each element of the array and returns a new array with the transformed values.
Finally, it returns the new array with all the words in uppercase.
*/

const useFilter = (arr) => {
  return arr.filter((val) => {
    if (val.includes('@')) {
      return val;
    }
  });
};

/*
This function useFilter takes an array arr as an argument.
It uses the filter() method on the array to create a new array that contains only the values that satisfy the condition.
The filter() method takes a callback function as an argument and executes it for each element of the array.
For each element, the callback function checks if the value includes the character '@' using the includes() method.
If the value includes '@', it is returned and included in the new array created by filter().
Finally, it returns the new array containing only the values that include '@'.
*/

const sumWithReduce = (arr, start = 0) => {
  return arr.reduce((sum, val) => {
    return sum + val;
  }, start);
};

/*
This function sumWithReduce takes an array arr and an optional start parameter as arguments.
It uses the reduce() method on the array to calculate the sum of the numbers.
The reduce() method takes a callback function and an initial value as arguments.
The callback function receives an accumulator sum and the current value val as parameters.
Inside the callback function, it adds the current value val to the accumulator sum and returns the updated sum.
The reduce() method iterates through each element of the array, updating the sum at each step, and finally returns the accumulated sum.
The initial value of the sum is provided as the start parameter. If no start parameter is given, it defaults to 0.
*/

const filterEvensDoubleAndSum = (arr) => {
  return arr
    .filter((val) => {
      if (val % 2 === 0) {
        return val;
      }
    })
    .map((val) => {
      return val * 2;
    })
    .reduce((sum, val) => {
      return sum + val;
    });
};

/*
This function filterEvensDoubleAndSum takes an array arr as an argument.
It uses method chaining with filter(), map(), and reduce() to perform a series of operations on the array.
The filter() method is used first to create a new array that contains only the even numbers.
The filter() method takes a callback function and returns a new array with elements that
*/
