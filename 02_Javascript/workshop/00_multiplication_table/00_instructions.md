### Create a Multiplication Table

Create the function `multiplicationTable` that accepts two arguments

- `rows`
- `columns`

The `rows` X `columns` represents the dimension of a multiplication table.

The **return value is a multidimensional or one-dimensional array**.

<hr>
<br>

#### Examples:

```js
multiplicationTable(1, 4);
```

A 1 x 4 multiplication table has one row, and four columns:

```

1 2 3 4

```

There is one row and four columns. The values in the columns start at the value one and increment by one for each column.

<hr>
<br>

```js
multiplicationTable(3, 5);
```

```
 -- C O L U M N S --
#    1    2    3    4    5
R    2    4    6    8    10
O    3    6    9    12   15
W
S

```

In this example, notice there are three rows and five columns.

- first row: the column values start at one and increment by one
- second row: the column values start at `1 * 2` (the `2` represents the second row)
- third row: the column values start at `1 * 3` (the `3` represents the third row)

<hr>
<br>

### `return` values

The return value is a **multidimensional or one-dimensional array** , e.g.

```js
const zeroByZero = multiplicationTable(0, 0);
// zeroByZero === []

const oneByFour = multiplicationTable(1, 4);
// oneByFour === [[1,2,3,4]]

const threeByFive = multiplicationTable(3, 5);
// threeByFive === [[1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15]]

const twoByTwo = multiplicationTable(2, 2);
// twoByTwo === [[1,2], [2,4]]
```
