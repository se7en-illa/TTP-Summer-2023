const express = require("express");
const app = express();
const PORT = 3000;

const people = [
  { id: 1, name: "Elly", age: 24 },
  { id: 2, name: "Jose", age: 19 },
  { id: 3, name: "Julian", age: 42 },
];

const layout = (bodyContent) =>
  `<html><head></head><body>${bodyContent}</body></html>`;

const allPeople = (people) => `
  <h1>All People</h1>
  <main>
    ${people
      .map((person) => {
        return `<section><a id="${person.id}" href="/people/${person.id}">${person.name}</a> is <em>${person.age}</em> years old</section>`;
      })
      .join("")}
  </main>
`;

const singlePerson = (person) => `
  <h1>${person.name}</h1>
  <p>id: ${person.id}, age: ${person.age}</p>
  <a href="/people">Back to the main page</a>
`;

app.get("/people", (req, res) => {
  res.send(layout(allPeople(people)));
});

app.get("/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => parseInt(id) === person.id);

  res.send(layout(singlePerson(person)));
});

// redirect when client asks for route that doesn't exist
app.get("*", (req, res) => {
  res.redirect("/people");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
