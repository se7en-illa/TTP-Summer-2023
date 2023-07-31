# React Router

_React Router enables "client side routing"._

_In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page._

_Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information._

_This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation._

_Client side routing is enabled by creating a Router and linking/submitting to pages with the `<Link>` component or a form._

## How does this interact with Express Router?

_React router will respond to the changes that are made to the location bar of your web browser. If you have routes in express that are the same as your routes in React Router, they will indeed conflict. A good strategy to avoid this problem is to prefix all your backend express routes with `/api/` much like `/api/users` or `/api/schools`._


## Routers

There are several router components available from react router. We will be focusing on primarily `BrowserRouter` for the remainder of the course but others do exist for certain use cases.

### BrowserRouter

_A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack._

```jsx
import { BrowserRouter } from "react-router-dom";
```

### HashRouter

_<HashRouter> is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. (e.g. )_

```jsx
import { HashRouter } from "react-router-dom";
```

[More Routers](https://reactrouter.com/en/main/routers/picking-a-router)

### Uses

These are sometimes aliased when imported for clarity:

```jsx
import { BrowserRouter as Router } from "react-router-dom";
```

and then wrapped around our entire project:

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    {/* The rest of your app goes here */}
  </Router>
);
```

**Note: We will primarily be utilizing `BrowserRouter` in this course**

## Routes / Route

_Rendered anywhere in the app, `<Routes>` will match a set of child routes from the current location. The `<Route>` component will define what `element` will render when the url bar matches a particular `path`._

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/about" element={<AboutPage />} />
</Routes>
```

You can utilize `dynamic segments` to further customize our routes:

```jsx
import { Routes, Route, useParams } from "react-router-dom";

function SingleStory() {
  const { storyId } = useParams();

  // ...
}

function SingleCat() {
  const { catId } = useParams();

  // ...
}

function App() {
  return (
    <Routes>
      <Route path="/stories/:storyId" element={<SingleStory />} />
      <Route path="/cats/:catId" element={<SingleCat />} />
    </Routes>
  );
}
```

When using `dynamic segments` we must pair those segments with the `useParams` hook to retrieve the parameters stored within the segment. This is similar to how `express` routing works.

## Link

_A <Link> is an element that lets the user navigate to another page by clicking or tapping on it._

```jsx
import { Link } from "react-router-dom";

function CatsIndexPage({ cats }) {
  return (
    <div>
      <h1>Cats</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Other Useful hooks

### useNavigate

_The `useNavigate` hook returns a function that lets you navigate programmatically._

```jsx
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SingleUser({ user }) {
  const navigate = useNavigate();

  async function handleDeleteUser() {
    try {
      await axios.delete(`/api/users/${user.id}`);

      // will navigate react router back to the /users page
      navigate("/users");
    } catch (err) {
      console.err(err);
    }
  }

  return (
    <>
      <h1>{user.name}</h1>
      <span>{user.hairColor}</span>
      <p>{user.birthday}</p>
      <button onClick={handleDeleteUser}>Delete User</button>
    </>
  );
}
```

**Note: The navigate function returned from `useNavigate` should receive where you want to go in the history stack. By passing in `-1` to the `navigate` function (e.g `navigate(-1)`), this allows you to move backward in the history stack much like you would when pressing the back button in your web browser.**

### useLocation

_The `useLocation` hook provides access to the current location object, which contains information about the current URL. It allows us to access properties like pathname, search, and state, enabling us to perform conditional rendering or dynamically adjust the UI based on the current location._

```jsx
import React from "react";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <div>
      <h1>Navigation</h1>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
}
```
[React Router](https://reactrouter.com/en/main/start/overview)