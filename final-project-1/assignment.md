# Final Project #1

## The Premise

You are the Chief Magical Officer of the company which manages enrollment for all Wizarding Schools across the globe. Create a RESTful web platform that allows you to manage your students and schools. Before getting started, please carefully review the expectations as outlined below.

All seed data is provided for you in the seed.js file. To start your project, use the following steps:

1. Fork and clone this repository to your local machine.
2. CD into the project folder and install all dependencies using `npm install`.
3. Create a new database called `wizarding-schools`.
4. Seed your database using `npm run seed`.
5. Run the server using `npm run start:dev`.

## BACK END:

<details>
<summary>Tier 1: All Wizarding Schools and Students (26/59):</summary>
### _wizarding school_

- [ ] Write a route to serve up all wizarding schools
      **Write a `wizarding schools` model with the following information:**
- [ ] name - not empty or null
- [ ] imageUrl - with a default value
- [ ] location - not empty or null
- [ ] description - extremely large text

### _students_

- [ ] Write a route to serve up all students
      **Write a `students` model with the following information:**
- [ ] firstName - not empty or null
- [ ] lastName - not empty or null
- [ ] email - not empty or null; must be a valid email
- [ ] imageUrl - with a default value
- [ ] magicalAbilityScore - decimal between 0.0 and 10.0

- [ ] Students may be associated with at most one wizarding school.
- [ ] Likewise, wizarding schools may be associated with many students
</details>

<details>
<summary>Tier 2: Single Student and Single Wizarding School (10/59):</summary>

_wizarding school_

- [ ] Write a route to serve up a single wizarding school (based on its id), including that schools' students
      _students_
- [ ] Write a route to serve up a single student (based on their id), including that student's wizarding school
</details>

<details>
<summary>Tier 3: Adding a Wizarding School and Adding a Student (8/59):</summary>
*wizarding school*
- [ ] Write a route to add a new wizarding school
*student*
- [ ] Write a route to add a new student
</details>

<details>
<summary>Tier 4: Removing a Wizarding School and Removing a Student (6/59):</summary>
*wizarding school*
- [ ] Write a route to remove a wizarding school (based on its id)
*student*
- [ ] Write a route to remove a student (based on their id)
</details>

<details>
<summary>Tier 5: Updating a Wizarding School and Updating a Student (9/59):</summary>

_wizarding school_

- [ ] Write a route to update an existing wizarding school
      _student_
- [ ] Write a route to update an existing student
</details>

## FRONT END:

<details>
<summary>Tier 1: All Wizarding Schools and Students (26/59):</summary>

_wizarding school_

- [ ] Write a component to display a list of all wizarding schools (at least their names and images)
- [ ] Write a context to manage wizarding schools in your application state
- [ ] Display the all-wizarding schools component when the url matches `/wizarding-schools`
      _students_
- [ ] Write a component to display a list of all students (at least their names)
- [ ] Write a context to manage students in your application state
- [ ] Display the all-students component when the url matches `/students`
      _navbar_
- [ ] Add a links to the navbar that can be used to navigate to the all-wizarding schools view and the all-students view
</details>

<details>
<summary>Tier 2: Single Student and Single Wizarding School (10/59):</summary>

_single wizarding school_
**Write a component to display a single wizarding school with the following information:**

