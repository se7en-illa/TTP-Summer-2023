// import axios from "axios";
// import React, { useEffect } from "react";

// function starWarsCharacters() {
//     useEffect(() => {
//         console.log("Component mounted");
//         console.log("We will fetch our data here!");
//     }, []);
//     return (
//         <div>
//             <h1>Characters</h1>
//         </div>
//     );
// }

// useEffect(() => {
//     async function fetchData() {
//         try {
//             const response = await axios.get("https://api.example.com/data");
//             console.log(response.data.results);
//         } catch (error) {
//             console.log("Error fetching data", error);
//         }
//     }
//     fetchData();
// }, []);

// export default starWarsCharacters;
import axios from "axios";

import React, { useEffect } from "react";

function StarWarsCharacters() {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {
    console.log("We will fetch our data here!");
    }, []);

    useEffect(() => {
        const fetchCharacters = async () => {
          try {
            const response = await axios.get("https://swapi.dev/api/people/");
            setCharacters(response.data.results);
          } catch (error) {
            console.error("Error fetching data", error);
          }
        };
      
        fetchCharacters();
      }, []);

    // useEffect(() => {
    //     const fetchCharacters = async () => {
    //         try {
    //             const response = await axios.get("https://swapi.dev/api/people/");
    //             console.log(response.data.results);
    //         } catch (error) {
    //             console.error("Error fetching data", error);
    //         }
    //     };

    //     fetchCharacters();
    // }, []);

    return (
        <div>
          <h1>Star Wars Characters</h1>
          <ul>
            {characters.map((character) => (
              <li key={character.name}>
                <h2>{character.name}</h2>
                <p>Gender: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height}</p>
                <p>Homeworld: {character.homeworld}</p>
                <p>Species: {character.species[0]}</p>
              </li>
            ))}
          </ul>
        </div>
      );
}
async function fetchData() {
    try {
      const response = await axios.get("https://api.example.com/data");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
  fetchData();

export default StarWarsCharacters;