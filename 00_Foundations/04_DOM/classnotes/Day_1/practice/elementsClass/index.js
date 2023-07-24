
// Example 1
let elements = document.getElementsByClassName('myClass');
console.log(elements.length);
console.log(elements[0]);
console.log(elements[1]);
elements[0].style.border = '.25rem solid red';

// Example 2

const myclass2 = document.getElementsByClassName('myClass2');
myclass2[0].textContent = 'Modified text!';
myclass2[0].style.backgroundColor = 'green';
myclass2[0].classList.add('newClass');

// Example 3
const elements2 = document.getElementsByClassName('myClass3');
elements2[0].classList.remove('newClass3');

// Example 4
const buttons = document.getElementsByClassName('toggle-button');

function toggleClass() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('active');
    }
}

toggleClass();