# React Forms

## `useRef`

_`useRef` is a React Hook that lets you reference a value that’s not needed for rendering._

```jsx
const ref = useRef(initialValue);
```

## Uncontrolled Components

_Uncontrolled components are components where form data is handled by the DOM itself_

```jsx
import { useRef } from "react";

function Form() {
  // this defines a reference we can use to point to some element
  //  not being tracked by React state
  const inputRef = useRef(null);

  function handleClick() {
    // here we can see the input element can be retrieved
    // from the inputRef object by utilizing the `current` key

    // this line focuses the input element in the browser
    inputRef.current.focus();
  }

  return (
    <>
      {/* here we assign our reference to point to the input element */}
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

## Controlled Components

_Controlled components are components where form data is handled by React state_

```js
function Form() {
  // we define a stateful variable to track out input state
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    // this stores stores the state of the input through react
    // state
    setInputText(event.target.value);
  }

  return (
    <input
      value={inputText}
      onChange={
        handleChange
      } 
      // onChange={(e) => setInputText(e.target.value)}
    />
  );
}
```

[Controlled vs Uncontrolled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
