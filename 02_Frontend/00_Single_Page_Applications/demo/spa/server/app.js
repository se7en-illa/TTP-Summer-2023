const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

const people = [
  { id: 1, name: "Elly", age: 24 },
  { id: 2, name: "Jose", age: 19 },
  { id: 3, name: "Julian", age: 42 },
];

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/people", (req, res, next) => {
  try {
    res.send(people);
  } catch (err) {
    next(err);
  }
});

app.get("/api/people/:id", (req, res, next) => {
  const { id } = req.params;

  try {
    const person = people.find((person) => parseInt(id) === person.id);

    res.send(person);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, rest, next) => {
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
