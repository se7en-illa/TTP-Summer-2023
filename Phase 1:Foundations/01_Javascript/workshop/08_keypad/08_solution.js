const presses = (str) => {
  str = str.toUpperCase().split('');

  let keypad = [
    ['1'],
    ['A', 'B', 'C', '2'],
    ['D', 'E', 'F', '3'],
    ['G', 'H', 'I', '4'],
    ['J', 'K', 'L', '5'],
    ['M', 'N', 'O', '6'],
    ['P', 'Q', 'R', 'S', '7'],
    ['T', 'U', 'V', '8'],
    ['W', 'X', 'Y', 'Z', '9'],
    [' ', '0'],
  ];

  return keypad.reduce((accum, keypad) => {
    str.filter((char) => {
      if (keypad.includes(char)) {
        accum += keypad.indexOf(char) + 1;
      }
    });
    return accum;
  }, 0);
};
