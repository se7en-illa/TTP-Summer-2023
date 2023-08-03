import React from "react";
import { useAuthContext } from "../context/AuthContext.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import "./App.css";

export default function App() {
  const { currentUser, loggedIn, logout } = useAuthContext();

  function handleLogout() {
    logout();
  }

  return loggedIn ? (
    <p>
      Welcome, <strong>{currentUser.username}</strong>{" "}
      <button onClick={handleLogout}>Logout</button>
    </p>
  ) : (
    <div id="forms">
      <SignUpForm />
      <LoginForm />
    </div>
  );
}
