### Keypad-Text Entry

#### Description

Create the function `presses` that accepts a string and returns the amount of keypad "presses" it would take to type the phrase on an old cell phone keypad.

For example, to type the character "A", you press the 2 key 1x, to type "B" you press the 2 key 2x, to type "V" you press the 8 key 3x.

Here is the old cell phone keypad:

```
------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
```

To spell the word `'zebra'` here are the amount of times each key is pressed:

Z - Press 9, 4x
E - Press 3, 2x
B - Press 2, 2x
R - Press 7, 3x
A - Press 2, 1x

Ignore the following cases:

- Special Characters (except spaces)
- Uppercase and lowercase characters are treated the same

Examples:

- **INPUT**: `presses('Hello World');`
- **OUTPUT**: 25

- **INPUT**: `presses('THREE3');`
- **OUTPUT**: 14
