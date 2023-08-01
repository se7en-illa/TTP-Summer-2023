import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const { data } = await axios.get("/api/todos");
        setTodos(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <h2>{todo.taskName}</h2>
          <p>assigned by {todo.assignee}</p>
        </li>
      ))}
    </ul>
  );
}
