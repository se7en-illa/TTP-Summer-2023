# Let's talk login

## Authentication

- Ideally we want users to log in only once to our application and to continue to be authenticated while accessing the app
- When a user logs in: Are you who you say you are?
- When a user takes further action: Who is this request coming from again?
  - HTTP is stateless
- Analogy: when you check into a hotel they give you a unique key card that you can use to access amenities and your room, but not other people’s rooms.

## Authentication Flow

1. User inputs their credentials (username and password) and clicks “submit”.
2. Server receives credentials, verifies user, and sends back a token.
3. Future requests from the client include the token.
4. Future requests then received by the server verify and decode the token so the server knows who made the request.

## JSON Web Tokens

- Server side: used to verify that an incoming request is valid and that the user has permissions to do their requested action
- Some actions may be admin-only
- Client side: send with each request to verify identity and avoid having to constantly send usernames and passwords

### Anatomy of a Token

- A token consists of three parts separated by a "`.`" :
  - Header: identifies which algorithm is used to generate the signature
  - Payload: holds claims (or key-value pairs)
  - Signature: validates the token, makes sure it wasn’t altered
- It looks something like: `header.payload.signature`
- The tokens are serialized using base64, so don’t panic when it looks jumbled up!
  - Base64 is a method of encoding binary values as text

[Json Web Tokens Resource](https://jwt.io/)

### What is `jsonwebtoken`

- A node library that implements jwt
- We will use two main functions from it:
  - `sign`: Takes in data and a secret, returns a token
  - `verify`: Takes in a token and a secret, returns the data if valid or throws an error if not

### How to Use

First install
```bash
npm install jsonwebtoken
```

Then we can use it in our backend code
```js
const jwt = require("jsonwebtoken");

// secret key to sign your tokens, private to the server
const SECRET_KEY = "tacocat";

// create a token
// e.g: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkxMDY4NjM5fQ.N-ikhMlRMgAqspmcedA6Y8GySarLGnC7E-ElaS0OxJc
const token = jwt.sign({ username: "jane doe" }, SECRET_KEY);

// verify it's a valid token and return the data
// e.g: { username: "jane doe", iat: 8978907981 }
const verifyGood = jwt.verify(token, SECRET_KEY);

// throws JsonWebTokenError: invalid token
const verifyBad = jwt.verify("iosdfjofipdsj.kslkjsdfg.random", SECRET_KEY);
```

### So what happens if someone gets access to my token?

- This would be bad! Anyone with your token can essentially try to impersonate you.
- To avoid problems associated with this, it’s good practice to give your token a pretty short expiration time.
- Example:

```js
jwt.sign(
  {
    data: "foo",
  },
  "secret",
  { expiresIn: "1h" }
);
```

### How does the client store and send JWTs?

- Storage: 
  - Use localStorage available from the browser
  - Good Alternative: store as a cookie in the browser
- Sending:
  - Set the JWT as an “Authorization” header on HTTP requests
  - Alternative: Set the JWT as a Authorization but with the text set before the token => "Bearer [token]"

![Request Headers](./request-headers.png)

### How do we keep the secret safe?

- The secret value used to generate a token’s signature should be kept safe
- What if we want to push our code to Github?
  - Environment variables can be set on your local machine and called from inside your code:
    - From the terminal: `JWT=secret`
    - From your code: `const SECRET_KEY = process.env.JWT;`

## Passwords

- **👉🏽 Storing passwords in plain text is a bad idea 👈🏽**
- What happens if someone hacks your database?
- Access to your users’ accounts on your site
- Access to your users’ accounts on other sites

## Bcrypt

There are two main functions we will be using from this library:

- `hash` - creates a hashed value from a plain password
- `compare` - compares a plain password against a hashed password

### hash function

- When a user creates their account we do not want to store their password in plain text
- Add a step to convert the password they submitted to a hashed value by calling `bcrypt.hash`
- This function also takes “salt rounds” as input

### Salting

- Salt adds a little spice to your hashed values
- You can hash the same password multiple times and get different hashed values
  - What if someone cracks a hashed password?
- A higher salt count means more rounds of salting are being done
  - More rounds = more time -> more secure

```js
const bcrypt = require("bcrypt");

async function hashPassword() {
  const SALT_COUNT = 5;
  const hashedPassword = await bcrypt.hash("plain text password", SALT_COUNT);
  console.log(hashedPassword); // $2b$05$VfIxWvwm/G90UPJGQxVihOu116gCb/agPwJrKLZKzeHKyV0SHnF5m
}

hashPassword();
```

### `compare` function

- When a user logs back in, how do you know if their password is correct?
- `compare` checks the newly entered password against the stored hash password to see if they match

```js
const bcrypt = require("bcrypt");

async function verifyLogin() {
  const isValid = await bcrypt.compare(
    "plain text password",
    "$2b$05$VfIxWvwm/G90UPJGQxVihOu116gCb/agPwJrKLZKzeHKyV0SHnF5m"
  );

  console.log(isValid); // true

  const notValid = await bcrypt.compare(
    "some other password",
    "$2b$05$VfIxWvwm/G90UPJGQxVihOu116gCb/agPwJrKLZKzeHKyV0SHnF5m"
  );

  console.log(notValid); // false
}

verifyLogin();
```

[Bcrypt Resources](https://github.com/kelektiv/node.bcrypt.js)