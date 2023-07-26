# React Basics: Working with APIs using React and Axios

## Objective

In this lab, you will create a web application that displays Star Wars characters using the Star Wars API (SWAPI). You will create a simple Express server that fetches data from the Star Wars API and sends it to the front end. The front-end application will be created using `create-react-app`, with an emphasis on functional components and the `useEffect` React Hook. You will also utilize `axios` for making HTTP requests.

## Prerequisites

To successfully complete this lab, you should be familiar with JavaScript, and basic React concepts. If you're not, please go through some beginner-friendly tutorials before attempting this lab.

## Setup

**Installing the Required Software and Libraries**: This is the initial step before you start building the application. Node.js allows you to run JavaScript on your server, and npm is a package manager that is used to install libraries in your project. `create-react-app` is a tool that sets up a new React application with a single command, saving you the trouble of manually setting up the structure and configurations. Finally, Axios is a library that will help you make HTTP requests to fetch or save data.

### Steps:

1. Create a New React Application: Run `npx create-react-app react-starwars`. This command creates a new React application in a directory called `react-starwars`.

2. Move into the New Directory: Change your directory to your new app by running `cd react-starwars`.

3. Install Libraries: Install axios and express by running `npm install axios express`.

Now, open the project in VSCode.

## Task

### Part 1. Understanding and Implementing Functional Components

**Functional components** are a way of defining components as JavaScript functions. Using functional components simplifies the writing of components and omits the need for managing the component's lifecycle and state.

A functional component is just a JavaScript function that returns React elements. It accepts props as an argument and returns a React element. Here's an example:

```javascript
function StarWarsCharacter({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      {/* other character details */}
    </div>
  );
}
```

In this example, `StarWarsCharacter` is a functional component that accepts a `props` object and returns a React element. This component renders a `div` with a `h2` title.

Functional components have several key features:

1. **Simplicity:** Functional components are just JavaScript functions. You don't need to worry about `this` keyword or lifecycle methods. It’s much easier to read and understand.

2. **Hooks:** Functional components can use Hooks, which are a new addition in React 16.8. They let you use state and other React features without writing a class. This allows you to write a fully featured component with less code and complexity.

3. **Performance:** In most cases, functional components are slightly faster and use less memory than class components because they don't have instances. However, this advantage is minimal and might not be noticeable in most applications.

4. **Testing and Debugging:** Functional components are easier to test and debug because they are plain JavaScript functions. They are also easier to understand at a quick glance because they are more declarative.

##### Setting Up a Functional Component

1. Inside the `src` directory of your project, create a new file `StarWarsCharacters.js`. This component will be responsible for fetching and displaying the Star Wars characters.
2. Import React into your `StarWarsCharacters.js` file.

<details>
<summary>Hint: Importing React</summary>

```javascript
import React from "react";
```

</details>

3. Once you import React, create your functional component called "StarWarsCharacters" and return an h1 tag inside of a div tag with the text content "Characters". This will be a temporary placeholder until we display our information later in this lab.
4. Export your component at the end of the file.

<details>
<summary>Hint: Completed Component</summary>

```javascript
import React from "react";

function StarWarsCharacters() {
  return (
    <div>
      <h1>Star Wars Characters</h1>
    </div>
  );
}

export default StarWarsCharacters;
```

</details>

### 2. Implementing useEffect

React's `useEffect` Hook allows you to perform side effects in function components. In simple terms, **side effects** are operations that affect something outside the scope of the function being executed. These could include working with API requests, timers, manually changing the DOM, and more. `useEffect` is used to deal with side effects that occur from rendering and data changes.

In our current scenario, we will use it for logging a message to the console when the component is mounted, but it could also be used to fetch data from a server, listen to events, or perform some other "side effect" that you don't want to run every time the component renders.

Here's a code example:

```javascript
import React, { useEffect } from "react";

function StarWarsCharacters() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
    </div>
  );
}
```

Let's break it down:

