/* eslint-disable no-unused-vars */

// Example 2
const element2 = document.querySelector("#myElement");
element2.style.backgroundColor = "pink";

// Example 3
const element3 = document.querySelector(".myClass");
element3.style.fontSize = '100px';

// Example 5
const link = document.querySelector('#myLink');
const href = link.getAttribute('href');
console.log(href);

// Example 6
function getValue() {
    const input = document.querySelector('#myInput');
    const value = input.value;
    console.log(value);

    const output = document.querySelector('#output');
    output.innerHTML = `Value: ${value}`;
}

// querySelectorAll()

function highlightItems() {
    const listItems = document.querySelectorAll('#myList li');
    console.log(listItems);
    listItems.forEach(function(item) {
        item.style.color = 'green';
    });
}