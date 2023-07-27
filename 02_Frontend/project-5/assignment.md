Certainly, here's the revised version of the assignment:

---

# Pokedex Project: Part 3

<details open>
<summary><h3>Part 1: Introduction</h3></summary>

### Context and Goals

In the previous part of the Pokedex project, we created an Express application integrated with a PostgreSQL database using Sequelize. We created models, defined associations, and set up routes to interact with our data.

In this part, we will take a step further and two React components to display all Pokemon and individual Pokemon. We will be using axios in our React components to fetch the data from the backend.

### Setup

1. Fork and clone [this boilerplate repository](https://github.com/se7en-illa/pokedex-boilerplate-v3)
2. CD into the project directory.
3. Install your dependencies by running `npm install`
4. Run your server with `npm start`

At first, you won't see anything on the page. We need to set up our routes and components first! In previous projects, we guided you through the project step by step. This time, we will test your knowledge. Below are the requirements for this project. You are allowed to reference previous projects and your notes from class. Good luck!

## BACK END:

<details>
<summary>Part 1: All Pokemon:</summary>

### _seed_

- [ ] In the `seed.js` file, write a function which syncs and seeds your database when your application starts.

### _pokemon_

- [ ] Write a route to serve up all pokemon
      **Write a `pokemon` model with the following information:**
- [ ] name - not empty or null
- [ ] type - not empty or null
- [ ] trainer - not empty or null
- [ ] date - not empty or null
- [ ] imageUrl - with a default value

### _trainers_

- [ ] Write a route to serve up all trainers
      **Write a `trainers` model with the following information:**
- [ ] firstName - not empty or null
- [ ] lastName - not empty or null
- [ ] team - not empty or null
- [ ] imageUrl - with a default value
- [ ] Pokemon may be associated with at most one trainer
- [ ] Likewise, trainers may be associated with many pokemon
</details>

<details>
<summary>Part 2: Individual Pokemon and Individual Trainer:</summary>

_pokemon_

- [ ] Write a route to serve up a single pokemon (based on its id), including that pokemon's trainer

_trainer_

- [ ] Write a route to serve up a single trainer (based on their id), including that trainer's pokemon
</details>

<details>
<summary>Part 3: Adding a Pokemon and Adding a Trainer:</summary>

_pokemon_

- [ ] Write a route to add a new pokemon

_trainer_

- [ ] Write a route to add a new trainer
</details>

<details>
<summary>Part 4: Removing a Pokemon and Removing a Trainer:</summary>

_pokemon_

- [ ] Write a route to remove a pokemon (based on its id)

_trainer_

- [ ] Write a route to remove a trainer (based on their id)
</details>

<details>
<summary>Part 5: Updating a Pokemon and Updating a Trainer:</summary>

_pokemon_

- [ ] Write a route to update an existing pokemon

_trainer_

- [ ] Write a route to update an existing trainer
</details>

## FRONT END:

<details>
<summary>Part 1: All Pokemon and All Trainers:</summary>

_campus_

- [ ] Write a component to display a list of all pokemon (at least their names and image)

_trainer_

- [ ] Write a component to display a list of all trainers (at least their name and image)
</details>

<details>
<summary>Part 2: Single Pokemon and Single Trainer:</summary>

_pokemon_
**Write a component to display a single pokemon with the following information:**

- [ ] The pokemon's name, type, trainer and date caught

_trainer_
**Write a component to display a single trainer with the following information:**

- [ ] The trainer's full name, image, team, and pokemon
</details>
