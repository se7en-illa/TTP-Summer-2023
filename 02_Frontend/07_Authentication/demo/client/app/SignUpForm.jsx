import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext.jsx";

export default function SignUpForm() {
  const { signUp } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    signUp({ username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
}
