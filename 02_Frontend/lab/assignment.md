# Lab Assignment: React Router Navigation

## Overview

In this lab, you'll get hands-on experience with the latest version of React Router. React Router is a powerful routing library for React that makes it easy to create single-page applications (SPAs) where different views are rendered based on the current URL, simulating the experience of navigating between separate pages.

## Lab Objectives

- Understand how to use `<BrowserRouter>`, `<Routes>`, `<Route>`, and `<Link>` components from 'react-router-dom'.
- Understand how to create a navigation bar in React.
- Understand how to link pages together using React Router.
- Understand how to create dynamic routes.

## Part 1: Setting Up Your Project

Just like any other React project, we start by creating a new React application:

1. Initialize a new project by running `npx create-react-app react-router-lab`.
2. Navigate into your new project directory `cd react-router-lab`.
3. Install `react-router-dom` by running `npm install react-router-dom`. This library provides the routing functionality we need for our application.
4. Start your application by running `npm start`.

## Part 2: Creating Pages

Next, we'll create a few pages (or views) that we'll route to:

1. Create three new components inside your `src` directory: `Home.js`, `About.js`, and `Contact.js`.
2. For now, simply return a `<h1>` tag from each component that displays the name of the page.

Example (`Home.js`):

```jsx
import React from "react";

function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

## Part 3: Setting Up Routes

Now, we'll use `react-router-dom` to set up our routes. These routes will dictate what component (or page) is displayed based on the current URL:

1. In your `App.js` file, import the `BrowserRouter as Router`, `Routes`, `Route` components from `react-router-dom`.
2. Also import the three components you just created (`Home`, `About`, `Contact`).
3. Inside your `App` component, wrap your application in a `<Router>` component. This component provides routing functionality to all child components.
4. Use the `<Routes>` component to set up three routes - one for each of your pages.

<details>
<summary>Hint: App.js</summary>

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```

</details>

## Part 4: Creating a Navigation Bar

To navigate between our pages, we'll create a navigation bar using the `<Link>` component. `<Link>` works similarly to `<a>` in HTML, but it performs a client-side navigation without a page reload:

1. Create a new component called `Navbar.js`.
2. In this component, return a `<nav>` element that includes three `<Link>` components, one for each page. The `to` prop should correspond to the paths you set up in your `App` component.
3. Import this component into your `App` component and render it above your `<Routes>` component.

<details>
<summary>Hint: Navbar.js</summary>

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

</details>

## Part 5: Adding Dynamic Routes (Stretch Goal)

Let's try adding a dynamic route. These routes have path parameters, allowing us to create a multitude of routes based on the parameter:

1. Create a new component called `User.js`.
2. Set up a new route in your `App` component for this page. This route should be dynamic and accept a `userId` parameter.
3. In your `User` component, use the `useParams` hook from `react-router-dom` to access the `userId` parameter.
4. For now, simply display the `userId` in a `<h1>` tag.
5. Add a new `<Link>` to your `Navbar` component that leads to a few different user pages (for example, `/user/1`, `/user/2`, `/user/3`).

<details>
<summary>Hint: User.js</summary>

```jsx
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return <h1>User ID: {userId}</h1>;
}

export default User;
```

Then add to your `App.js`:

```jsx
<Route path="/user/:userId" element={<User />} />
```

And add to your `Navbar.js`:

```jsx
<Link to="/user/1">User 1</Link>
<Link to="/user/2">User 2</Link>
<Link to="/user/3">User 3</Link>
```

</details>

## Review

Instead of a formal submission, let's take the time to review what you've learned in this lab:

1. **React Router:** This library is the standard for implementing navigation in your React applications. Its primary components (`Router`, `Routes`, `Route`, `Link`) allow you to create a rich navigation experience.

2. **BrowserRouter (alias as Router):** The `BrowserRouter` component, typically aliased as `Router`, wraps your entire application and provides the routing functionality.

3. **Routes and Route:** `Routes` is a component that wraps all `Route` components. Each `Route` represents a possible path in your app and specifies what component should be rendered at that path.

4. **Link:** This component works like an `<a>` tag in HTML, but instead of causing a full page refresh (like `<a>` would), it changes the URL and renders the new component without refreshing the page. This is a critical part of creating a smooth user experience in a single-page app.

5. **Dynamic Routes (Stretch Goal):** Dynamic routes are routes with path parameters. These parameters can be changed to fetch different data or render different components, providing more flexibility in your routes.

Reflect on these topics and how they work together to create the navigation for a React application. Be sure you understand each topic, as they form the foundation for routing in React.
