import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await axios.post("/api/todos", {
        taskName,
        assignee,
      });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
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
