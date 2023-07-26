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