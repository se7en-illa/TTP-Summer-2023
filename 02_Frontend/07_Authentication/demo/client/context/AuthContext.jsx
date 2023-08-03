import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const TOKEN = "token";

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  function setAxiosErrorMessage(err) {
    console.error(err);

    if (err.response.data) {
      setError(err.response.data);
    } else {
      setError("There was an issue with your request.");
    }
  }

  async function fetchUser() {
    const token = window.localStorage.getItem(TOKEN);

    try {
      if (token) {
        const { data } = await axios.get("/auth/me", {
          headers: {
            authorization: token,
          },
        });

        setLoggedIn(true);
        setCurrentUser(data);
      }
    } catch (err) {
      setAxiosErrorMessage(err);
    }
  }

  async function signUp({ username, password }) {
    try {
      const { data } = await axios.post("/auth/signup", {
        username,
        password,
      });

      window.localStorage.setItem(TOKEN, data.token);
      fetchUser();
    } catch (err) {
      setAxiosErrorMessage(err);
    }
  }

  async function login(username, password) {
    try {
      const { data } = await axios.post("/auth/login", { username, password });

      window.localStorage.setItem(TOKEN, data.token);
      fetchUser();
    } catch (err) {
      setAxiosErrorMessage(err);
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN);
    setLoggedIn(false);
    setCurrentUser(null);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedIn, currentUser, login, logout, signUp, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
