import { useState, useEffect } from "react";
import Person from "./Person";

export default function People() {
  // here we destructure our array of size 2
  const [people, setPeople] = useState([]);
  const [ids, setIds] = useState([0, 1, 2]);

  // useEffect(() => {
  //   async function fetchPeople() {
  //     const response = await fetch(
  //       "https://pokeapi.co/api/v2/pokemon"
  //     );

  //     const people = await response.json();
  //     setPeople(people);
  //   }

  //   fetchPeople();
  // });

  return (
    <ul>
      {/* // here we destructure our array object by picking its keys */}
      {/* {ids.map((id) => (
        <Person index={id} />
      ))} */}
      <Person index={2} />
    </ul>
  );
}