1. **Importing `useEffect`:** First, we import the `useEffect` Hook from the React library. Hooks are functions that let you “hook into” React state and lifecycle features from function components.

2. **Using `useEffect`:** In our functional component, `StarWarsCharacters`, we call `useEffect`. This Hook takes in two arguments: a function and an array. The function contains the side effect you want to run.

3. **The Effect function:** We're passing a function to `useEffect` that runs our side effect. In this case, it's logging a message to the console.

4. **Dependency Array:** The second argument to `useEffect` is an array of dependencies. The effect will only rerun if the dependencies have changed since the last render. By passing an empty array (`[]`), we're telling React that our effect doesn't depend on any values from the component, so it only runs once after the initial render. This mirrors the `componentDidMount` lifecycle method from class components.

The `useEffect` Hook is a powerful tool that gives functional components the same capabilities that were previously only possible with class components. It replaces several lifecycle methods (`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`) and allows you to organize your side effects in a more intuitive way.

##### Adding useEffect

In your `StarWarsCharacters.js file`, import useEffect and initialize a useEffect hook with a `console.log("We will fetch our data here!")` inside of it.

<details>
<summary>Hint: StarWarsCharacters.js so far...</summary>

```javascript
import React, { useEffect } from "react";

function StarWarsCharacters() {
  useEffect(() => {
    console.log("We will fetch our data here!");
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
    </div>
  );
}

export default StarWarsCharacters;
```

</details>

### Part 3. Fetching Data with Axios

In web development, you often need to fetch data from an API and display it on your page. Axios is a popular JavaScript library for making HTTP requests. It works in both the browser and Node.js, supports the Promise API, and provides a wide range of features.

Axios has methods for HTTP requests such as `get`, `post`, `put`, `delete`, etc. In this lab, we're using the `get` method to fetch data from our API:

```javascript
axios
  .get("http://localhost:3001/api/people")
  .then((response) => {
    setCharacters(response.data.results);
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
```

Here's what's happening in this code:

- `axios.get('http://localhost:3001/api/people')`: This line sends a GET request to the API endpoint at 'http://localhost:3001/api/people'. The `get` method returns a promise that resolves to the response from the API.

- `.then(response => {...})`: This is the `.then` method of the promise returned by `axios.get`. It is called when the promise is resolved, i.e., when we get the response from the API. The `response` object contains all the information about the response, including the status, headers, and data. In the callback function, we call `setCharacters` to update our `characters` state with the fetched data.

- `setCharacters(response.data.results)`: This line updates our `characters` state with the fetched data. `response.data` is the actual data returned by the API. In this case, it's an object that has a `results` property containing the list of characters.

- `.catch(error => {...})`: This is the `.catch` method of the promise. It is called if an error occurs while sending the request or receiving the response. The `error` object contains information about the error. Here, we're logging the error to the console.

The `axios.get` request is asynchronous, which means it doesn't block the rest of your code from executing while it's waiting for the API response. This is why we use the `.then` and `.catch` methods to handle the response and error respectively: they are called when the asynchronous operation completes.

Using Axios, you can also set headers, transform the request and response data, cancel requests, and even create an instance of Axios with custom defaults. It's a powerful library that simplifies the process of working with APIs in JavaScript.

### Part 4. Implementing State with useState

State is a built-in feature of React components that allows them to remember and manipulate data without requiring a refresh of the page. It's similar to instance variables for a class in object-oriented programming.

React components have a built-in state object. The state object is where you store property values that belong to the component. When the state object changes, the component re-renders.

For functional components, we use the `useState` Hook to manage the state. The `useState` Hook is a function that takes one argument, the initial state, and returns an array of two elements: the current state and a function to update it. It's a convention to use array destructuring to assign names to these elements.

```javascript
const [characters, setCharacters] = useState([]);
```

In this line of code, `useState([])` initializes `characters` state as an empty array. The function `useState` returns an array where the first element is the current state, and the second element is a function to update that state. Using array destructuring, we assign the current state to `characters` and the function to update the state to `setCharacters`.

