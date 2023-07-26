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

### Part 4. Implementing State with useState

State is a built-in feature of React components that allows them to remember and manipulate data without requiring a refresh of the page. It's similar to instance variables for a class in object-oriented programming.

React components have a built-in state object. The state object is where you store property values that belong to the component. When the state object changes, the component re-renders.

For functional components, we use the `useState` Hook to manage the state. The `useState` Hook is a function that takes one argument, the initial state, and returns an array of two elements: the current state and a function to update it. It's a convention to use array destructuring to assign names to these elements.

```javascript
const [data, setData] = useState([]);
```

In this line of code, `useState([])` initializes `data` state as an empty array. The function `useState` returns an array where the first element is the current state, and the second element is a function to update that state. Using array destructuring, we assign the current state to `data` and the function to update the state to `setData`.

Any time you want to change `data`, you must use `setData`. This is because state in React is **immutable**. You can't change it directly. If you want to change state, you need to use the updating function (`setData` in this case).

##### Adjusting our component with useState

1. In your `StarWarsCharacters` component, initialize a state variable to hold our character data.

<details>
<summary>Hint: State variable</summary>

```javascript
const [characters, setCharacters] = useState([]);
```

</details>

2. Adjust your fetchCharacters function to update the state once the data had been fetched.

<details>
<summary>Hint: Completed useEffect</summary>

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

</details>

This code is placed inside a `useEffect` to run once the component mounts. When the response is received, the `response.data.results` (which contains the array of Star Wars characters) is stored into `characters` state using the `setCharacters` function. If an error occurs during the request, it's caught and logged to the console.

When the state updates by calling `setCharacters`, React automatically triggers a re-render of the component, displaying the new data. This is one of the main advantages of using state in React - your UI is always in sync with your data.

Always remember, it's crucial to use the update function returned by `useState` (in this case `setCharacters`) when you want to change state. Directly mutating the state variable does not trigger a re-render, and therefore, the changes will not be reflected on your UI.

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

### Part 7. Review

**Functional Components:** Functional components have a simple structure and are easy to understand. They don't have their lifecycle methods or state, which can simplify your components, and with Hooks, they are just as powerful as class components.

**React Hooks:** Hooks allow you to use state and other React features in functional components. `useEffect` and `useState` are the basic Hooks that allow you to use React features in a more direct way.

**Axios:** Axios is a popular JavaScript library used to make HTTP requests. It supports the Promise API and is more feature-rich compared to the fetch API built into modern browsers. It makes it easy to send asynchronous HTTP requests and handle responses.

**Rendering Lists in React:** To render multiple components in React, you can use JavaScript's array `map()` function in JSX. Remember to include a unique `key` prop for each child in the list.

**Accessing Object Properties:** In JavaScript, you can access the properties of an object using the dot notation (`.`). In this lab, each character is an object with properties such as `name`, `gender`, `homeworld`, etc.

**Embedding JavaScript in JSX:** JSX is not just HTML. It's a syntax extension for JavaScript, so you can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`.

**Remember to practice these concepts and review them if they're not entirely clear yet. They are fundamental to working with React and building modern web applications. Happy coding!**
