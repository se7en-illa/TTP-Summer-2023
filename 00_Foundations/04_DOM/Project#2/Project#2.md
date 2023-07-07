# Project 2 - Guessing Game

## Overview

This project is a Guessing Game where a player attempts to guess a winning number. The player gets hints after making a guess, which indicate how close or far they are from the winning number. The player has 5 chances to guess the winning number correctly.

Here is an example of this project with CSS styling and extra credit completed:
[Guessing Game](https://se7en-illa.github.io/guess-the-number/)

> Note: This project involves the use of HTML/CSS/Javascript (DOM)

# Project 2 - Description
**Description**: For this project, you have the option to proceed with option 1 that doesn't require the use of Class, or you can challenge yourself for extra credit and choose option 2 (more challenging) to complete a similar game.
- **Option 1**
    - **Description**: Create a guessing game where the user has to guess a number from 1 - 100. The user starts with a highscore of 0 and a score of 10 (meaning they have 10 tries to guess the correct number). In every try to guess the number, their score descreases by one and depending on their guess, the user is told if their guess was too high or too low. If the user uses of their 10 tries, the webpage would be disabled (notice the other changes that happened), meaning they can't play again unless they reload the page or click the "play" button. The play button resets all the values to their default values. If the user guesses the correct number, then try to notice what changes (the buttons are disabled, the correct answer is show, color of the background, etc..). Try to replicate this website to the best of your ability.
    - **Example of working Project** - [click here](https://r0m3c.github.io/Project3.html)
    - **Requirements**
        - HTML Part
            - Create similar elements as the example website from above.
        - CSS Part
            - Styling is completely up to you. Try not complete the Javascript part first, and then move on to the styling part.
        - Javascript Part
            - Must create 3 global variables
                - randomNum - stores a randomized number from 1 - 100
                - score - set to 100 (use 5 to test out your application when finished)
                - highscore - set to 0
            - Must create a function named changeMsg that accepts one string parameter
                - Logic: use DOM to select a paragraph element in your HTML file that will update the `textContent` of a text
            - Must create a `submit` button DOM variable with an `addEventListener` that pays attention when that selected button element is `clicked`.
                - Logic:
                    - Create a variable named `inputUser` that stores the value of an `input` element that the user enters using DOM
                    - Multilpe if statements
                        - If the value of the `inputUser` is not valid, then call your `changeMsg` function to display a text to the user, telling them "Please enter a valid number"
                        - Else if the `inputUser` variable is equaled to the `randomNum` variable then:
                            - call your `changeMsg` function again to tell the user that they've selected the correct answer.
                            - change the `body` elements color to green
                            - display the `randomNum` variable somewhere in your page, to show the user the selected correct number.
                            - Disable the `submit` button that you've created (used to check if the user guessed the correct number) and disable the `input` element that the user used to enter the value of their guess.
                            - if the `score` variable that we defined earlier is greater than the `highscore` variable, then update the value of `highscore` to `score`
                                - and, update the HTML element to display this new value of `highscore` using `textContent`.
                        - else if the value of `inputUser` doesn't equal to `randomNum`, then:
                            - if the score == 0 then:
                                - use `changeMsg` to tell the user that they've lost
                                - disable both the `submit` button and the `input` element you used to get the user to input a value (using DOM)
                                - use the `body` element to change your background color to red
                            - else:
                                - if `inputUser` is greater than `randomNum`, then call your `changeMsg` function to show the user a message saying "too High"
                                - else:
                                    - call your `changeMsg` function to show the user a message saying "too low"
                                - subtract the `score` variable by 1
                                - display the new value of `score` to the user using DOM
            - Must create another `addEventListener` that contains logic regarding restarting your game from the beginning, with a new highscore and no elements being disabled.
- **Option 2 - Extra Credit**
    - **Description**: If you'd like to challenge yourself, please follow the link below to learn how you can challenge yourself to create the same Tasks as **Option 1**, but utlilizing Classes. 
        - [Guess Game - Extra Credit](https://github.com/se7en-illa/dom-project-2)
        > Note: This involves using Classes (not something we learned in class)