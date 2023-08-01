import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditTodo() {
  const [todo, setTodo] = useState({});
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchTodo() {
      try {
        const { data } = await axios.get(`/api/todos/${id}`);
        setTodo(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTodo();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(taskName, assignee);

    try {
      const { data } = await axios.put(`/api/todos/${id}`, {
        taskName,
        assignee,
      });

      console.log(data);

      setTaskName(data.taskName);
      setAssignee(data.assignee);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h2>{todo.taskName}</h2>
      <p>assigned by {todo.assignee}</p>

      <form id="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label htmlFor="assignee">Assignee:</label>
        <input
          name="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>
    </>
  );
}
