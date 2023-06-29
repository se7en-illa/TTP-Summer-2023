### Find Object Properties

#### Part 1 - `findObjPropsHasOwn`

The function `findObjPropsHasOwn` accepts an object as an argument and returns a string with the name of every key directly attached to the object passed as an argument.

The keys in the string **should only be keys attached to the object, not on its internal prototype (aka .**proto**)**, to achieve this, use **[Object.prototype.hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)**.

```js
// this is used in the factory function below
const calculatorPrototype = {
  add: function (a, b) {
    return a + b;
  },
};

// calculator is a factory function
const calculator = function () {
  const calculatorInstance = Object.create(calculatorPrototype);
  calclatorInstance.total = 0;

  return calculatorInstance;
};

// myCalculator is an instance of the calculator factory function
const myCalculator = calculator();

const instanceKeys = findObjPropsHasOwn(myCalculator);

console.log(instanceKeys); // logs: "total"
// Note: the string total is included because it is directly attached to the calculatorInstance. The add method is located up the prototype chain (this is why it is not included).
```

##### Note:

- Loop over the object and return a string with the keys that are on the object instance.

- Return all the keys on the object in a string. **If there is more than one key, each key should be separated by a `","` and a `space`.**

#### Part 2 - `findObjKeys`

`findObjKeys` achieves the same purpose as Part 1 `findObjPropsHasOwn`. However instead of using `Object.prototype.hasOwnProperty` use `Object.keys` instead, read the next paragraph for more information.

The function `findObjKeys` accepts an object as an argument. Loop over the object and return a string with the keys that are on the object instance,
not on its internal prototype (aka .**proto**), to achieve this, use **[Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)**.

##### Note:

- Loop over the object and return a string with the keys that are on the object instance.
- Return all the keys on the object in a string. **If there is more than one key, each key should be separated by a `","` and a `space`.**
