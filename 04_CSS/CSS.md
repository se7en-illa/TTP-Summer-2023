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
            p {
                color: red;
            }
            ```
    > Note: from now on, we're going to be using our `style.css` file for styling our `index.html` file
    - **fd**:


- **CSS Assignments (Breakout rooms - 5)**
    - TBD
- [CSS Quiz/Feedback Form (TBD)]()
