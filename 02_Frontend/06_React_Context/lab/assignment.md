# Lab: State Management with React Hooks and Context API

## Introduction:

In this lab, we're going to build on our basic understanding of React Hooks and the Context API. By now, you should be familiar with creating a basic React application, defining components, and managing state with hooks. Now, let's delve into some advanced topics like context, state management, and avoiding prop drilling.

## Part 1: Setting Up The Project

- Step 1: Create a new folder named `ReactContextLab` using the `mkdir` command. This will be the root directory of your project.

- Step 2: CD into your `ReactContextLab` directory and use `npx create-react-app .` to initialize your React application. This command sets up a new React application with a standard directory structure and some default configuration.

## Part 2: Creating Context and Provider

- Step 1: Create a `TeamContext` using React's `createContext` function. This creates a new context that can be used to share state across multiple components. The context is like a global variable that can be accessed from any component in the component tree.

```javascript
import React from "react";

const TeamContext = React.createContext();

export default TeamContext;
```

- Step 2: Create a `TeamsProvider` component. This component will use the `useState` hook to manage the currently selected team and a list of all teams. The provider component is responsible for providing the state and any state update functions to the components that need them.

```javascript
import React, { useState } from "react";
import TeamContext from "./TeamContext";

const TeamsProvider = ({ children }) => {
  const [team, setTeam] = useState(null);
  const [allTeams, setAllTeams] = useState([]);

  // Rest of the code goes here...

  return (
    <TeamContext.Provider value={{ team, setTeam, allTeams, setAllTeams }}>
      {children}
    </TeamContext.Provider>
  );
};

export default TeamsProvider;
```

- Step 3: The `TeamsProvider` should use the `useEffect` hook to fetch a list of all teams from a mock API (you can create a simple array of team names for this purpose) when the component mounts. The `useEffect` hook allows you to perform side effects, such as data fetching, in function components.

```javascript
import React, { useState, useEffect } from "react";
// ...rest of the imports

const TeamsProvider = ({ children }) => {
  // ...rest of the code

  useEffect(() => {
    // Replace this with your actual API call
    const fetchTeams = async () => {
      const teams = ["Team 1", "Team 2", "Team 3"];
      setAllTeams(teams);
    };

    fetchTeams();
  }, []);

  // ...rest of the code
};
```

## Part 3: Using the Context

- Step 1: Create a `useTeamContext` hook that uses the `useContext` hook to access the data from the `TeamContext`. This custom hook will make it easier to access the context data from any component.

```javascript
import { useContext } from "react";
import TeamContext from "./TeamContext";

const useTeamContext = () => {
  return useContext(TeamContext);
};

export default useTeamContext;
```

- Step 2: Create a `TeamSelection` component that allows the user to select a team. This component should use the `useTeamContext` hook to access and update the currently selected team. By using the context, we can avoid passing the team and setTeam props down from the parent component.

```javascript
import React from "react";
import useTeamContext from "./useTeamContext";

const TeamSelection = () => {
  const { team, setTeam, allTeams } = useTeamContext();

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <select value={team} onChange={handleChange}>
      {allTeams.map((team) => (
        <option key={team} value={team}>
          {team}
        </option>
      ))}
    </select>
  );
};

export default TeamSelection;
```

- Step 3: Create a `TeamData` component to display data specific to the selected team. This component should also use the `useTeamContext` hook to access the currently selected team. This demonstrates how the context can be used to share state across different parts of the component tree.

```javascript
import React from "react";
import useTeamContext from "./useTeamContext";

const TeamData = () => {
  const { team } = useTeamContext();

  return <div>{team ? `Data for ${team}` : "Please select a team"}</div>;
};

export default TeamData;
```

## Part 4: Using the Provider

- Step 1: Wrap your application in the `TeamsProvider` component to provide the context to all components. This allows any component in the application to access the context data, regardless of where it is in the component tree.

```javascript
import React from "react";
import TeamsProvider from "./TeamsProvider";
import TeamSelection from "./TeamSelection";
import TeamData from "./TeamData";

const App = () => {
  return (
    <TeamsProvider>
      <TeamSelection />
      <TeamData />
    </TeamsProvider>
  );
};

export default App;
```

## Part 5: Review

In this lab, you've deepened your understanding of React Hooks and the Context API by:

- Creating a context using `React.createContext`. This allows you to create a "global" state that can be accessed from any component in the component tree.
- Providing the context with a provider component. The provider component is responsible for providing the state and any state update functions to the components that need them.
- Accessing the context with a custom hook. This makes it easier to access the context data from any component, without having to pass props down through multiple levels of the component tree.
- Using the context to manage state across multiple components. This allows you to share state across different parts of the component tree, without having to lift the state up to a common ancestor component.
- Avoiding prop drilling by using context to share state across the component tree. This makes your code cleaner and easier to maintain, as you don't have to pass props down through multiple levels of the component tree.

You've built a simple application that allows users to select a team and displays data specific to the selected team. This application demonstrates the power of the Context API for state management in React applications.
