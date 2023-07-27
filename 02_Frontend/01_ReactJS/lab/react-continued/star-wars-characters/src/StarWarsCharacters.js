import React, { useEffect, useState } from "react";
import axios from "axios";

function StarWarsCharacters() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    useEffect(() => {
        axios

        .get("http://localhost:3001/api/people").then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error("Error fetching data", error);
        });
    }, []);

    const [characters, setCharacters] = useState([]);

    return (
    <div>
        <h1>Star Wars Characters</h1>
    </div>
    );
}

export default StarWarsCharacters;