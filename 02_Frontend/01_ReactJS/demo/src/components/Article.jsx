import { useState } from "react";

export default function Article({ count, handleClickUp, handleClickDown }) {
  // the code below and above are identical (it uses destructuring)
  // const { count, handleClickUp, handleClickDown } = props;

  return (
    <>
      <article>
        <p>Count = {count}</p>
        <button onClick={handleClickUp}>Count up</button>
        <button onClick={handleClickDown}>Count down</button>
      </article>
    </>
  );
}
