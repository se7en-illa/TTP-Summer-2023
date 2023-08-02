# React Context

## What is it?

_Context lets a component receive information from distant parents without passing it as props._

## Creating a Context

```jsx
// UserContext.js
import { createContext } from "react";

export const UserContext = createContext(null);
```

**Note: The argument you pass into `createContext` is the default context value. This value never changes. React only uses this value as a fallback if it can’t find a matching provider.**

## Provide the Context

```jsx
import { UserContext } from "./UserContext.js";

function App() {
  const [user, setUser] = useState({ name: "Orlando", age: 39 });
  // ...
  return (
    <UserContext.Provider value={user}>
      <Header />
      <Main />
      <Footer />
    </UserContext.Provider>
  );
}
```

## Use the Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext.js";

function Header() {
  const user = useContext(UserContext);

  return (
    <header>
      <nav>{/* .. */}</nav>
      <section id="user-controls">{user.name}</section>
    </header>
  );
}
```

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext.js";

function Main() {
  const user = useContext(UserContext);

  return (
    <main>
      <h1>
        Hello {user.name} with age {user.age} welcome to the website.
      </h1>
      {/*   */}
    </main>
  );
}
```

- [`createContext` Resource](https://react.dev/reference/react/createContext#consumer)
- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
