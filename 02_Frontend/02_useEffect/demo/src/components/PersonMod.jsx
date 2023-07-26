<<<<<<< HEAD
import { useState, useEffect } from "react";

export default function Person({ index }) {
  const [person, setPerson] = useState({});

  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch(
        "https://mocki.io/v1/93b89f1d-c95b-4b00-947d-b692e7528a3f"
      );

      const people = await response.json();
      // setPeople(people);
      setPerson(people[index]);
    }

    fetchPeople();
  }, [index]);

  // const { id, name, age } = person;

  return (
    <li key={person.id}>
      {person.name} is <strong>{person.age}</strong> years old.
    </li>
  );
}
=======
export default function Person(props) {
    const { id, name, age } = props;

    return (
        <li key={id}>
            {name} is {age} years old.
        </li>
    )
    
}
>>>>>>> 7b7b394 (Started tracking new folder)
