import { useState, useEffect } from "react";

export default function People({ name, setCurrentPokemonName, setShowAll }) {
  const [singlePokemon, setSinglePokemon] = useState({});

  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      setSinglePokemon(data);

      console.log(data);
    }

    fetchPeople();
  }, [name]);

  function handleGoBackClick(event) {
    event.preventDefault();

    setShowAll(true);
  }

  function handleButtonClick() {
    setCurrentPokemonName("pikachu");
  }

  return (
    <div>
      <h2>{singlePokemon.name}</h2>
      <ul>
        <li>Id: {singlePokemon.id}</li>
        <li>Height: {singlePokemon.height}</li>
        <li>Weight: {singlePokemon.weight}</li>
      </ul>
      <button onClick={handleButtonClick}>Test dependency</button>
      <a href="/" onClick={handleGoBackClick}>
        Go back
      </a>
    </div>
  );
}
