import { useState } from "react";
import Article from "./Article.jsx";
import Aside from "./Aside.jsx";

export default function Main() {
  // creates a stateful variable named count
  // creates a function to update count
  // setting count to 0
  const [count, setCount] = useState(0);

  function handleClickUp() {
    setCount(count + 1);
  }

  function handleClickDown() {
    setCount(count - 1);
  }

  return (
    <main>
      <Article
        count={count}
        handleClickUp={handleClickUp}
        handleClickDown={handleClickDown}
      />
      <Aside count={count} />
    </main>
  );
}
