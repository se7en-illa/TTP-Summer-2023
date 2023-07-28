<details open>
  <summary><h3>Grading Rubric</h3></summary>
  <p><b>Description</b>: Below you'll find how this project will be graded, based on the tasks stated in the <a href="https://github.com/se7en-illa/TTP-Summer-2023/blob/main/02_Frontend/project-5/assignment.md"> Project 5 MD File</a>.<br></p>
  - <b>Make sure to connect your cloned repo to your main repo so TAs can grade your Projects (remove .git file from cloned repo)</b> <br> <br>
<p><b>Total points: </b>105</p>

- Backend (**65 total points**)
    - Part 1: All Pokemon (**25 Total Points**)
        - Seed (**5 points**)
            - Create function that syncs and seeds your database when your application starts (or when you run `node seed.js` in your terminal) 
            - **Hint**: Look at the Fullstack demo Orlando did this week
        - Pokemon (**10 points**)
            - Create Pokemon Model that follows all fields stated in prompt (**5 points**)
            - Create a route that gets all Pokemon (**5 points**)
        - Trainer (**10 points**)
            - Create Trainer Model that follows all fields stated in prompt (**5 points**)
            - Create a route that gets all Trainers (**5 points**)
    - Part 2: Individual Pokemon and Individual Trainer (**10 total points**):
        - Pokemon (**5 points**)
            - Create route to serve up a single pokemon (based on its id), including that pokemon's trainer
        - Trainer (**5 Points**)
            - Create route to serve up a single trainer (based on their id), including that trainer's pokemon
    - Part 3: Adding a Pokemon and Adding a Trainer (**10 total points**):
        - Pokemon (**5 points**)
            - Create route to add a new pokemon
        - Trainer (**5 points**)
            - Create route to add a new trainer
    - Part 4: Removing a Pokemon and Removing a Trainer (**10 total points**):
        - Pokemon (**5 points**) 
            - Create route to remove a pokemon (based on its id)
        - Trainer (**5 points**)
            - Create route to remove a trainer (based on their id)
    - Part 5: Updating a Pokemon and Updating a Trainer (**10 total points**):
        - Pokemon (**5 points**)
            - Create route to update an existing pokemon
        - Trainer (**5 points**)
            - Create route to update an existing trainer
    
- Frontend (**40 total points**)
    - Part 1: All Pokemon and All Trainers (**20 total points**):
        - Pokemon (**10 points**)
            - Create a component to display a list of all pokemon (at least their names and image)
        - Trainer (**10 Points**)
            - Create a component to display a list of all trainers (at least their name and image)
    - Part 2: Single Pokemon and Single Trainer (**20 total points**):
        - Pokemon (**10 points**)
            - Create a component to display a single pokemons name, type, trainer and date caught
        - Trainer (**10 points**)
            - Create a component to display a trainers full name, image, team, and pokemon

</details>

> Note: This is a fullstack project where you are connecting your backend to your frontend. Make sure all your code is organized in their appropriate files. Don't worry about writing any CSS code for this project. <br/>
> Note: Make sure you add Trainer (first) and Pokemon data to your tables after they are created, so if everything is connected, it would be displayed in your frontend.
