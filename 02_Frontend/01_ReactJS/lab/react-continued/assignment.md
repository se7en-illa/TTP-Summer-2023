# React Basics: Working with APIs using React and Axios

## Objective

In this lab, you will create a web application that displays Star Wars characters using the Star Wars API (SWAPI). You will create a simple Express server that fetches data from the Star Wars API and sends it to the front end. The front-end application will be created using `create-react-app`, with an emphasis on functional components and the `useEffect` React Hook. You will also utilize `axios` for making HTTP requests.

## Prerequisites

To successfully complete this lab, you should be familiar with JavaScript, and basic React concepts. If you're not, please go through some beginner-friendly tutorials before attempting this lab.

## Setup

**Installing the Required Software and Libraries**: This is the initial step before you start building the application. Node.js allows you to run JavaScript on your server, and npm is a package manager that is used to install libraries in your project. `create-react-app` is a tool that sets up a new React application with a single command, saving you the trouble of manually setting up the structure and configurations. Finally, Axios is a library that will help you make HTTP requests to fetch or save data.

### Steps:

1. Install Node.js and npm: If you haven't installed them already, you can download them [here](https://nodejs.org/).

2. Create a New React Application: Run `npx create-react-app react-starwars`. This command creates a new React application in a directory called `react-starwars`.

3. Move into the New Directory: Change your directory to your new app by running `cd react-starwars`.

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
