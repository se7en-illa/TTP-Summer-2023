### Run Num Times

Create the function "runNumTimes" that accepts two arguments:

- func: takes a function as the first argument
- num: takes a number as the second argument

`runNumTimes` should execute the "func" argument "num" times.

Example:

```
let total = 0;

const func = () => {
  total += 5
};

runNumTimes(func, 5);
// total === 25
```
