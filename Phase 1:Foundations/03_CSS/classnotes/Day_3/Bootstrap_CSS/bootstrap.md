<img src="https://i.imgur.com/Bzkqs5I.png" alt="drawing" width="100"/>

# Bootstrap (HTML/CSS)

## Meeting Process
- Pre-requisites
    - Knowledge of HTML & CSS
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
    - Detailed documentation of all of Bootstrap abilities and predefined classes
- Topics we'll be going over
    - What is Bootstrap:
        - Bootstrap is a popular open-source framework for front-end web development. It provides a collection of pre-designed, responsive components and CSS classes that help developers create consistent and visually appealing websites or web applications efficiently. Bootstrap simplifies the process of building responsive, mobile-first designs by offering a grid system, typography, forms, navigation, and other ready-to-use components.
    - Why is it useful:
        - **Responsive Design**: Bootstrap provides responsive predefined CSS classes that make it easy to create websites that adapt and look great on different devices and screen sizes. This eliminates the need to write custom CSS for responsive layouts.
        - **Time-Saving**: Bootstrap comes with a wide range of pre-designed components, such as navigation bars, buttons, forms, alerts, and more. These components can be easily added to a project, saving developers time and effort in building common UI elements from scratch.
        - **Consistency and Professionalism**: By using Bootstrap, developers can ensure a consistent and professional look and feel across their website. Bootstrap's design and style guidelines help maintain a cohesive visual identity throughout the project.
        - **Customizability**: While Bootstrap provides a default set of styles and components, it also allows for customization. Developers can override or extend Bootstrap's styles and create their own themes to match their project's unique design requirements.
        - **Community and Documentation**: Bootstrap has a large and active community of developers, which means there are numerous resources, tutorials, and examples available. The official Bootstrap documentation is comprehensive and well-documented, making it easy to learn and use.
    - **In other words**:
        - Bootstrap simplifies your life in terms of creating responsive website with their predefined **classes** in their framework. Although, you should know that everything that Bootstrap utilizes can be created using vanilla **CSS**..
    - > Note: Create index.html file
    - **Connect HTML File to Bootstrap**:
        - You can start out with an HTML file like you would any project
            - index.html
            ```
            <!doctype html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Bootstrap demo</title>
              </head>
              <body>
                <h1>Hello, world!</h1>
              </body>
            </html>
            ```
        - Insert the following `<link>` element into your HTML file in your **head** element. This will **connect your HTML File to Bootstraps Libraries**
            - index.html
            ```
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            ```
        - Bootstrap also has some predefined Javascript methods that some of their predefined classes utilize, so in order for you to have that functionality, you are going to have to insert the following `script` element inside (all the way of the bottom) of your `body` element.
            - index.html
            ```
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            ```
        > You've successfully installed Bootstrap
    -  **Basic Bootstrap Examples - Buttons**:
        -  Description: Utilize some of the predefined button classes provided by Bootstrap
            -  index.html
            ```
            <button type="button" class="btn btn-primary">Primary Button</button>
            <button type="button" class="btn btn-secondary">Secondary Button</button>
            <button type="button" class="btn btn-success">Success Button</button>
            
            <!--  More buttons > outlines   -->
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            <button type="button" class="btn btn-outline-warning">Warning</button>
            <button type="button" class="btn btn-outline-info">Info</button>
            <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark">Dark</button>
            
            <!--  Button Sizes  -->
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
            <button type="button" class="btn btn-secondary btn-lg">Large button</button>
            <button type="button" class="btn btn-secondary btn-sm">Small button</button>
            ```
            >Note: We never created a CSS File, yet we are still able to style our elements. That's the power of bootstrap
    - **Basic Bootstrap Examples - Tables**:
        - Description: Bootstrap also provides built in table methods.
            - index.html
            ```
            <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
            </table>
            ```
    - **Basic Bootstrap Examples - Grid**:
        - Description: Bootstrap also provides built in grid methods that create for an easy creation of grids, rows, and columns for your website.
            - index.html
            ```
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  Column
                </div>
                <div class="col">
                  Column
                </div>
                <div class="col">
                  Column
                </div>
              </div>
            </div>
            ```
            - style.css
            ```
            .container {
                background-color: red; /* Override background color */
            }

            .container.text-center {
                text-align: left; /* Override text alignment */
            }

            .container .row {
                margin-top: 20px; /* Override margin-top of the row */
            }

            .container .col {
                background-color: blue; /* Override background color of columns */
                color: white; /* Override text color of columns */
            }
            ```
            > More Grid Practice - Different column sizes
            - index.html
            ```
            <div class="container text-center">
                <div class="row">
                  <div class="col">
                    1 of 3
                  </div>
                  <div class="col-6">
                    2 of 3 (wider)
                  </div>
                  <div class="col">
                    3 of 3
                  </div>
                </div>
            </div>
            ```
            - style.css
            ```
            .container {
                background-color: brown;
            }

            .col {
                background-color: green;
            }
            ```
    - **Basic Bootstrap Examples - Progress Bar (Buit in component)**
        - Description: More examples using built in Boostrap classes to create a progress diagram.
            - index.html
            ```
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    25%
                </div>
            </div>
            ```
    - **Basic Bootstrap Examples - Card (Buit in component)**
        - Description: More examples using built in Boostrap classes to create a Card component.
            - index.html
            ```
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
            <div class="card">
              <div class="card-header">
                Featured
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            ```
    - **Basic Bootstrap Examples - Badge (Buit in component)**
        - Description: More examples using built in Boostrap classes to create a Badge component.
            - index.html
            ```
            <button type="button" class="btn btn-primary">
                Notifications <span class="badge text-bg-secondary">4</span>
            </button>
            
            <button type="button" class="btn btn-primary position-relative">
              Profile
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </button>
            ```
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
    - Detailed documentation of all of Bootstrap abilities and predefined classes