Any time you want to change `characters`, you must use `setCharacters`. This is because state in React is **immutable**. You can't change it directly. If you want to change state, you need to use the updating function (`setCharacters` in this case).

For example, when we fetch the Star Wars characters from the API, we can store them in `characters` state:

```javascript
axios
  .get("http://localhost:3001/api/people")
  .then((response) => {
    setCharacters(response.data.results);
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
```

Here, we're using `setCharacters` to update our `characters` state with the data we receive from our API.

When we update the state by calling `setCharacters`, React automatically triggers a re-render of the component, so the new data is displayed on the page.

Remember, it's crucial to always use the updating function returned by `useState` when you want to change state. Directly changing the state variable will not trigger a re-render of the component, so your users won't see the updated data.

### Part 5. Displaying the Characters

After fetching the characters and storing them in the state, the final step is to display the characters on the page. Here, we map over the `characters` array and render a list item for each character.

We will display not only their names but also their `gender`, `homeworld`, `height`, `species`, and `birth_year`. Remember that this information is stored in the properties of each character object in the `characters` array.

```javascript
return (
  <div>
    <h1>Star Wars Characters</h1>
    <ul>
      {characters.map((character) => (
        <li key={character.name}>
          <h2>{character.name}</h2>
          <p>Gender: {character.gender}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Height: {character.height}</p>
          <p>Homeworld: {character.homeworld}</p>
          <p>Species: {character.species[0]}</p>
        </li>
      ))}
    </ul>
  </div>
);
```

In this JSX code, for each `character` in the `characters` array, we create a list item that displays the character's `name`, `gender`, `birth_year`, `height`, `homeworld` URL, and the first `species` URL. We use curly braces `{}` to embed JavaScript expressions in JSX, and we access the character properties using the dot notation (`.`).

Be sure to always check that the data you want to display exists before trying to render it to prevent any unexpected errors. Here, we are assuming that each character has a non-empty `species` array.

Remember that React requires a unique `key` prop for each child in a list, and here we are using the character's `name` for that purpose. This helps React identify which items have changed, are added, or are removed, and contributes to the efficiency of rendering.

### Part 6. Creating an Express Server to Fetch and Send Data

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. You'll create an Express server that fetches data from the Star Wars API and sends it to the front end.

The following code creates a server that listens on port 3001. It has a single endpoint that responds to GET requests at `/api/people` by making a request to the Star Wars API, fetching the data, and sending it as the response.

```javascript
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

app.get("/api/people", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/people/");
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Error fetching data from Star Wars API");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

### Part 7. Review

**Functional Components:** Functional components have a simple structure and are easy to understand. They don't have their lifecycle methods or state, which can simplify your components, and with Hooks, they are just as powerful as class components.

**React Hooks:** Hooks allow you to use state and other React features in functional components. `useEffect` and `useState` are the basic Hooks that allow you to use React features in a more direct way.

**Axios:** Axios is a popular JavaScript library used to make HTTP requests. It supports the Promise API and is more feature-rich compared to the fetch API built into modern browsers. It makes it easy to send asynchronous HTTP requests and handle responses.

**Express Server:** An Express server is a simple way to create a server-side component of your application. It's easy to create routes and handle requests and responses.

**Rendering Lists in React:** To render multiple components in React, you can use JavaScript's array `map()` function in JSX. Remember to include a unique `key` prop for each child in the list.

**Accessing Object Properties:** In JavaScript, you can access the properties of an object using the dot notation (`.`). In this lab, each character is an object with properties such as `name`, `gender`, `homeworld`, etc.

**Embedding JavaScript in JSX:** JSX is not just HTML. It's a syntax extension for JavaScript, so you can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`.

**Remember to practice these concepts and review them if they're not entirely clear yet. They are fundamental to working with React and building modern web applications. Happy coding!**
