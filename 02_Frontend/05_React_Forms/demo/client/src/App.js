import React from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos.jsx";
import EditTodo from "./components/EditTodo.jsx";
import CreateTodo from "./components/CreateTodo.jsx";

export default function App() {
  return (
    <div className="App">
      <nav>Navigation</nav>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todos/:id" element={<EditTodo />} />
        <Route path="/createTodo" element={<CreateTodo />} />
      </Routes>
    </div>
  );
}
