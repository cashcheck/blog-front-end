import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Register from "./register/Register";
import Login from "./login/Login";
import Protected from "./protected/Protected";

const UserContext = React.createContext();

function Controller() {
  const [user, setUser] = useState("");

  function logout() {
    setUser("");
    localStorage.clear();
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      setUser(loggedIn);
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser, logout }}>
        <Nav />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export { Controller, UserContext };
