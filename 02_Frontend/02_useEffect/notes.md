# `useEffect`

## React Hooks

_[React hooks](https://react.dev/reference/react) are built in functions provided by React that begin with `use` let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own._

## `useEffect`

One of the more common hooks we use in React is the `useEffect` hook.

_`useEffect` is a react hook that let's us synchronize a component with an external system. (e.g making an http requests or connecting to a database)_

## Effect?

_Effects let you specify side effects that are caused by rendering itself, rather than by a particular event. We can declare an effect by using the `useEffect` hook. The function passed in at the first argument is known as the `effect`._

### Specify the Effect

```js
function MyComponent() {
  useEffect(() => {
    // Code here will run after every render
  });

  return <div />;
}
```

### Set Dependencies

_Any stateful variables passed into the second argument of `useEffect` (which should be array) is known as a dependency._

```js
function MyComponent({ id }) {
  useEffect(() => {
    // ...
  }, [id]); // dependencies

  return <div />;
}
```

Specifying `id` in the dependency array tells React that it should skip re-running your Effect if `id` is the same as it was during the previous render.

Scenarios using dependency arrays

```js
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

### Clean things up

```js
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  
  // the return value of your function will be executed when the component is unmounted
  return () => {
    connection.disconnect();
  };
}, []);
```

[Effects](https://react.dev/learn/synchronizing-with-effects)

## Other hooks

- [`useState`](https://react.dev/reference/react/useState) \*
- [`useContext`](https://react.dev/reference/react/useContext) \*
- [`useRef`](https://react.dev/reference/react/useRef)
- [`useMemo`](https://react.dev/reference/react/useMemo)
- [`useCallback`](https://react.dev/reference/react/useCallback)

**Note: We will be utilizing the hooks marked with \* in this course**
