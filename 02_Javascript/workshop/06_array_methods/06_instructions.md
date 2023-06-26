### Array Methods

Write the following functions. For this, you may use the `reduce`, `filter`, and `map` methods.

- `useMapToUpperCase` - use the Array.protoype.map within the `useMapToUpperCase` function. Remember, the `map` method can only be called on arrays (so you may need to convert the argument to an array). "map" each element so the strings are all upper case.

- `useFilter` - use the Array.prototype.filter method to determine if the string has an `"@"`. (Array.prototype.includes will come in handy to determine if string has an `"@"` ).

- `sumWithReduce` - calculate the sum of numbers in an array with reduce. The value returned should be a number.

With the first three methods you need to create, you are responsible for passing the callback function to `map`, `reduce`, and `filter`.

- `filterEvensDoubleAndSum` - Using the `filter`, `map`, and `reduce` methods (method chain :) ):
  - filter all the values in the initial array so the array returned from filter only contains even numbers
  - map over the array returned from filter and double the values
  - reduce the array returned from map and calculate the sum
  - you are responsible for passing the callback functions to all three Array.prototype methods.
