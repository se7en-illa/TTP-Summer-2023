<img src="https://i.imgur.com/Bzkqs5I.png" alt="drawing" width="100"/>

# DOM Manipulation (HTML/CSS)

## Meeting Process
- Pre-requisites
    - Knowledge of HTML & CSS & Javascript
- [DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
    - Detailed documentation of all of DOM abilities and all available methods.
- Topics we'll be going over
    - What is DOM:
        - DOM stands for Document Object Model. It is a programming interface for HTML and XML documents. The DOM represents the structure of a web page as a tree-like model, where each element in the HTML document is a node in the tree. This tree-like structure allows developers to access, modify, and manipulate the content and structure of the web page dynamically.
    - What is DOM Manipulation:
        - refers to the process of modifying the content, structure, or style of elements in a web page using JavaScript or other programming languages. It involves interacting with the DOM API (Application Programming Interface) to access specific elements, retrieve or modify their properties and attributes, and perform various actions like adding or removing elements, changing text or HTML content, applying styles, and handling events.
        - DOM manipulation is a powerful technique that allows developers to create dynamic and interactive web pages. It enables the modification of the web page's appearance and behavior based on user interactions, data changes, or any other programmatic conditions. With DOM manipulation, developers can create responsive and interactive web applications, update the content of elements dynamically, handle user input, and perform various transformations on the web page's structure and style.
    - > Note: Create index.html file
    - > Note: Create an index.js file and connect it to your HTML page
        - Enter this code in your `script` elemnt in your Body element
            ```
            <!-- Connect Html file to your JS file -->
            <script src="index.js"></script>
            ```
    - > Note: Create a style.css file & connect it to your HTML file
        - Enter this code in your `link` element in your head element
            ```
            <link rel="stylesheet" href="style.css">
            ```
    - **getElementById()**:
        - Description: returns an Element object representing the element whose id property matches the specified string
            - index.html
            ```
            <!-- Example 1 -->
            <div id="myElement">
              This is a paragraph
            </div>

            <!-- Example 2 -->
            <p id="paragraph">2nd paragrah</p>

            <!-- Example 3 -->
            <p id="property">Hello, changing</p>

            <!-- Example 4 -->
            <ul id="myList">
              <li></li>
              <li></li>
              <li></li>
            </ul>
            ```
            - index.js
            ```
            // Example 1
            // textContent - change any text inside of the selected element
            const element = document.getElementById('myElement');
            element.textContent = 'New text';

            // Example 2
            // is used to get or set the HTML content of an element. It allows you to manipulate the HTML structure and content within an element.
            const paragraph = document.getElementById('paragraph');
            paragraph.innerHTML = '<strong>New content</strong>';
            // += --> used to add onto the text of the element selected
            paragraph.innerHTML += '<p>Appended HTML content</p>';

            // Example 3
            // using 'style' to access CSS properties in Javascript (must be in string)
            const properties = document.getElementById('property');
            properties.style.backgroundColor = 'blue';
            properties.style.fontSize = '20px';
            properties.style.border = '2px solid black';
            properties.style.padding = '10px';
            properties.style.textAlign = 'center';

            // Example 4
            // Example of using getElementById() scenario
            const fruits = ['Apple', 'Banana', 'Orange'];
            const listContainer = document.getElementById('myList');
            let listHTML = '';
            for (const fruit of fruits) {
              listHTML += `<li>${fruit}</li>`;
            }
            console.log(listHTML);
            listContainer.innerHTML = listHTML;
            ```
    - **getElementsByClassName()**:
        - Description: is a built-in JavaScript method that allows you to retrieve a collection of elements from the DOM (Document Object Model) based on their class name. It returns a live HTMLCollection (a collection of elements) that matches the specified class name.
            - index.html
            ```
            <!-- Example 1 -->
            <div class="myClass">Element 1</div>
            <div class="myClass">Element 2</div>
            <div class="otherClass">Element 3</div>

            <!-- Example 2 -->
            <p class="myClass2">Hello, World!</p>

            <!-- Example 3 -->
            <p class="myClass3 newClass3">Remove class dynamically</p>

            <!-- Example 4 -->
            <button class="toggle-button">Toggle Button 1</button>
            <button class="toggle-button">Toggle Button 2</button>
            ```
            - style.css
            ```
            /* Example 2 */
            .newClass {
              color: purple;
              font-size: 40px;
            }

            /* Example 3 */
            .newClass3 {
              background-color: aqua;
            }

            /* Example 4 */
            .active {
              background-color: green;
              color: white;
            }
            ```
            - index.js
            ```
            // Example 1
            // getElementsByClassName - Allows us to get all values of elements who have a specific class Name. The return value of using this is similar to as an array. This is why we're able to access those elements using [0] & [1] in the example below
            let elements = document.getElementsByClassName('myClass');
            console.log(elements.length); // Output: 2
            console.log(elements[0]); // Output: <div class="myClass">Element 1</div>
            console.log(elements[1]); // Output: <div class="myClass">Element 2</div>
            elements[0].style.border = '2px solid red';

            // Example 2
            const myclass2 = document.getElementsByClassName('myClass2');
            myclass2[0].textContent = 'Modified text';
            myclass2[0].style.backgroundColor = 'green';
            myclass2[0].classList.add('newClass'); // adds a new class to the selected element. Now this element is utilizing the newClass class properties that we defined in our CSS file

            // Example 3
            const elements2 = document.getElementsByClassName('myClass3');
            elements2[0].classList.remove('newClass3'); // same as adding, we can remove an existing class 'newClass' form the element

            // Example 4
            const buttons = document.getElementsByClassName('toggle-button');

            function toggleClass() {
                for (let i = 0; i < buttons.length; i++) {
                  buttons[i].classList.toggle('active'); // toggle() - is making the `active` class we set in our CSS file to turn on.
                }
            }
            toggleClass();
            ```
    - **querySelector()**:
        - Description: is a method in JavaScript that allows you to select the first element that matches a specific CSS selector. It returns the first element found or null if no matching element is found.
            - index.html
            ```
            <!-- Example 1 -->
            <div >Original Text</div>
            <div>hi!</div>

            <!-- Example 2 -->
            <div id="myElement">Wow, this is cool!</div>

            <!-- Example 3 -->
            <p class="myClass">Example Text</p>
            <p class="myClass">Example text 2</p>

            <!-- Example 4 -->
            <img id="myImage" />

            <!-- Example 5 -->
            <a id="myLink" href="https://www.example.com">Link</a>

            <!-- Example 6 -->
            <input type="text" id="myInput" />
            <button onclick="getValue()">Get Value</button>
            <!-- onclick attribute - calls the getValue() function form our JS File -->
            ```
            - style.css
            ```
            /* Example 3 */
            .myClass {
              color: red;
            }
            ```
            - index.js
            ```
            // Example 1
            const element = document.querySelector('div'); // will select the first div element in your HTML file
            element.textContent = 'New Text';

            // Example 2
            const element2 = document.querySelector("#myElement"); // to select an id you must include the # before the name
            element2.style.backgroundColor = "pink";

            // Example 3
            const element3 = document.querySelector('.myClass'); // will select the first class with the name of myClass. Must include the `.` before your class name
            element3.style.fontSize = '100px';

            // Example 4
            const image = document.querySelector('#myImage');
            image.setAttribute('src', 'path/to/image.jpg');
            // setAttribute - used to give any attribute that goes in html opening tags directly in JS
            // same thing as having this in html: <img id="myImage" src="path/to/image.jpg" />


            // Example 5
            const link = document.querySelector('#myLink');
            const href = link.getAttribute('href');
            // getAttribute - gets the value inside of the chosen attribute (in this case the value inside of hreg - https://www.example.com)
            console.log(href);

            // Example 6
            function getValue() {
                const input = document.querySelector('#myInput');
                const value = input.value;
                console.log(value);
            }
            ```
    - **querySelectorAll()**:
        - Description: is a method in JavaScript that allows you to select all elements that match a specific CSS selector. It returns a NodeList containing all the matched elements.
            - index.html
            ```
             <!-- Example 1 -->
            <ul id="myList">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <!-- Example 2 -->
            <div class="container">
                <button onclick="printText()">Button 1</button>
                <button onclick="printText()">Button 2</button>
                <button onclick="printText()">Button 3</button>
                <button onclick="disableButtons()">Disable buttons</button>
            </div>

            <!-- Example 3 - Using querySelector() -->
            <hr>
            <input class="numInput" type="text">
            <p class="par"></p>
            <button onclick="check()">Check</button>
            ```
            - index.js
            ```
            // Example 1
            function highlightItems() {
                // Select every single li element in #myList id. 
                const listItems = document.querySelectorAll('#myList li');
                console.log(listItems);
                listItems.forEach(function(item) {
                    item.style.backgroundColor = 'yellow';
                });
            }
            highlightItems();

            // Example 2
            function printText() {
                console.log("clicking button");
            }

            function disableButtons() {
                // select every button element in class .container
                const buttons = document.querySelectorAll('.container button');
                console.log(buttons);
                buttons.forEach(button => {
                  button.disabled = true;
                });
            }

            // Example 3
            let randomNum = Math.trunc (Math.random() * 6) + 1;
            console.log(randomNum);

            function changeMsg(text) {
                document.querySelector(".par").textContent = text;
            }

            function check() {
                let inputUser = Number(document.querySelector(".numInput").value);

                if (!inputUser) {
                    changeMsg("Please enter a valid number");
                }

                if (inputUser === randomNum) {
                    changeMsg("You win");
                    document.querySelector("body").style.background = "green";
                } else {
                    changeMsg("Try again!");
                }
            }
            ```
    - **createElement() & appendChild() & removeChild()**:
        - Description:
            - **createElement()**:
                - this method creates a new element with the specified HTML tag name. It returns the newly created element, which can be modified and manipulated before being inserted into the DOM.
            - **appendChild()**:
                - this method is used to append a child element as the last child of a parent element. It adds the specified childElement as a child of the target element.
            - **removeChild()**:
                - this method is used to remove a child element from its parent. It removes the specified childElement from the parent element, effectively detaching it from the DOM.
            - index.js
            ```
            // Example 1
            let newElement = document.createElement("p"); // creates an empty paragraph element
            console.log(newElement); // <p></p>
            newElement.textContent = "I just created this"

            document.body.appendChild(newElement); // adds this newElement we created to our body tag using appendChild().
            // check your 'inspect' in your browser. you should now see an empty paragph element in your body element

            // Example 2
            const div = document.createElement('div'); // creating empty div element
            div.classList.add('box'); // adding a CSS class that we defined in our CSS file named "box" to this div element
            document.getElementById('container').appendChild(div); // first we get the 'container' id element using getElementById(). Then, we add our "div" variable that stores a 'div' element to our 'container' id 'div'
            // Inspect your browser page. The 'container' div should now have a 'div' element child with a 'box' class

            // Example 3
            const container = document.getElementById('container2');
            const paragraph = container.querySelector('p');
            container.removeChild(paragraph); // removes the 'paragraph' variable that stores the 'p' element, which we got from our 'container2' id, and removes that element from the `container` parent
            // we can no longer see the "Text to be removed" text or that paragraph element in our html code (using inspect)

            // Example 4
            function createAndAppendImage() {
                const container = document.getElementById("container3");
                const image = document.createElement("img");
                image.src = "image.jpg";
                container.appendChild(image);
            }

            // Example 5
            function removeMultipleChildElements() {
                const container = document.getElementById("container4");
                const paragraphs = container.querySelectorAll("p");
                paragraphs.forEach(paragraph => {
                    // remove multiple child elments
                    container.removeChild(paragraph);
                });
            }
            removeMultipleChildElements();
            ```
            - index.html
            ```
            <!-- Example 2 -->
            <div id="container"></div>

            <!-- Example 3 -->
            <div id="container2">
                <p>Text to be removed</p>
            </div>

            <!-- Example 4 -->
            <div id="container3"></div>
            <button onclick="createAndAppendImage()">click to add image</button>

            <!-- Example 5 -->
            <div id="container4">
                <p>This is paragraph 1.</p>
                <p>This is paragraph 2.</p>
                <p>This is paragraph 3.</p>
            </div>
            ```
            - style.css
            ```
            /* Example 2 */
            .box {
                width: 100px;
                height: 100px;
                background-color: red;
            }
            ```
    - **cloneNode()**:
        - Description: is used to create a copy or clone of a DOM element. It creates a duplicate of the selected element, including all its child elements, attributes, and text content. The cloned node is an exact replica of the original node.
            - index.html
            ```
            <!-- Example 1 -->
            <div id="container">
                <p>This is an original paragraph.</p>
            </div>

            <!-- Example 2 -->
            <div id="container2">
                <ul>
                  <li>Item 1</li>
                </ul>
            </div>

            <!-- Example 3 -->
            <div id="container3">
                <p>This is an original paragraph.</p>
            </div>
            ```
            - index.js
            ```
            // Example 1
            function cloneAndAppendElement() {
                const container = document.getElementById("container");
                const originalParagraph = container.querySelector("p");

                // cloneNode(true/false) - must call the cloneNode() function on an element you want to copy and pass in true (to clone) that specific element. In this case, we are cloning the 'paragraph' element inside of the 'container' div element.
                const clonedParagraph = originalParagraph.cloneNode(true);
                container.appendChild(clonedParagraph);
            }
            cloneAndAppendElement(); // you should now see two copies of the same paragraph element

            // Example 2
            function cloneAndModifyElement() {
                const container = document.getElementById("container2");
                const originalList = container.querySelector("ul");
                console.log(originalList);
                const clonedList = originalList.cloneNode(true); // clones to entire 'ul' element in 'container2' (which inclues the li element inside of it)
                const listItem = clonedList.querySelector("li");  // selecting the 'li' element in the cloned 'ul' element.
                listItem.textContent = "Modified item"; // change text of the 'li' element selected
                container.appendChild(clonedList); // add element to the 'container2' div
            }
            cloneAndModifyElement();

            // Example 3
            function cloneAndReplaceElement() {
                const container = document.getElementById("container3");
                const originalParagraph = container.querySelector("p");
                const clonedParagraph = originalParagraph.cloneNode(true);
                clonedParagraph.textContent += "/ cloned and replaced"

                // replaceChild() - accepts two parameters. The first parameter is what you want to input. The second parameter is what you want to replace that is currently in your HTML code (using the first parameter)
                container.replaceChild(clonedParagraph, originalParagraph);
            }
            cloneAndReplaceElement();
            ```