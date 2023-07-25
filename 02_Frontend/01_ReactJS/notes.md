# ReactJS

## Components

_A component is a piece of the UI (user interface) that has its own logic and appearance._

```jsx
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

// Now that you’ve declared MyButton, you can nest it into another component
function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

## JSX

_The markup syntax used by ReactJS to describe components_

Example

```jsx
function Component () {
  // the jsx syntax below is valid code
  return (
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
}
```

## Hooks

_Functions starting with use are called Hooks._

## State

## Props

_The information you pass from component to another is called props._

Example

```jsx
function Button() {
  return (
    <button>My button</button>
  );
}
```