- [ ] The wizarding school's name, image, location and description
- [ ] A list of the names of all students in that wizarding school (or a helpful message if it doesn't have any students)
- [ ] Display the appropriate wizarding school's info when the url matches /wizarding-schools/:wizardingSchoolId
- [ ] Clicking on a wizarding school from the wizarding schools view should navigate to show that wizarding school
- [ ] Clicking on the name of a student in the wizarding school view should navigate to show that student in the student view

_single student_
**Write a component to display a single student with the following information:**

- [ ] The student's full name, email, image, and magicalAbilityScore
- [ ] The name of their wizarding school (or a helpful message if they don't have one)
- [ ] Display the appropriate student when the url matches `/students/:studentId`
- [ ] Clicking on a student from the students view should navigate to show that student
- [ ] Clicking on the name of a wizarding school in the student view should navigate to show that wizarding school in the wizarding school view
</details>

<details>
<summary>Tier 3: Adding a Wizarding School and Adding a Student (8/59):</summary>

_wizarding school_

- [ ] Write a component to display a form for adding a new wizarding school that contains inputs for at least the name and location.
- [ ] Display this component as part of the wizarding schools view, alongside the list of wizarding schools
      **Submitting the form with a valid name/location should:**
- [ ] Make an AJAX request that causes the new wizarding school to be persisted in the database
- [ ] Add the new wizarding school to the list of wizarding schools without needing to refresh the page

_student_

- [ ] Write a component to display a form for adding a new student that contains inputs for at least first name, last name and email
- [ ] Display this component as part of the students view, alongside the list of students
      **Submitting the form with a valid first name/last name/email should:**
- [ ] Make an AJAX request that causes the new student to be persisted in the database
- [ ] Add the new student to the list of students without needing to refresh the page
</details>

<details>
<summary>Tier 4: Removing a Wizarding School and Removing a Student (6/59):</summary>

_wizarding school_

- [ ] In the wizarding schools view, include an X button next to each wizarding school
      **Clicking the X button should:**
- [ ] Make an AJAX request that causes that wizarding school to be removed from database
- [ ] Remove the wizarding school from the list of wizarding schools without needing to refresh the page

_student_

- [ ] In the students view, include an X button next to each student
      **Clicking the X button should:**
- [ ] Make an AJAX request that causes that student to be removed from database
- [ ] Remove the student from the list of students without needing to refresh the page
</details>

<details>
<summary>Tier 5: Updating a Wizarding School and Updating a Student (9/59):</summary>

**wizarding school**

- [ ] Write a component to display a form updating at least a wizarding school's name and location
- [ ] Display this component as part of the wizarding school view

_Submitting the form with valid data should:_

- [ ] Make an AJAX request that causes that wizarding school to be updated in the database
- [ ] Update the wizarding school in the current view without needing to refresh the page

- [ ] In the wizarding school view, display an Unenroll button next to each of its students, which removes the student from the wizarding school (in the database as well as this view)
      _hint: the student is still in the database but is no longer associated with the wizarding school_

**student**

- [ ] Write a component to display a form updating a student
- [ ] Display this component as part of the student view

_Submitting the form with valid data should:_

- [ ] Make an AJAX request that causes that student to be updated in the database
- [ ] Update the student in the current view without needing to refresh the page

</details>

## EXTRA CREDIT:

<details>
<summary>Finishing Touches:</summary>

- [ ] If a user attempts to add a new student or wizarding school without a required field, a helpful message should be displayed
- [ ] If a user attempts to access a page that doesn't exist (ex. `/potato`), a helpful "not found" message should be displayed
- [ ] If a user attempts to view a student/wizarding school that doesn't exist, a helpful message should be displayed
- [ ] Whenever a component needs to wait for data to load from the server, a "loading" message should be displayed until the data is available
- [ ] Overall, the app is spectacularly styled and visually stunning
</details>

<details>
<summary>Ordering:</summary>

- [ ] Create option for students to be ordered based on lastName on all-students view
- [ ] Create option for students to be ordered based on magicalAbilityScore on all-students view
- [ ] Create option for wizarding schools to be ordered based on number of enrolled students on all-wizarding schools view
</details>

<details>
<summary>Filtering:</summary>

- [ ] Create a filter on all-students view to only show students who are not registered to a wizarding school
- [ ] Create a filter on the all-wizarding schools view to only show wizarding schools that do not have any registered students
</details>

<details>
<summary>Seeding & Pagination:</summary>

- [ ] Adjust the seed file to seed 100+ students and 100+ wizarding schools
- [ ] Implement _front-end_ pagination for the students view (e.g. `/students?page=1` renders the first ten students, and `/students?page=2` renders students 11-20)
- [ ] Implement _front-end_ pagination for the wizarding schools view (e.g. `/wizarding-schools?page=1` renders the first ten wizarding schools, and `/wizarding-schools?page=2` renders wizarding schools 11-20)
- [ ] Implement _back-end_ pagination for students (e.g. `/api/students?page=1` returns the first ten students' data, and `/api/students?page=2` returns students 11-20)
- [ ] Implement _back-end_ pagination for wizarding schools (e.g. `/api/wizarding-schools?page=1` returns the first ten wizarding schools' data, and `/api/wizarding-schools?page=2` returns wizarding schools 11-20)
</details>
