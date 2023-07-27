import Pokemon from "./components/Pokemon";
import SinglePokemon from "./components/SinglePokemon";
import { useState } from "react";
import "./App.css";

function App() {
  const [showAll, setShowAll] = useState(true);
  const [currentPokemonName, setCurrentPokemonName] = useState("");

  function handleClick(event) {
    event.preventDefault();

    setCurrentPokemonName(event.target.innerText);
    setShowAll(false);
  }

  return (
    <>
      <h1>App</h1>
      {showAll ? (
        <Pokemon handleClick={handleClick} />
      ) : (
        <SinglePokemon
          name={currentPokemonName}
          setCurrentPokemonName={setCurrentPokemonName}
          setShowAll={setShowAll}
        />
      )}
    </>
  );
}

export default App;
