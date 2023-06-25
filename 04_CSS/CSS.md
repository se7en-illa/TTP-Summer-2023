<img src="https://i.imgur.com/Bzkqs5I.png" alt="drawing" width="100"/>

# CSS (Cascading Style Sheets)

## Meeting Process
- Pre-requisites
    1) Install Visual Studio Code
    2) Install the `Live Server` VSCode Extension
- [CSS Slides (TBD)]()
- Topics we'll be going over
    - > Note: Create index.html file
    - **Internal CSS Styling**:
        - `<style>` element: It contains CSS, which is applied to the contents of the document
            - index.html 
            ```
            <!-- Inside of the Head element -->
            <style>
                p {
                    color: red;
                }
            </style>
            <!--  -->
            
            <!-- Inside of body element -->
            <p>Hello TTP!</p>
            <!--  -->
            ```
    -  **Local CSS Styling**:
        -  Description: adding CSS to `style=""` attribute of an HTML element
            -  index.html
            ```
            <!-- Inside of body element -->
            <p style="color: red">Hello TTP!</p>
            <!--  -->
            ```
    - **External CSS Styling (most recommended)**:
        - Description: creating a CSS file (to input all CSS styling for your HTML elements) and connecting the two files together.
            - > Note: create a folder named `style` and inside of this folder, create a file named `style.css`
            - index.html
            ```
            <!-- inside of head element - connect this html file to our style.css file in our style folder -->
            <link rel="stylesheet" href="style/style.css">
            <!--  -->
            
            <!-- Inside of body element -->
            <p>Hello TTP!</p>
            <!--  -->
            ```
            - style.css
            ```
            
            /* p - selector */
            /* color: - CSS property */
            /* red; - CSS property value */
            p {
                color: red;
            }
            ```
    > Note: from now on, we're going to be using our `style.css` file for styling our `index.html` file
    - **Selectors: Element**:
        - Description: selects all elements with the specified element name (and gives them the specified spelling)
            - index.html
            ```
            <h1>CSS Selectors</h1>

            <h3>Article 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus nostrum eos est enim voluptatem repellat, provident quasi consequatur asperiores libero nam repudiandae iste voluptatibus ab ipsa. Quam, accusamus temporibus!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus nostrum eos est enim voluptatem repellat, provident quasi consequatur asperiores libero nam repudiandae iste voluptatibus ab ipsa. Quam, accusamus temporibus!</p>
            ```
            - style.css
            ```
            body {
                font-size: 34px;
            }

            p {
                color: blue
            }
            ```
        - More practice
            - index.html
            ```
            <h1>CSS Selectors</h1>

            <h3>Article 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus nostrum eos est enim voluptatem repellat, provident quasi consequatur asperiores libero nam repudiandae iste voluptatibus ab ipsa. Quam, accusamus temporibus!</p>

            <h2>Article 2</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus nostrum eos est enim voluptatem repellat, provident quasi consequatur asperiores libero nam repudiandae iste voluptatibus ab ipsa. Quam, accusamus temporibus!</p>
            ```
            - style.css
            ```
            body {
                font-size: 34px;
            }

            p {
                color: blue
            }

            h1, h2, h3 {
                color: green;
            }
            ```
    - Selectors: Classes
        - Description: selects elements with a specific class attribute (can be used in multiple elements)
            - index.html
            ```
            <h1>Movies</h1>

            <p class="movies">My Favorite movies are Spider Man, Batman, Hulk ...</p>

            <h2 class="shows-title">Shows</h2>

            <p>My Favorite shows are Grey's Anatomy, Flash, ...</p>
            ```
            - style.css
            ```
            h1 {
                font-style: italic;
                font-size: 40px;
            }

            .movies {
                color: aqua;
            }

            .shows-title {
                color: pink;
            }
            ```
    - Selectors: ID
        - Description: uses the id attribute of an HTML element to select a specific element (are unique to one specific element)
            - index.html
            ```
            <h1 id="recipe-title">Recipes</h1>

            <h2 id="desserts">Favorite Desserts</h2>
            <p>Chocolate Ice cream</p>
            <p>Vanilla Ice Cream</p>
            ```
            - style.css
            ```
            #recipe-title {
                text-transform: uppercase;
            }

            #desserts {
                text-align: center;
            }
            ```
    - Selectors: Universal
        - Description: selects elements of any type
            - index.html
            ```
            <main>
                <h2 class="languages">Programming Languages</h2>

                <ol>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                </ol>
            </main>
            ```
            - style.css
            ```
            * {
                text-align: center;
                font-family: monospace;
            }

            li {
                color:bisque;
            }

            .languages {
                text-transform: uppercase;
            }
            ```
    - Colors
        - Description: Discuss various colors properties in CSS
            - index.html
            ```
            <main>
                <h2 >Article 1</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo debitis minus? Consectetur hic, nesciunt atque inventore nobis rem amet eos possimus?</p>
            </main>

            <main>
                <h2 >Article 2</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo debitis minus? Consectetur hic, nesciunt atque inventore nobis rem amet eos possimus?</p>
            </main>
            ```
            - style.css
            ```
            body {
                font-size: 24px;
                font-family: monospace;
                line-height: 1.5;
                background-color: papayawhip;
                /* rgb - red green blue */
                color: rgb(0,0,0);
            }

            p {
                /* rgba - red green blue alpha --> alpha = transperancy (1 highest, 0 lowest)*/
                color: rgba(0,0,0,.5);
                text-align: center;
            }

            h2 {
                /* Hex values are actually just a different way to represent RGB values. Instead of using three numbers between 0 and 255, you use six hexadecimal numbers. Hex numbers can be 0-9 and A-F. */
                color: #35358c;
            }
            ```
    - Units & Sizes:
        - Description: `px = pixels` ---> are an absolute unit, so when you set the font size to 24 pixels, it's going to be 24 pixels (won't change if a user changes the font size in their browser). `rem` ---> are relative units that are based on the document's font-size. Most browsers default font size is 16px. Thus, if the default size is 16px, then 1rem = 16px (2rem = 32px). This means, that depending on whether a user changes the default font size of their browser, `rem` will adopt to those changes, but `pixels` will not. Thus, when dealing with font-sizes, `rem` is the recommended way of unit sizes.
            - index.html
            ```
            <h1>Pixels Font size</h1>
            <h1>REM Font size</h1>
            ```
            - style.css
            ```
            /* Go to (on Chrome browser) --- Settings --> Appearance --> Font Size */
            h1 {
                font-size: 32px;
            }

            /* h1 {
                font-size: 2rem;
            } */
            ```
    - Box Model:
        - Description: a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content
                - **Content**: It is the actual content of an element, such as text, images, or other HTML elements.
                - **Padding**: It is the space between the content and the element's border.
                - **Border**: It is a line that surrounds the padding and content of an element. The border can be customized using properties like border-width, border-color, and border-style.
                - **Margin**: It is the space between the element's border and other elements on the page. 
            - index.html
            ```
            <header class="container">Box Model</header>

            <main class="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa hic mollitia suscipit natus molestiae beatae, cum inventore sequi. Excepturi eligendi, numquam quod recusandae at fugit maiores nulla voluptate veritatis?</main>
            ```
            - style.css
            ```
            /* Universal selector that selects all elements on the page*/
            * {
                /* These properties below make you start with a clean slate and have more control over the styles applied to your elements.  */

                /* sets the margin of all elements to 0, removing any default margin applied by the browser. */
                margin: 0;

                /* It sets the padding of all elements to 0, removing any default padding applied by the browser. */
                padding: 0;

                /* This property changes the box model behavior to border-box, which means that the width and height of an element include the content, padding, and border, but exclude the margin. This ensures consistent sizing and spacing of elements across different browsers. */
                box-sizing: border-box;
            }
            /*  */

            .container {
                border: 2px dotted red;
                border-right: 2px dotted blue;
                border-bottom: 2px dotted green;

                /* default browser font size = 16px ---> 1.5rem = 24px (1.5 * 16)*/
                font-size: 1.5rem;

                /* em - unit measurement ---> will scale proportionally based on the font size of the .container element itself, allowing for a responsive and adaptable layout. */

                /* we know font-size = 1.5rem (24px) */
                /* 1.5em = 36px ----> 1.5 * 24px (font-size - 1.5rem) */
                /* Thus, em will scale based on the font-size we have declared in the class "container" here */
                margin: 1.5em;

                /* You can also use margin to specify the margin of all four sides */
                /* margin: 1.5em 1em 1.5em 1em;  */
                /* top: 1.5em, right: 1em, bottom: 1.5em, left: 1em */

                /* or, you can specify the margin sides individually */
                /* margin-top: 1.5em;
                margin-bottom: 1.5em;
                margin-left: 1em;
                margin-right: 1em; */

                padding: 1.5em;
                /* You can do this with padding as well to specify all 4 sides */
                /* You can also separate all sides separately like with margin */

                /* Outline: used to create a visible outline around an element, typically used to highlight or focus on an element. It does not take up any space in the box model. If you go to the box model, you don't see it.*/
                outline: 5px solid purple;

                outline-offset: 5px; /* Used to offset outwards or use -5px to offset inwards the border */
            }
            ```
    - Typography:
        - Description: Review some common text properties.
                - Review more `font-family` [fonts here](https://fonts.google.com/)
            - index.html
            ```
            header >CSS Typography</header>

            <main >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa hic mollitia suscipit natus molestiae beatae, cum inventore sequi. Excepturi eligendi, numquam quod recusandae at fugit maiores nulla voluptate veritatis?</main>
            ```
            - style.css
            ```
            body {
                font-size: 2rem;
                font-family: monospace;
            }

            main {
                text-decoration: underline;
                text-transform: uppercase;
                text-align: left;
                text-indent: 2em;
                line-height: 1.5;
                letter-spacing: .1em;
                word-spacing: .5em;
                font-weight: 600;
                font-style: italic;
            }
            ```
    - Links: 
        - Description: Review some `a` element properties
            - index.html
            ```
            <header >CSS Links</header>

            <p>Hello, checkout this cool <a href="https://www.riotgames.com/en">website</a></p>

            <p>New link <a href="https://www.google.com">here</a></p>
            ```
            - style.css
            ```
            body {
                font-size: 2rem;
                font-family: monospace;
            }

            a {
                text-decoration: none;
                cursor: pointer;
                color: rgb(99, 99, 215);
            }

            /* pseudo classes */
            a:visited {
                color: purple;
            }

            a:hover {
                color:darkolivegreen;
            }

            a:active {
                color: aquamarine;
            }
            ```
        
    - Lists:
        - Description: Review `ul, ol, li` properties
            - index.html
            ```
            <header >CSS Lists</header>

            <main>
                <article>
                    <h2>Ordered List</h2>
                    <ol start="5" reversed>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ol>
                </article>

                <article>
                    <h2>Unordered List</h2>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>
                </article>
            </main>
            ```
            - style.css
            ```
            body {
                padding: 5% 10%;
                font-size: 2rem;
                font-family: monospace;
            }

            ol {
                list-style-type: upper-roman;
                /* list-style-type: lower-greek; */
            }

            /* no style for ol */
            /* ol {
                list-style-type: none;
                padding: 0;
            } */


            ul {
                list-style-type: square;
                text-align: center;
                list-style-position: inside;
                color: red;
                line-height: 1.5;
                /* image for bullet points */
                list-style-image: url("");
            }

            /* select all li elements in ul */
            ul li {
                color: green;
            }

            /* select a specific li of the ul element using pseudo class */
            ul li:nth-child(2) {
                color: red;
            }

            /* pseudo class to only select bullet points */
            ul ::marker {
                color: purple;
                font-family: fantasy;
                font-size: 1em;
                content: "$4 ";
            }
            ```
    - Display:
        - Description: Review display property
            - index.html
            ```
            <nav>
                <ul>
                    <li><a href="#">Intro</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </nav>
            ```
            - style.css
            ```
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-size: 2rem;
                font-family: monospace;
            }

            ul {
                list-style-type: none;
                padding: 0.5rem;
                text-align: right;
                background-color: black;
                margin: 0;

            }

            li {
                display: inline-block;
                margin-inline: .5rem;
            }

            li a {
                color: white;
                text-decoration: none;
            }

            li a:hover {
                text-decoration: underline;
            }
            ```
    - Floats
        - Description: Review `float` property
            - index.html
            ```
            <section>
                <div class="block left">float</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis ullam fugit explicabo provident possimus deserunt. Quo, tempora eaque? Deserunt.</p>
            </section>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quos delectus sunt quaerat doloremque corporis praesentium eius eum in? Nulla tenetur vel quidem odit sit in voluptatum omnis? Nesciunt, cumque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, iste.</p>

            <div class="block right">float</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi reiciendis earum laudantium placeat. Tempora, quos? Soluta optio dignissimos tempora nulla fugiat quae quis, expedita nam dicta. Numquam quod perspiciatis atque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic alias dolorum incidunt ullam eum ipsa! Explicabo doloremque iusto consequatur obcaecati blanditiis, inventore, earum quas eaque veniam, ducimus atque voluptatem rerum fuga sunt non. Dolor consectetur quibusdam iusto id doloremque?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, iste.</p>
            ```
            - style.css
            ```
            body {
                font-size: 1.5rem;
                font-family: fantasy;
            }

            .block {
                width: 120px;
                height: 120px;
                background-color: black;
                color: white;
                padding: 1rem;
            }

            .left {
                float: left;
                margin-right: 1rem;
            }

            .right {
                float: right;
                margin-left: 1rem;
            }

            section {
                background-color: bisque;
                border: 2px solid red;
                padding: 1rem;
                
                 /* flow-root is used to clear floats and contain any child elements that are floated or have positioned elements inside the section. It helps prevent collapsing of margins and keeps the content within the section contained. */
                display: flow-root;
            }
            ```
    - Columns
        - Description: Review `column` properties
                - More unicode symbols [here](https://symbl.cc/en/search/?q=quotation)
            - index.html
            ```
            <section class="columns">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odio totam doloremque dicta iste voluptatum mollitia aut? Soluta, dolor suscipit.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odio totam doloremque dicta iste voluptatum mollitia aut? Soluta, dolor suscipit.</p>

                <p class="quote">&#8220; wheres my rug, man?&#8221; <span class="nowrap">- the dude</span></p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odio totam doloremque dicta iste voluptatum mollitia aut? Soluta, dolor suscipit.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odio totam doloremque dicta iste voluptatum mollitia aut? Soluta, dolor suscipit.</p>
            </section>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odio totam doloremque dicta iste voluptatum mollitia aut? Soluta, dolor suscipit.</p>
            ```
            - style.css
            ```
            body {
                font-size: 1.5rem;
                font-family: fantasy;
            }

            .columns {
                column-count: 4;
                column-width: 250px;
                column-rule: 2px solid black;
                column-gap: 3rem;
            }

            /* make all columns top start at the same spot */
            .columns p {
                margin-top: 0;
            }

            .columns .quote {
                margin-top: 2rem;
                font-size: 3rem;
                text-align: center;
                color: black;

                /* column-span: it allows the element's content to span across all columns instead of being confined to a single column. */
                column-span: all;
            }

            .nowrap {
                /* white-space: nowrap - will ensure that the text within the span element stays on a single line, regardless of the container's width. */
                white-space: nowrap;
            }
            ```
    - Position:
        - Description: Review `position` property.
            - index.html
            ```
            <div class="outer-container">
                <div class="inner-container">
                    <div class="box absolute">
                        <p>Absolute</p>
                    </div>

                    <!-- <div class="box relative">
                        <p>Relative</p>
                    </div>

                    <div class="box fixed">
                        <p>Fixed</p>
                    </div>

                    <div class="box sticky">
                        <p>Sticky</p>
                    </div> -->
                </div>
            </div>
            ```
            - style.css
            ```
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-size: 2rem;
                font-family: monospace;
                height: 200vw;
            }

            .outer-container {
                border: 3px solid red;
                width: 900px;
                height: 500px;

                /* top and bottom 4px */
                /* left and right margins to auto means that the browser will automatically calculate and distribute the remaining horizontal space equally on both sides of the element.  */
                margin: 40px auto;
                position: relative;
            }

            .inner-container {
                border: 3px solid blue;
                width: 700px;
                height: 200px;
                margin: 100px auto;
                /* position: relative; */
            }

            .box {
                width: 150px;
                height: 150px;
                color: white;
                padding: 1rem;
                /* position: relative; */
            }

            /* position: absolute is positioned relative to its nearest positioned ancestor, if any; otherwise, it is positioned relative to the initial containing block (usually the <html> element). */
            .absolute {
                background-color: green;
                position: absolute;
                top: 0;
                right: 0;
            }

            /* position: relative is positioned relative to its normal position in the document flow. */
            .relative {
                background-color: red;
                position: relative;
                top: 100px;
                left: 100px
            }

            /* position: fixed is positioned relative to the viewport (the browser window). It stays fixed in the same position even when the page is scrolled. */
            .fixed {
                background-color: blueviolet;
                position: fixed;
                top: 100px;
            }

            /* make sure to uncomment other div (absolute relative and fixed) to see how sticky works */
            /* position: sticky property is used to create elements that "stick" to a specific position on the page when scrolling */
            .sticky {
                background-color: black;
                position: sticky;
                top: 0;
            }
            ```
            - > Real life Scenario using Position
            - index.html
            ```
            <section id="one">
                <header class="blue">Header One</header>
                <h2>One</h2>
            </section>

            <section id="two">
                <header class="red">Header Two</header>
                <h2>Two</h2>
            </section>

            <section id="three">
                <header class="green">Header Three</header>
                <h2>Three</h2>
            </section>

            <footer>
                <a href="#one">One</a>
                <a href="#two">Two</a>
                <a href="#three">Three</a>
            </footer>
            ```
            - style.css
            ```
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-size: 2rem;
                font-family: monospace;
            }

            html {
                scroll-behavior: smooth;
            }

            section {
                height: 1000px;
            }

            .blue {
                background-color: blue;
            }

            .red {
                background-color: red;
            }

            .green {
                background-color: green;
            }

            header, footer {
                color: white;
                text-align: center;
                height: 100px;
                font-size: 5rem;
            }

            header {
                position: sticky;
                top: 0;
            }

            footer {
                background-color: black;
                position: sticky;
                bottom: 0;
            }
            ```

- **CSS Assignments (Breakout rooms - 5)**
    - TBD
- [CSS Quiz/Feedback Form (TBD)]()