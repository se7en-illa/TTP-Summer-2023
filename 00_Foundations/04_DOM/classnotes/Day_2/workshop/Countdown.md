## Assignment

##### You've come a long way! At this point, you've become familiar with the basic concepts of HTML, CSS and JavaScript. This is a great time to see how all three of this technologies interact together by making your first dynamic web page. Before we do, let's review what we learned at a high level:

#### HTML (Hypertext Markup Language)

##### Consists of various elements, which may have attributes Most elements contain text between a pair of tags; others require attributes to be meaningful

#### CSS (Cascading Style Sheets)

##### Consists of rules, which are combinations of selectors and declarations Selectors can give style to HTML elements based on id, tag name and class

#### Javascript

##### Has several data types, notably Strings, Numbers, Booleans and Objects Use variables to store data Can make decisions using if...else statements and logical operations Can organize code in functions Can organize data in objects Remember our analogy as well.

##### If a web page were a person: HTML would be the skeleton CSS would be the skin/clothes JS would be the brain/muscles We've learned the fundamentals of these different parts - let's put them all together and get this body moving!

### Task:

- Build your first dynamic web page-- a countdown timer. The timer will start at 5, and then count down every second until it gets to 0, at which point we'll get a message: "Liftoff!!".

#### Step 1: Setup

- [ ] In your repository, create a folder called "Countdown Clock"
- [ ] Add 3 files to the folder: **index.html**, **style.css**, and **script.js**.

#### Step 2: HTML Frame

- [ ] Wrap everything in a **body** tag.
- [ ] Add an element containing our starting value (the number 5) in big, bold letters.
- [ ] Give that element a descriptive id (ex. "timer").

#### Step 3: Add CSS!

- [ ] Change the font color to your favorite color.
- [ ] Change the font family to sans-serif.
- [ ] Change the background color to be your second-favorite color.

#### Step 4: Countdown in the Console

- [ ] Write a variable to hold the current number we're counting down (ex. timeRemaining). It should be the same as the starting number that appears in your HTML.
- [ ] Write a function that decreases the value of your timeRemaining variable by one, and then console.log the value of timeRemaining.
- [ ] Invoke setInterval. Pass your function as the first argument, and the number of milliseconds as the second argument. (1000MS = 1S)

#### Step 5: Countdown in the Browser

- [ ] Add a new variable to hold the HTML element containing our current time. You'll need to get that element via the document object (ex. by its ID).
- [ ] Inside of your countdown function, every time you decrement the time remaining, set the innertext of the element to be the new amount of time remaining.

#### Step 6: Adding Logic

- [ ] Add an if...else statement to your countdown function.
- [ ] If the counter is greater than 0, display the current count. Else if it's below 0, display a message saying time is up!
