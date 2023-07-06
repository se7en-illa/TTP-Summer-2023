## Event Handling

### Introduction to event-driven programming

- In event-driven programming, our code typically consists of event handlers or callback functions that are executed in response to specific interactions.
- These events can be triggered by various sources, such as user interactions (like button clicks, mouse movements, or keyboard input), system events (like timers or network activity), or external devices (like sensors or hardware peripherals).
- These events don't necessarily happen in a particular order, since they tend to be based on the way a user interacts with the web page.

### Adding event listeners using addEventListener()

Event listeners can be added to HTML elements in JavaScript using the `addEventListener()` method. This method takes two arguments: the event type to listen for, and the function to be called when the event occurs.

```javascript
element.addEventListener('click', function () {
  // code to execute when element is clicked
});
```

### Common events like click, hover, submit, etc.

Some common event types include `click`, `mouseover` (hover), `mouseout`, `keydown`, `keyup`, `load`, `unload`, and `submit`. Each of these events corresponds to some type of user interaction with the webpage.

#### Click Event:

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', function () {
  console.log('Button clicked!');
});
```

- This code adds a click event listener to a button element with the ID 'myButton'.
- When the button is clicked, the event handler function will be executed, and it will log 'Button clicked!' to the console.

#### Mouse Event:

```javascript
const element = document.getElementById('myElement');

element.addEventListener('mouseover', function () {
  console.log('Mouse over the element!');
});

element.addEventListener('mouseout', function () {
  console.log('Mouse out of the element!');
});
```

- These event listeners track when the mouse pointer enters (mouseover) or exits (mouseout) the specified element with the ID 'myElement'.
- The corresponding event handler functions will log messages to the console accordingly.

#### Keydown and Keyup events:

```javascript
document.addEventListener('keydown', function (event) {
  console.log('Key pressed:', event.key);
});

document.addEventListener('keyup', function (event) {
  console.log('Key released:', event.key);
});
```

- These event listeners are attached to the entire document and monitor key-related events.
- When a key is pressed (keydown), the first event handler function will be triggered and log the pressed key to the console.
- Similarly, when a key is released (keyup), the second event handler function will log the released key.

#### Submit event:

```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form submitted!');
});
```

- This code adds a submit event listener to a form element with the ID 'myForm'. When the form is submitted (e.g., by clicking a submit button or pressing Enter), the event handler function will be called.
- In this example, event.preventDefault() prevents the default form submission behavior, and 'Form submitted!' will be logged to the console instead.

- These are just a few examples of how common events like click, hover, submit, and key-related events can be used in event-driven programming.
- You can apply these event types to various HTML elements and define custom event handlers to create interactive and responsive web applications.

## Traversing the DOM

### Navigating up and down the DOM tree using parentNode, childNodes, firstChild, lastChild, etc.

The DOM tree can be navigated using properties like `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, and `previousSibling`.

```javascript
let parent = element.parentNode;
let children = element.childNodes;
let firstChild = element.firstChild;
let lastChild = element.lastChild;
```

### Understanding siblings and sibling traversal methods

Siblings in the DOM tree are nodes that share the same parent. Sibling nodes can be accessed using `nextSibling` and `previousSibling`.

```javascript
let nextSibling = element.nextSibling;
let previousSibling = element.previousSibling;
```

Here's an example of traversing up and down the DOM tree and accessing siblings:

```html
<div id="container">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
```

```javascript
const container = document.getElementById('container');
const title = container.firstChild;
const paragraph1 = title.nextSibling;
const paragraph2 = paragraph1.nextSibling;

console.log(title.parentNode); // Output: <div id="container">...</div>
console.log(title.nextSibling); // Output: <p>Paragraph 1</p>
console.log(paragraph1.previousSibling); // Output: <h1>Title</h1>
console.log(paragraph1.parentNode); // Output: <div id="container">...</div>
console.log(paragraph2.previousSibling); // Output: <p>Paragraph 1</p>
console.log(paragraph2.nextSibling); // Output: null (no more siblings)
```

In this example, the `container` element is the parent, and it contains an `h1` element as the first child, followed by two `p` elements as siblings. By accessing the appropriate properties, we can navigate up to the parent node and down to the child and sibling nodes.

### Traversing using parentElement, children, firstElementChild, lastElementChild, etc.

In addition to the properties mentioned earlier, modern DOM also provides some alternative properties like `parentElement`, `children`, `firstElementChild`, `lastElementChild`, `nextElementSibling`, and `previousElementSibling`. These properties exclude non-element nodes (such as text nodes) and only consider element nodes.

```javascript
let parentElement = element.parentElement;
let children = element.children;
let firstElementChild = element.firstElementChild;
let lastElementChild = element.lastElementChild;
```

Here's an example of using these properties:

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
const myList = document.getElementById('myList');
const listItem = myList.firstElementChild;
const nextItem = listItem.nextElementSibling;

console.log(myList.parentElement); // Output: null (no parent, since it's the root element)
console.log(listItem.parentElement); // Output: <ul id="myList">...</ul>
console.log(listItem.nextElementSibling); // Output: <li>Item 2</li>
console.log(nextItem.previousElementSibling); // Output: <li>Item 1</li>
console.log(myList.children); // Output: HTMLCollection [li, li, li]
console.log(myList.lastElementChild); // Output: <li>Item 3</li>
```

In this example, the `myList` element is the root element, and it contains three `li` elements as children. By using the modern DOM properties, we can traverse the DOM tree more conveniently and access only the element nodes.

These are some techniques for navigating up and down the DOM tree and accessing siblings. By using these methods and properties, you can dynamically manipulate and interact with specific elements within the DOM structure.

---

### Using setTimeout() and setInterval() for animations

The `setTimeout()` function can be used to delay the execution of code, and `setInterval()` can be used to repeatedly execute code at specified intervals. These functions are useful for creating animations.

```javascript
setTimeout(function () {
  // code to execute after delay
}, delayInMilliseconds);

setInterval(function () {
  // code to execute repeatedly
}, intervalInMilliseconds);
```

When the "Change Text" button is clicked, the changeText() function is invoked. It uses setTimeout() to delay the execution of the anonymous callback function by 2000 milliseconds (2 seconds). Inside the callback function, the text content of the <p> element is modified to "Text changed!". After the delay, the text will be updated.

In this example, the changeColor() function is defined to change the background color of the <div> element. An array of colors is defined, and the count variable keeps track of the current index in the array. The setInterval() function is used to repeatedly call changeColor() every 1000 milliseconds (1 second). It cycles through the colors array, updating the background color of the div.

These examples demonstrate how setTimeout() and setInterval() can be used in the context of DOM manipulation to introduce delayed actions and repetitive tasks. You can adapt these techniques to create various interactive effects or animations in your web pages.

---
