/* LOOPS

WHILE LOOP

a while loop required three elements:
1. the while keyword
2. a conditional expression that evaluates to a boolean value
3. a block of code

while (conditional) {
    // block of code
}

this block of code will run continuously until the condition evaluates to true

for example:
 */

let count = 3;

while (count >= 1) {
  console.log('count is:', count);
  count--;
}

while (false) {
  // this line of code will never run
}

// while (true) {
//   console.log('this line of code will run forever');
// }

/* for loop

a for loop required three elements:
1. the for keyword
3. three optional expressions
3. a block of code

    for (initialization; condition; final-expression) {
        // block of code
    }
the block of code will run over and over until the condition evaluates to false

the initialization is run first, and only once. it's often used to define a counter variable.
before every iteration, the condition is checked to see if it's true, if it is, the for loop will run another iteration
then, after each iteration, the final expression is run
*/

for (let i = 0; i <= 3; i++) {
  console.log('i is:', i);
}

// you can also loop backwards

for (let i = 5; i >= 0; i--) {
  console.log('i is: ', i);
}

// you can increment by any number

for (let i = 100; i <= 300; i += 100) {
  console.log('i is: ', i);
}

// you can use for loops to iterate through a string

let letters = 'abcdefg';

for (let i = 0; i < letters.length; i++) {
  let currentLetter = letters[i];
  console.log(currentLetter);
}

for (let i = letters.length - 1; i >= 0; i--) {
  let currentLetter = letters[i];
  console.log(currentLetter);
}

/* KEYWORDS
the continue keyword will cause the loop to skip to the next iteration
*/

for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log('i is: ', i);
}

let count2 = 10;

while (count2 >= 1) {
  if (count % 2 === 1) {
    continue;
  }

  console.log('count is: ', count2);
  count2--;
}

/* KEYWORDS
the break keyword breaks out of the loop permanently
*/

let count3 = 20;

while (count3 >= 1) {
  if (count3 === 10) {
    break;
  }

  console.log('count is: ', count3);
  count3--;
}

for (let i = 0; i < count3; i++) {
  if (i === 10) {
    break;
  }
}
