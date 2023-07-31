import "./App.css";
import {
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AllCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try {
      async function fetchCharacters() {
        const response = await axios.get("https://swapi.dev/api/people");
        console.log(response.data.results);

        setCharacters(response.data.results);
      }

      fetchCharacters();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ul>
      <h1>All Characters</h1>
      {characters.map((character, index) => (
        <li key={character.name}>
          <h2>
            <Link to={`/characters/${index + 1}`}>{character.name}</Link>
          </h2>
          <p>
            <em>{character.height} cm</em>
          </p>
          <p>
            <strong>{character.mass} kg</strong>
          </p>
        </li>
      ))}
    </ul>
  );
}

function SingleCharacter() {
  const [character, setCharacter] = useState([]);
  const { characterId } = useParams();
  const location = useLocation();
  const navigate = useNavigate()

  console.log(location);

  useEffect(() => {
    try {
      async function fetchCharacter() {
        const response = await axios.get(
          `https://swapi.dev/api/people/${characterId}`
        );
        // console.log(response.data);

        setCharacter(response.data);
      }

      fetchCharacter();
    } catch (err) {
      console.error(err);
    }
  }, [characterId]);

  function handleClick() {
    navigate(-1);
  }

  return (
    <ul>
      <h1>SingleCharacter</h1>
      <h2>{character.name}</h2>
      <p>
        <em>{character.height} cm</em>
      </p>
      <p>
        <strong>{character.mass} kg</strong>
      </p>
      <button onClick={handleClick}>Go back</button>
    </ul>
  );
}

function LandingPage() {
  return "Landing Page";
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/characters/:characterId" element={<SingleCharacter />} />
      <Route path="/characters" element={<AllCharacters />} />
    </Routes>
  );
}

export default App;
