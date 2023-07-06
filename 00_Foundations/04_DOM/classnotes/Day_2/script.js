/*
// Setting up our first event listener:

const button = document.getElementById('click-me');

button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// let's take it a step further:

const countButton = document.getElementById('count-me');
let clickCount = 0;

countButton.addEventListener('click', () => {
  clickCount++;
  console.log(`This button has been clicked ${clickCount} times`);
});

// mouseover

const hover = document.getElementById('hover-me');

hover.addEventListener('mouseover', () => {
  console.log('The mouse moved over the element!');
});

// count mouse movements

const hoverCount = document.getElementById('hover-count');
let hoverCounter = 0;

// hoverCount.addEventListener('mouseover', () => {
//   hoverCounter++;
//   console.log(`We moved the mouse over this element ${hoverCounter} times`);
// });

// mouseout

// hoverCount.addEventListener('mouseout', () => {
//   console.log('The mouse moved out of the element');
// });

// keyup and keydown events

// document.addEventListener('keydown', (event) => {
//   console.log(`I just pressed the ${event.key} key!`);
// });

// document.addEventListener('keyup', () => {
//   console.log('I released the key!');
// });

// let's do something crazy

// let string = '';

// document.addEventListener('keydown', (event) => {
//   string += event.key;
//   console.log(string);
// });

// form submission

const form = document.getElementById('form');
let submitCount = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitCount++;
  console.log(`This form has ${submitCount} submissions`);
});

*/

// parent & child nodes

// const container = document.getElementById('container');

// let children = container.childNodes;
// console.log(children);

// let firstChild = container.firstChild;
// console.log(firstChild);

// let lastChild = container.lastChild;
// console.log(lastChild);

// accessing siblings

// let nextSibling = firstChild.nextSibling;
// console.log(nextSibling);

// let previousSibling = lastChild.previousSibling;
// console.log(previousSibling);

// setTimeout and setInterval

function hello() {
  console.log('Hello World');
}

// setTimeout(hello, 1000);

// setInterval(hello, 2000);

const textElement = document.getElementById('myText');
const textButton = document.getElementById('changeText');

textButton.addEventListener('click', () => {
  setTimeout(() => {
    textElement.textContent = 'Text changed!';
  }, 2000);
});

// set interval

const divElement = document.getElementById('myDiv');
let colors = ['red', 'purple', 'blue'];
let count = 0;

setInterval(() => {
  divElement.style.backgroundColor = colors[count % colors.length];
  count++;
}, 2000);
