### Alphabet Soup

Create a function named `soup` that returns a boolean. The soup function accepts two strings as arguments:

```js
const phrase = 'helloworld';
const bank = 'dlrowhlloeh';
soup(phrase, bank); // returns true
```

```js
const phrase = 'abcdefg';
const bank = 'abcd';

soup(phrase, bank); // returns false;
```

The first argument is a phrase, the second argument is a character bank. The soup function returns `true` if there are enough characters in the character bank to complete
the phrase and it returns `false` if there are not enough characters in the character bank to complete the phrase.
