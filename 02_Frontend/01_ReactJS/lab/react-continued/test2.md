# React Basics: Working with APIs using React and Axios

## Objective

In this lab, you will create a web application that displays Star Wars characters using the Star Wars API (SWAPI). You will create a simple Express server that fetches data from the Star Wars API and sends it to the front end. The front-end application will be created using `create-react-app`, with an emphasis on functional components and the `useEffect` React Hook. You will also utilize `axios` for making HTTP requests.

## Prerequisites

To successfully complete this lab, you should be familiar with JavaScript, and basic React concepts. If you're not, please go through some beginner-friendly tutorials before attempting this lab.

## Setup

**Installing the Required Software and Libraries**: This is the initial step before you start building the application. Node.js allows you to run JavaScript on your server, and npm is a package manager that is used to install libraries in your project. `create-react-app` is a tool that sets up a new React application with a single command, saving you the trouble of manually setting up the structure and configurations. Finally, Axios is a library that will help you make HTTP requests to fetch or save data.

### Steps:

1. Install Node.js and npm: If you haven't installed them already, you can download them [here](https://nodejs.org/).

2. Create a New React Application: Run `npx create-react-app star-wars-characters`. This command creates a new React application in a directory called `star-wars-characters`.

3. Move into the New Directory: Change your directory to your new app by running `cd star-wars-characters`.

4. Install Libraries: Install axios and express by running `npm install axios express`.

Now, open the project in your favorite code editor.

## Task

### 1. Understanding and Implementing Functional Components

**Functional components** are a way of defining components as JavaScript functions. These components can accept props as arguments and return a React element, which can be a description of UI. Using functional components simplifies the writing of components and omits the need for managing the component's lifecycle and state.

Inside the `src` directory, create a new file `StarWarsCharacters.js`. This component will be responsible for fetching and displaying the Star Wars characters.

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

### 2. Understanding and Implementing useEffect

The `useEffect` Hook allows you to perform side effects in function components. In simple terms, **side effects** are anything that affects something outside the scope of the function being executed. In this case, it's making an API request to fetch data from a server. We use the `useEffect` Hook within the component to run the code after the component renders.

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

### 3. Understanding Axios and Fetching Data

Axios is a promise-based HTTP client for the browser and Node.js. Axios makes it easy to send asynchronous HTTP requests. It has a more powerful and flexible feature set and is more popular among developers compared to the fetch API built into modern browsers due to its versatility and ease of use.

In your `useEffect` callback, make a GET request to your Express server to fetch the Star Wars characters:

```javascript
useEffect(() => {
  axios
    .get("http://localhost:3001/api/people")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data", error);
    });
}, []);
```

### 4. Understanding and Implementing State with useState

The `useState` Hook is a built-in Hook in React that allows you to add React state to your functional components. This state is preserved between re-renders, and you can change its value to trigger a re-render of your component.

```javascript
const [characters, setCharacters] = useState([]);
```

Here, `characters` is the state variable that will store the list of characters we receive from the API, and `setCharacters` is the function that we'll use to update that state.

### 5. Displaying the Characters

After fetching the characters and storing them in the state, the final step is to display the characters on the page. Here we map over the `characters` array and render a list item for each character.

```javascript
return (
  <div>
    <h1>Star Wars Characters</h1>
    <ul>
      {characters.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  </div>
);
```

### 6. Creating an Express Server to Fetch and Send Data

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

## Review and Helpful Tips

1. **Functional Components:** Functional components have a simple structure and are easy to understand. They don't have their lifecycle methods or state, which can simplify your components, and with Hooks, they are just as powerful as class components.

2. **React Hooks:** Hooks allow you to use state and other React features in functional components. `useEffect` and `useState` are the basic Hooks that allow you to use React features in a more direct way.

3. **Axios:** Axios is a popular JavaScript library used to make HTTP requests. It supports the Promise API and is more feature-rich compared to the fetch API built into modern browsers. It makes it easy to send asynchronous HTTP requests and handle responses.

4. **Express Server:** An Express server is a simple way to create a server-side component of your application. It's easy to create routes and handle requests and responses.

5. **Remember to practice these concepts and review them if they're not entirely clear yet. They are fundamental to working with React and building modern web applications. Happy coding!**

