### The Thrice Function

The "thrice" function accepts a function object as an argument and **returns a function**. **The function returned invokes the function passed to `thrice` up to three times**. After the function returned from `thrice` invokes the function passed to `thrice` 4(+) times, it returns the value `undefined`.

```js
const helloWorld = thrice(function () {
  return 'Hello World';
});
// helloWorld is the function returned from `thrice`
const firstCall = helloWorld();
// firstCall === "Hello World";

const secondCall = helloWorld();
// secondCall === "Hello World";

const thirdCall = helloWorld();
// thirdCall === "Hello World";

const fourthCall = helloWorld();
// fourthCall === undefined;

const fifthCall = helloWorld();
// fifthCall = undefined;
```

Note: On the first three invocations, the `helloWorld` function returns the return value of the function passed to thrice (the string "Hello World"). On the fourth and fifth calls, `undefined` is returned since `helloWorld` already called the function passed to `thrice` three times. **A closure should be used in your solution, placing a property on the function will not receive full credit.**
