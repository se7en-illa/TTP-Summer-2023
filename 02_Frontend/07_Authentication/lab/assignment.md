# Lab: JWT Authentication and Password Hashing

## Introduction:

In this lab, we're going to build on our basic understanding of React Hooks and the Context API. By now, you should be familiar with creating a basic React application, defining components, and managing state with hooks. Now, let's delve into some advanced topics like context, state management, and avoiding prop drilling.

## Part 1: What we're building/Setting Up

1. Fork and clone [this repo](https://github.com/se7en-illa/auth_lab) to your computer.
2. Navigate into the project and open it in VSCode.
3. Use the command `npm install` in your terminal to install all of the node modules.
4. Take a moment to review the starting point.
5. Create a new postgres database called `auth_lab`.

### Defining the Problem

#### What is Authentication?

- In its most basic form, authentication is the providing of information to identify who someone is.
- Basic authentication often uses a username and a password for authentication.
- Users use their credentials to log into an application.

Let's break this down into smaller parts:

- user passes credentials
- server sends back user id
- user id is used to make requests and get responses
- the client side application updates its state, changing the UI
- note, we're doing this with react, but this could be done with any client side framework

At some point, a user will refresh the page. By default, this would automatically log them out. This is a non-optimal user experience!

HTTP is not stateful. It cannot remember that you are logged in. However, we can store some information in the browser using localStorage, which lets us set keys and values.

In this lab, we will do the following:

- Use the `jsonwebtoken` library to generate tokens
  - a valid token needs to be signed with a secret key only your server will know
  - a user will not have that key and will not be able to modify their token
- Use the bcrypt library to hash the passwords of a user in a Sequelize hook
  - the password can not be reverse engineered from the hash
  - but given a plain password and a hash, the bcrypt library can tell if the hashed password in the database was 'created' from a given plain password

## Part 2: Using JWT

The "token" we are using now is just the id of the user. This would make it pretty easy to impersonate someone as all you would have to do is set a token key in localStorage to an id of any user which exists in the database. Let's fix this!

Let's install the jsonwebtoken library using `npm install jsonwebtoken`. After that, require it in your start:dev script. We'll use this library to return a token which has a payload with the id of the user.

We'll also want to set-up our secret that will be used to sign and verify the tokens. To make this secure, let's set it up as an [environment variable](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html).

**_Modifying the start:dev script will not automatically result in the changed script being run. You need to stop your server and re-run npm run start:dev_**

<details>
<summary>Hint: Environment Variables</summary>

Update your `package.json` "start:dev" script to say something like `"start:dev": "JWT=somekeyhere nodemon server"`

You should call this variable from your code by saying `process.env.JWT`

</details>

#### Current Logic

Take a look at the POST route. You should notice that it authenticates the user and returns a token back to the client. The route is pretty small as it calls a class method which is doing all of the token work. Should our JWT logic go in the route or in the class method?

<details>
<summary>Hint: Answer</summary>

We will want to update the class method with our JWT logic since this is where the current token is being handled.

</details>

#### Token Generation

Replace the token placeholder in the `authenticate` function with a JWT. The payload for the token should be a user object containing just the user's id.

```javascript
{ userId: <whatever the users id is> }
```

<details>
<summary>Hint: More Direction</summary>

Create the token by using the sign function provided by [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#usage).

</details>

#### Token Exchange

Take a look at the GET route to "/api/auth". This route assumes that the authorization header has been set on the request and it uses that to verify the user by its token. It also uses a class method which has all the logic for handling the token. Replace this logic with your own so that you verify the given token was signed by your app. If it was, you can use the data in the token to identify the user and pull all their information from the database. The route should ultimately return a full user object.

<details>
<summary>Hint: More Direction</summary>

Inside of the `byToken` function we should use the [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#usage) function called `verify` to check that the given token is valid. If it is, we can now query our database with the userId returned by verify and return the user object.

</details>

#### How much code for this feature

This is a big feature, which will go along way towards securing your app. One thing to notice is how much code you had to add / modify to implement this feature? Not much.

- an environment variable
- a line to sign a token
- a line to decode the token
- maybe one or two other modifications

## Part 3: bcrypt

### Hashing Passwords

We have done everything needed to get JWT authentication added to our application! Now it's time to make sure our data is secure.

There's a big security vulnerability in our app right now: all the passwords are stored in plain text. Ideally we want to encrypt these passwords before storing them. Go ahead and install the `bcrypt` library and use it to:

- Encrypt passwords before storing them.
- Compare plain passwords with hashed passwords in the authentication step.

#### Hashing the Password

Take a look at your database: what format are the passwords in right now? You should see that they are all stored as plain passwords (no encryption yet!). Why do you think this would this be a bad practice even for a 'hobby' app? (note that many people use the same passwords for everything)

Fix this by encrypting those passwords.

<details>
<summary>Hint: Hashing</summary>

When a User is _created_, hash the password using the the **bcrypt** library. Is there some function that runs every time a user is created?

</details>

<details>
<summary>Hint: More Direction</summary>

The Sequelize hook `beforeCreate` runs every time we try to create a new user. Use the `hash` function from [bcrypt](https://github.com/kelektiv/node.bcrypt.js#usage) inside of the hook to reassign the `user.password` before its saved in the database.

</details>

#### Authenticating

After hashing the password, you should notice that authentication is now broken. That's because the passwords our users enter do not match what is stored in the database.

Fix this by updating the `authenticate` function.

<details>
<summary>Hint: Authenticating</summary>

Use the **bcrypt** library to find out if the hashed password was hashed from the plain text password by using the `compare` function ([docs](https://github.com/kelektiv/node.bcrypt.js#usage)).

</details>

## Part 3: User Notes

### Adding the Model

#### Defining the Model

If you look at your `db.js` file, you'll notice this is where the User model has been defined. Define a new model called "note" that has a column named "text" (the datatype for this column can simply be a string).

A note belongs to a user, and a user can have several notes. Set-up the appropriate associations between users and notes.

#### Seeding More Data

Further down the `db.js` file, you'll notice a function named `syncAndSeed`. Take a little time to walk through this function to understand how its seeding our user data.

When you're ready, add some code to the function that:

- Creates several notes
- Assigns those notes to the seeded users

<details>
<summary>Hint: Example Solution</summary>

```javascript
const notes = [
  { text: "hello world" },
  { text: "reminder to buy groceries" },
  { text: "reminder to do laundry" },
];
const [note1, note2, note3] = await Promise.all(
  notes.map((note) => Note.create(note))
);
await lucy.setNotes(note1);
await moe.setNotes([note2, note3]);
```

</details>

### Adding the Route

#### Defining the Route

Navigate over to your `app.js` file. In addition to our auth routes, we are going to have a route for retrieving a user's notes. Take a minute and think, what would be a good route path for getting a user's notes? Try to follow the REST principles.

<details>
<summary>Hint: Answer</summary>

Define this route as a GET to "/api/users/:id/notes".

Since this route is specific to users we want the route path to include "/users" and an identifier for the user "/users/:id". We ultimately are looking to get a subset of a user's information (just their notes), so we list that part last giving us "/api/users/:id/notes".

</details>

#### Defining the Response

Go ahead and write the code for this route. Use the request parameter to identify the user and retrieve all of their notes. This route should respond with an array of notes owned by the given user.

### Making the Call from React

At this point our backend is ready to deliver notes to us, let's get our frontend hooked up!

Open up the `index.html` file. Where would be a good place to hold onto the "notes" part of our state?

<details>
<summary>Hint: Answer</summary>

The App component is the perfect place to hold onto our notes array.

</details>

Go ahead and add notes as an additional state variable.

#### Adding the API Call

Where in our React code do we make the call to get our users data after they've logged in?

Add an additional axios call to your notes route to retrieve back the array of notes. Use that array of notes to update your new "notes" part of the state.

<details>
<summary>Hint: More Direction</summary>

Our function `attemptTokenLogin` retrieves the user's data after they log in. From inside of this function, we can use the response from the API call to GET /api/auth to make a second request to our route.

</details>

#### Updating the Render

Display all the user's notes on our welcome page. Feel free to style these however you want! A good starting place may be an unordered list.

### Securing the Route

#### Checking the User

Currently, we aren't being very secure in our notes route. If I happen to know the id of another user, I can simply make a call to that route and get access to all of their notes. Let's fix this route so that only the currently logged in user can access their routes.

This route will now assume that the request has sent a JSON web token as a header in the request. Grab the authorization header from the request object and use it to figure out the user id associated with that token.

Check that the user id from our JWT matches the user id provided in the request parameters. If it does, we can return the notes as we did before. If it does not, we should send a response including a helpful status code.

<details>
<summary>Hint: Getting a user id from a token</summary>

The `byToken` function we defined takes in a token and returns a user object. Use this function to get the user's data (including their id) from the given token.

</details>

#### Updating our Frontend

Now that our notes route is dependent on retreiving a JWT as an authorization header, let's make sure to update our axios call to pass in that information. Use the GET request to "/api/auth" as a template, and update the axios call to the notes route accordingly.

<details>
<summary>Hint: Passing in headers</summary>

In axios, we can pass in headers through a second parameter in our get function like so:

```javascript
axios.get("/some/route/path", { headers: { authorization: token } });
```

Note that "token" should be a variable that points to your stored JWT.

</details>

### Abstracting to Middleware

#### Motivation

We only have a few routes in this application, but you may notice some repeated code already. It seems that we'll have to call our `byToken` function for every request that takes in a token. Rather than calling this function over and over in every route, can we define this call to `byToken` once and repeat it in each route?

A really useful pattern here is to create a custom middleware function that that handles the jwt verify call for us. We can even use this step to attach the user's data to the req object before it even gets to our routes. Pretty snazzy, right?

#### Defining the Middleware

Let's start by defining a function called `requireToken`. Define this function in your `app.js` file above your routes.

As it's a middleware function it takes in three parameters: `req`, `res`, and `next`. It should do the following:

- Extract the token from the request headers
- Make a call to `byToken` to get the user object
- Set the value of `req.user` to be that user's data
- Call `next()` to pass the request along to the next middleware function in the chain

<details>
<summary>Hint: Full solution code</summary>

```javascript
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.byToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
```

</details>

#### Call the Middleware

If we have middleware that we want to run before our route runs, we can pass it into our route handler as a callback function. For example:

```javascript
app.get("/home", requireToken, (req, res, next) => {
  res.send("Home page!");
});
```

The middleware function `requireToken` in the above route will run before the callback containing `res.send` does.

So for any route that is dependent upon users having a token, we can pass `requireToken` in as middleware. In other apps which use multiple routers, it may make sense to pass this middleware in at the router level or even app level! For now though, we'll pass it into individual routes. Update the GET route to "/api/auth" as well as the notes route to call this middleware function.

<details>
<summary>Hint: Full solution code</summary>

```javascript
app.get('/api/auth', requireToken, async (req, res, next) => {
...
}

app.get('/api/users/:id/notes', requireToken, async (req, res, next) => {
...
}
```

</details>

#### Using `req.user`

Now that we are calling `requireToken` before our routes, let's remove any unnecessary code from those two routes. If we need user data, we can simply use `req.user` to grab the data we added in our middleware function.
