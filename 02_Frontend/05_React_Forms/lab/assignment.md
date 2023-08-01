# Lab: React Forms Deep Dive

### Introduction:

In this lab, we're going to build on our basic understanding of React and dive deeper into forms. You will practice using controlled components, utilizing the `useState` hook. We will also be creating forms that send `POST`, `PUT`, and `DELETE` requests.

## Part 1: Setting Up The Project

- Step 1: Create a new project named `react-forms-lab` using the `create-react-app` command.

```zsh
% npx create-react-app react-forms-lab
```

- Step 2: CD into your `react-forms-lab` directory.
- Step 3: Install Axios for making HTTP requests.

```zsh
% npm install axios
```

- Step 4: Run your application

```zsh
% npm start
```

## Part 2: Controlled Components using useState

Controlled components have their values controlled by React. We can combine `useState` and `onChange` to ensure that the state being held in a React component is the “single source of truth”.

- Step 1: Create a new component `ControlledForm.js`.
- Step 2: In this component, create a form with two input fields (for example, `name` and `email`) and a submit button.
- Step 3: Use `useState` to create states for your input fields.
- Step 4: Implement a submit handler that reads the values of the input fields from their states.

<details>
<summary>Hint: Controlled Form with useState</summary>

```javascript
import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

</details>

## Part 3: Sending HTTP Requests

Now that we have our form, let's make it do something useful. We'll use Axios to send `POST`, `PUT`, and `DELETE` requests when the forms are submitted.

- Step 1: Install JSON Server to create a fake REST API for testing.

```zsh
% npm install -g json-server
```

- Step 2: Create a `db.json` file in your project root. This will serve as your "database".

```json
{
  "users": []
}
```

- Step 3: Start JSON Server.

```zsh
% json-server --watch db.json
```

- Step 4: In your `ControlledForm`, modify the form to include an `id` field. Modify the submit handler to send a `POST` request to `http://localhost:3000/users` to create a new user, a `PUT` request to `http://localhost:3000/users/:id` to update a user, and a `DELETE` request to `http://localhost:3000/users/:id` to delete a user. Make sure to add these functions to the `onSubmit` of the form and enter the correct data in the forms to perform the respective CRUD operations.

<details>
<summary>Hint: Axios POST Request</summary>

```javascript
import axios from "axios";

// ...

const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await axios.post("http://localhost:3000/users", {
    name,
    email,
  });
  console.log(response.data);
};
```

</details>

<details>
<summary>Hint: Axios PUT Request</summary>

```javascript
import axios from "axios";

// ...

const handleUpdate = async (event) => {
  event.preventDefault();
  const response = await axios.put(`http://localhost:3000/users/${id}`, {
    name,
    email,
  });
  console.log(response.data);
};
```

</details>

<details>
<summary>Hint: Axios DELETE Request</summary>

```javascript
import axios from "axios";

// ...

const handleDelete = async (event) => {
  event.preventDefault();
  const response = await axios.delete(`http://localhost:3000/users/${id}`);
  console.log(response.data);
};
```

</details>

## Part 4: Testing the Forms

You can test your forms by opening your application in a web browser and filling out the forms. After submitting a form, check the console for any errors. You can also check the Network tab in your browser's developer tools to see the HTTP request.

You can view the data in your "database" by navigating to `http://localhost:3000/users` in your web browser. This will show you all the users that have been added. You can also view a specific user by adding their id to the end of the URL, like `http://localhost:3000/users/1`.

## Part 5: Review

In this lab, you've learned how to:

- Set up a new React project using `create-react-app`.
- Create controlled components using the `useState` hook.
- Handle form submission in React.
- Send `POST`, `PUT`, and `DELETE` requests using Axios.
- Test your forms and HTTP requests.

Well done! You've now deepened your understanding of React forms by using controlled components, sending HTTP requests, and testing your forms. Keep practicing to reinforce these skills.
