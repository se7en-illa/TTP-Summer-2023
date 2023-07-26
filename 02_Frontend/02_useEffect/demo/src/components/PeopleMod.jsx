import { useState, useEffect } from "react";
import Person from "./Person";

export default function People() {
  // here we destructure our array of size 2
  const [people, setPeople] = useState([]);
  const [ids, setIds] = useState([0, 1, 2]);

<<<<<<< HEAD
  // useEffect(() => {
  //   async function fetchPeople() {
  //     const response = await fetch(
  //       "https://mocki.io/v1/93b89f1d-c95b-4b00-947d-b692e7528a3f"
  //     );

  //     const people = await response.json();
  //     setPeople(people);
  //   }

  //   fetchPeople();
  // });
=======
  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch(
        "https://mocki.io/v1/93b89f1d-c95b-4b00-947d-b692e7528a3f"
      );

      const people = await response.json();
      setPeople(people);
    }

    fetchPeople();
  });
>>>>>>> 645ee97 (Modified 02_02 demo files)

  return (
    <ul>
      {/* // here we destructure our array object by picking its keys */}
      {/* {ids.map((id) => (
        <Person index={id} />
      ))} */}
      <Person index={2} />
    </ul>
  );
<<<<<<< HEAD
}
=======
<<<<<<<< HEAD:02_Frontend/02_useEffect/demo/src/components/PeopleMod.jsx
}
=======
import { useEffect, useState } from "react";

export default function People(){
    
    const [people, setPeople] = useState([]);

    useEffect(() => 
    async function fetchPeople() {
        const response = await fetch(
            "https://mocki.io/v1/19fe7cc0-9684-48d4-9df2-8c1d4aaeacb9"
        );

        const people = await response.json();
        setPeople(people);

        fetchPeople();
    });

    return (
        <ul>
            {
                {title.map(({ id, age, name}) = (
                    <Person id={id} age={age} name={name}></Person>
                ))}
            }
        </ul>
    )
}
>>>>>>> 7b7b394 (Started tracking new folder)
========
}
>>>>>>>> 645ee97 (Modified 02_02 demo files):02_Frontend/02_useEffect/demo/src/components/People.jsx
>>>>>>> 645ee97 (Modified 02_02 demo files)
