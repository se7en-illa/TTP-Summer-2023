// Setting up first event listener:

const button = document.getElementById('click-me');

button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Now let's take it another step further:

const countButton = document.getElementById('count-me');
let clickCount = 0;

countButton.addEventListener('click', () => {
  clickCount++;
  console.log(`This button has been clicked ${clickCount} times!`);
});

// Hover over me!

const hover = document.getElementById('hover-me');

hover.addEventListener('mouseover', () => {
  console.log('Mouse over the element!');
});

// We can count these too!

const hoverCount = document.getElementById('hover-count');
let hoverCounter = 0;

hoverCount.addEventListener('mouseover', () => {
  hoverCounter++;
  console.log(`We moved the mouse over this element ${hoverCounter} times!`);
});

// Mouseout

hoverCount.addEventListener('mouseout', () => {
  console.log('Mouse moved away from the element!');
});

// Keydown and keyup events

// document.addEventListener('keydown', (event) => {
//   console.log(`I just pressed the ${event.key} key!`);
// });

// document.addEventListener('keyup', () => {
//   console.log('I released the key!');
// });

// Let's do something crazy

// let string = '';

// document.addEventListener('keydown', (event) => {
//   string += event.key;
//   console.log(string);
// });

// Submit

const form = document.getElementById('my-form');
let submitCount = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitCount++;
  console.log(`This form has ${submitCount} submissions`);
});

// Accessing properties from the DOM tree

let list = document.getElementById('list');

let parent = list.parentNode;
console.log('parent', parent); // should log our div tag

let children = list.childNodes;
console.log('children', children); // should log our list items

let firstChild = list.firstChild;
console.log('firstChild', firstChild); // should log txt

let lastChild = list.lastChild;
console.log('lastChild', lastChild); // should log txt

// Accessing siblings

let nextSibling = firstChild.nextSibling;
console.log('nextSibling', nextSibling);

let previousSibling = lastChild.previousSibling;
console.log('previousSibling', previousSibling);

// Set timeout

const textElement = document.getElementById('myText');
const textButton = document.getElementById('changeText');

textButton.addEventListener('click', () => {
  setTimeout(() => {
    textElement.textContent = 'Text changed!';
  }, 2000);
});

// Set interval

const divElement = document.getElementById('myDiv');
let colors = ['red', 'green', 'blue', 'purple', 'orange'];
let count = 0;

setInterval(() => {
  divElement.style.backgroundColor = colors[count % colors.length];
  count++;
}, 1000);
