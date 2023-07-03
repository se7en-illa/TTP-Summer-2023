function multiplicationTable(rows, columns) {
  let table = [];

  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= columns; j++) {
      let input = i * j;
      row.push(input);
    }
    table.push(row);
  }
  return table;
}

console.log(multiplicationTable(5, 5));

function multiplicationTableEx(rows, columns) {
  // This line defines the function multiplicationTable that takes in two parameters: rows and columns.
  let table = []; // It initializes an empty array called table which will hold the multiplication table.

  for (let i = 1; i <= rows; i++) {
    // This line starts a for loop that iterates over the rows. It initializes a loop variable i to 1 and continues as long as i is less than or equal to the rows value.
    let row = []; // Inside the loop, it creates an empty array called row to represent a single row in the multiplication table.
    for (let j = 1; j <= columns; j++) {
      // This line starts another for loop that iterates over the columns. It initializes a loop variable j to 1 and continues as long as j is less than or equal to the columns value.
      let input = i * j; // Inside this nested loop, it calculates the product of i and j and assigns it to the variable input.
      row.push(input); // It then pushes input to the row array, representing a cell in the multiplication table.
    }
    table.push(row); // After the nested loop finishes, the row array, which represents a complete row in the multiplication table, is pushed to the table array.
  }
  return table; // Finally, outside the loop, the table array is returned as the result of the function.
}

/*
The function follows a nested loop structure to generate the multiplication table. 
The outer loop iterates over the rows, and the inner loop iterates over the columns. 
In each iteration, the product of the current row and column indices is calculated and added to the respective row. 
Once all the rows and columns are processed, the completed table array is returned.
*/
