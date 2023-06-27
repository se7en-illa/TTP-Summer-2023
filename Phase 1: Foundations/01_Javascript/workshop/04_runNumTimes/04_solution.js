function runNumTimes(func, num) {
  let count = 0;

  while (count < num) {
    count++;
    func();
  }
}

/*
This line defines the function runNumTimes that takes in two arguments: func and num.
It initializes a variable count to keep track of the number of times the func argument will be executed.

This line starts a while loop that continues as long as count is less than num.
Inside the loop, it increments count by one using the count++ shorthand notation.
Then, it calls the func argument, which represents a function that will be executed num times.
The loop continues until count becomes equal to or greater than num, at which point it stops.
The purpose of the runNumTimes function is to execute the provided function num times. It achieves this by using a while loop and a count variable. In each iteration of the loop, it increments count by one and calls the func argument, which allows the function to be executed the desired number of times.
*/
