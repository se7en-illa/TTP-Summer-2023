import { useState, useEffect } from "react";
import Pokemon from "./SinglePokemon";

export default function People() {
  const [pokemon, setPeople] = useState([]);
  const [ids, setIds] = useState([0, 1, 2]);

  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon"
      );

      const people = await response.json();
      setPeople(people);
    }

    fetchPeople();
  });

  return "sdfds";
}