Absolutely! Let's make use of async/await with try/catch which offers a more synchronous style of handling promises, making the code cleaner and easier to understand.

### Part 3. Understanding Axios and Fetching Data with Async/Await

In web development, you often need to fetch data from an API and display it on your page. Axios is a popular JavaScript library for making HTTP requests. It works in both the browser and Node.js, supports the Promise API, and provides a wide range of features.Axios has methods for HTTP requests such as `get`, `post`, `put`, `delete`, etc.

The async/await syntax in JavaScript is a more modern and succinct way to handle asynchronous operations. It makes asynchronous code look and behave a little more like synchronous code, thus making it easier to understand and write.

In this lab, we're using the `get` method to fetch data from our API. Here's a basic example of how you can use `axios.get` with async/await to send a GET request:

```javascript
async function fetchData() {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
fetchData();
```

Let's break this down:

1. **async function:** An async function is a function declared with the `async` keyword. Async functions are instances of the AsyncFunction constructor, and the `await` keyword can only be used within an async function.

2. **await axios.get:** The `await` keyword causes the JavaScript runtime to pause and wait for the promise to resolve or reject, and then to resume execution and return the resolved value.

3. **try/catch:** The try/catch statement marks a block of code to try, and specifies a response should an exception be thrown.

Now, let's implement Axios with async/await in our `useEffect` to fetch data from our Star Wars API.

##### Implementing Axios

Inside your `useEffect` in your `StarWarsCharacters` component, implement an `async` function called `fetchCharacters` that uses a try/catch block to request data using [Axios](https://axios-http.com/docs/api_intro) from the [Star Wars API](https://swapi.dev/documentation).

```javascript
useEffect(() => {
  const fetchCharacters = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  fetchCharacters();
}, []);
```

In this code:

1. We define an asynchronous function `fetchCharacters` inside `useEffect` that fetches data from the Star Wars API.
2. We send a GET request to the Star Wars API using `axios.get`. The URL we're passing is the endpoint that contains the data for Star Wars characters.
3. If the GET request is successful, the requested data is logged to the console (`console.log(response.data.results)`).
4. If an error occurs during the request (like network issues, server down, etc.), it's caught in the catch block and logged to the console (`console.error("Error fetching data", error)`).

This way, you're setting up a pattern to fetch data from an API, handle the response, and catch any errors that might occur during the request. It's a good practice to always handle the potential error case when dealing with promises to prevent any uncaught promise rejection warnings.

Next, we'll look at how to display the fetched data in our React component.

Absolutely, here's your updated section:

### Part 4. Implementing State with useState

React's state is a built-in object that contains data that may change over the lifetime of the component and influences the behavior or output of a component. State is similar to instance variables for a class in object-oriented programming, but in the context of a React component.

State in functional components can be implemented using the `useState` Hook. The `useState` Hook is a function that takes one argument - the initial state, and returns an array containing the current state and a function to update it. It's common to use array destructuring to assign names to these values.

Here's a simple example of how `useState` can be used:

```javascript
const [characters, setCharacters] = useState([]);
```

In this line of code, `useState([])` initializes the `characters` state variable as an empty array. `useState` returns an array where the first element is the current state value (`characters`), and the second element is a function to update that state (`setCharacters`).

To change the state, you would use the `setCharacters` function. Direct mutation of state is discouraged in React as it may lead to unexpected behavior.

When fetching data, you can store the received data in your state. Here's an example where data fetched from an API using Axios is stored in the `characters` state:

```javascript
useEffect(() => {
  const fetchCharacters = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  fetchCharacters();
}, []);
```

This code is placed inside a `useEffect` to run once the component mounts. When the response is received, the `response.data.results` (which contains the array of Star Wars characters) is stored into `characters` state using the `setCharacters` function. If an error occurs during the request, it's caught and logged to the console.

When the state updates by calling `setCharacters`, React automatically triggers a re-render of the component, displaying the new data. This is one of the main advantages of using state in React - your UI is always in sync with your data.

Always remember, it's crucial to use the update function returned by `useState` (in this case `setCharacters`) when you want to change state. Directly mutating the state variable does not trigger a re-render, and therefore, the changes will not be reflected on your UI.
