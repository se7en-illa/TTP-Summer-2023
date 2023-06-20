<img src="https://i.imgur.com/Bzkqs5I.png" alt="drawing" width="100"/>

# HTML (Hyper Text Markup Language)

## Meeting Process
<!-- - [Git/GitHub Intro Presentation](https://docs.google.com/presentation/d/1vlFw8mo_maauvt0ro8b-DYpHEub8ZeY82qEkbexBe14/edit?usp=sharing) -->
<!-- - [Git/GitHub Demo (Repo)](https://github.com/r0m3c/TTP_2023_Git_Basics) -->
- [HTML Slides (TBD)]()
- Topics we'll be going over
    - What is HTML?
    - Basic structure of an HTML document (DOCTYPE, html, head, body).
    - HTML tags and elements.
        - h1 - Represents a top-level heading
            ```
            <h1>Welcome to My Website</h1>
            <h1>Page Title</h1>
            ``` 
        - h2 - Represents a heading level 2
            ``` 
            <h2>About Us</h2>
            <h2>Introduction</h2>
            ```
        - h3 - Represents a heading level 3
            ```
            <h3>Section Title</h3>
            <h3>Subsection Title</h3>
            ```
        - p - Represents a paragraph of text
            ```
            <p>This is a paragraph of text.</p>
            <p>Product description goes here.</p>
            ```
        - img - Inserts an image into the webpage
            ```
            <img src="image.jpg" alt="Image Description">
            <img src="logo.png" alt="Logo">
            ```
        - button - Creates a clickable button
            ```
            <button>Click Me</button>
            <button>Submit</button>
            ```
        - a - Defines a hyperlink
            ```
            <a href="https://www.example.com">Visit Website</a>
            <a href="#section">Go to Section</a>
            ```
        - bold - Represents bold tex
            ```
            <b>This text is bold.</b>
            <p><b>Important:</b> Please read the instructions carefully.</p>
            ```
        - br - Inserts a line break.
            ```
            <p>This is the first line.<br>This is the second line.</p>
            ```
        - hr - Represents a horizontal rule (a thematic break)
            ```
            <p>Text above<hr>Text below</p>
            <h2>Section Title</h2>
            <p>Section content...</p>
            <hr>
            ```
        - i - Represents italicized text
            ```
            <i>This text is italicized.</i>
            <p><i>Important:</i> Do not delete this file.</p>
            ```
        - u - Renders the text with an underline
            ```
            <u>Underlined text</u>
            <p><u>Click here</u> for more information.</p>
            ```
        - strike - Renders the text with a strikethrough
            ```
            <strike>This text is strikethrough.</strike>
            <p><strike>Out of stock</strike></p>
            ```
        - del - Indicates deleted or removed text
            ```
            <del>This content has been removed.</del>
            <p><del>Old Price: $20</del></p>
            ```
        - ins - Indicates inserted or added text
            ```
            <ins>New feature: Chat support</ins>
            <p><ins>Price Reduced: $15</ins></p>
            ```
        - big - Increases the font size of the enclosed text
            ```
            <big>This text is bigger.</big>
            <p><big>Important Note:</big> Read the instructions carefully.</p>
            ```
        - small - Reduces the font size of the enclosed text.
            ```
            <small>This text is smaller.</small>
            <p><small>Disclaimer:</small> Terms and conditions apply.</p>
            ```
        - em - Indicates emphasized or important text.
            ```
            <em>Important</em>: Please read the instructions.
            <p><em>Note:</em> This offer is valid for a limited time.</p>
            ```
        - audio - Embeds an audio file in the webpage.
            ```
            <audio src="audio.mp3" controls></audio>
            <audio src="song.ogg" controls autoplay></audio>
            ```
        - video - Embeds a video file in the webpage.
            ```
            <video src="video.mp4" controls></video>
            <video src="movie.webm" controls autoplay></video>
            ```
        - iframe - Embeds another webpage within the current webpage
            ```
            <iframe src="https://www.example.com"></iframe>
            <iframe src="about.html" width="500" height="300"></iframe>
            ```
        - textarea - Creates a multiline input field for text
            ```
            <textarea rows="4" cols="50">Enter your message here...</textarea>
            <textarea name="description" placeholder="Product description"></textarea>
            ```
        - Unordered - Creates a bulleted list.
            ```
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <ul>
              <li>Red</li>
              <li>Green</li>
              <li>Blue</li>
            </ul>
            ```
        - ordered - Creates a numbered list
            ```
            <ol>
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
            </ol>
            <ol>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
            </ol>
            ```
        - tables - Defines a table structure to display data in rows and columns.
            ```
            <table>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>Product 1</td>
                <td>$10</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Country</th>
                <th>Capital</th>
              </tr>
              <tr>
                <td>USA</td>
                <td>Washington, D.C.</td>
              </tr>
            </table>
            ```
        - abbr - Specifies an abbreviation or acronym
            ```
            <abbr title="World Health Organization">WHO</abbr>
            <p><abbr title="Hypertext Markup Language">HTML</abbr> is the standard markup language for creating web pages.</p>
            ```
        - cite - Indicates a reference to a creative work
            ```
            <p><cite>Hamlet</cite> by William Shakespeare</p>
            ```
        - code - Represents a snippet of code
            ```
            <code>console.log('Hello, World!');</code>
            <p>Use the <code>getElementsByClassName</code> function to select elements by class.</p>
            ```
    - Grouping Tags
        - div - Defines a division or container for grouping elements
            ```
            <div>
              <h2>Section Title</h2>
              <p>Section content...</p>
            </div>
            <div>
              <p>Content goes here...</p>
            </div>
            ```
        - span - Inline container for styling a specific section of text or element
            ```
            <p>Click <span class="highlight">here</span> to continue.</p>
            <p><span class="badge">New</span> Product</p>
            ```
        - navbar - Represents a navigation bar.
            ```
            <nav>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
            <nav>
              <!-- Navbar content goes here -->
            </nav>
            ```
        - footer - Represents the footer of a document or section
            ```
            <footer>
              <p>2023 My Website. All rights reserved.</p>
            </footer>
            <footer>
              <!-- Footer content goes here -->
            </footer>
            ```
        - aside - Defines content that is tangentially related to the main content
            ```
            <aside>
              <h3>Related Links</h3>
              <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
              </ul>
            </aside>
            <aside >
              <!-- Sidebar content goes here -->
            </aside>
            ```
        - article - Represents an independent, self-contained piece of content
            ```
            <article>
              <h2>Article Title</h2>
              <p>Article content...</p>
            </article>
            <article>
              <!-- Blog post content goes here -->
            </article>
            ```
        - center - Centers the content horizontally within its container
            ```
            <center>
              <h1>Welcome</h1>
              <p>Centered content goes here...</p>
            </center>
            ```
        - & nbsp; / & copy; / & trade; - Represents non-breaking space, copyright symbol, and trademark symbol, respectively.
            ```
            <p>This is some text&nbsp;with non-breaking space.</p>
            <p>&copy; 2023 My Company. All rights reserved.</p>
            <p>Company X&trade;</p>
            ```
        - blockquote - Indicates a section that is quoted from another source.
            ```
            <blockquote>
              <p>"The greatest glory in living lies not in never falling, but in rising every time we fall."</p>
              <footer>― Nelson Mandela</footer>
            </blockquote>
            ```
        - address - Represents contact information for the nearest ancestor or body
            ```
            <address>
              <p>123 Street, City</p>
              <p>Country</p>
            </address>
            <footer>
              <address>
                <p>123 Street, City</p>
                <p>Country</p>
              </address>
            </footer>
            ```
        - figure - Represents self-contained content, such as images or diagrams, that is referenced within the main content
            ```
            <figure>
              <img src="image.jpg" alt="Image Description">
              <figcaption>Image Caption</figcaption>
            </figure>
            ```
        - input - Creates an input field for users to enter data
            ```
            <input type="text" placeholder="Enter your name">
            <input type="text" id="username" name="username" maxlength="20">
            
            <input type="password" placeholder="Enter your password">
            <input type="password" id="password" name="password">
            
            <input type="email" placeholder="Enter your email">
            <input type="email" id="email" name="email" required>
            
            <input type="number" placeholder="Enter a number">
            <input type="number" id="age" name="age" min="0" max="100">
            
            <input type="checkbox" id="checkbox1" name="checkbox1" checked>
            <label for="checkbox1">Option 1</label>
            
            <input type="file" id="myFile" name="filename">
            ```
        - select - Creates a dropdown list for selecting options
            ```
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            
            <select>
              <option value="option1">Option 1</option>
              <option value="option2" selected>Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            
            <select multiple>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            
            <select>
              <optgroup label="Group 1">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </optgroup>
            </select>
            ```
        - form - used to create a container for a group of form elements, such as input fields, checkboxes, radio buttons, and more. It provides a structured way to collect and submit user data to a server or process it using client-side scripting
            ```
            <form action="/login" method="POST">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required><br>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>

                <input type="submit" value="Login">
          </form>
            ```
        - details/summary - 
            ```
            <details>
            <summary>You should see this on your terminal</summary>
            <img src="https://user-images.githubusercontent.com/71786791/192176275-3148d1d5-5ddb-4257-b1eb-7438929b5a85.png" alt="drawing" width="600" height="150"/>
            </details>
            ```
- **HTML Assignments (Breakout rooms - 5)**
    - **Description**: (Everyone individually) Create a respository using GitHub/Terminal (create VS Project folder). Choose 3 out of the 4 assignments to do below and push all your code to your repository when finished (all in one index.html file). Of the 3 assignments below that you choose, **Assignment 2 must be one of them**. Based on the HTML elements that we went over, try replicating to the best of your ability the website from the images provided. 
        - Assignment 1:
            - Create a static web page to display your personal information
                - Use the appropriate tags
                - Insert your personal information and image where appropriate (don't copy text in the image below)
            <details>
            <summary>Website Img (1)</summary>
            <img src="https://hackmd.io/_uploads/rkYrYwCvh.png" alt="drawing" width="600" height="350"/>
            </details>
        - Assignment 2:
            - Create a Recipe List using your favorite choice of food (don't copy the text in the image)
                - Hint: use li, ul, and table elements
            <details>
            <summary>Website Img (2)</summary>
            <img src="https://hackmd.io/_uploads/S1AYsPAPn.png" alt="drawing" width="600" height="350"/>
            </details>
        - Assignment 3:
            - Create a product catalog page that showcases different products along with their descriptions and prices.
                - You can choose the pictures/information from your favorite online website (don't copy image text)
            <details>
            <summary>Website Img (3)</summary>
            <img src="https://hackmd.io/_uploads/r1GWTDCP2.png" alt="drawing" width="600" height="350"/>
            </details>
        - Assignment 4:
            - Create a user registration form that collects information from users, such as their username, password, email, and profile picture.
                - Hint: use Form tag
                - Make sure you are using the appropriate attributes
            <details>
            <summary>Website Img (4)</summary>
            <img src="https://hackmd.io/_uploads/BktjTwAv2.png" alt="drawing" width="600" height="350"/>
            </details>
- [HTML Quiz/Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLSdQp4M3dGUxHYEfHCkn0X-e2he3zYIIWXDzRvUQbkjK88G1ng/viewform)
