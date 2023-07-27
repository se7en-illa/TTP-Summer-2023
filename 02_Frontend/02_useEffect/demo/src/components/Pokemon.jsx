import { useState, useEffect } from "react";
import SinglePokemon from "./SinglePokemon";

export default function Pokemon({ handleClick }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokemon = await response.json();

      setPokemon(pokemon.results);

      // console.log(pokemon.results);
    }

    fetchPokemon();
  }, []);

  return (
    <ul>
      {pokemon.map(({ name }) => (
        <li key={name}>
          <a onClick={handleClick} href={`/${name}`}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
