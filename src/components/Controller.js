import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Register from "./register/Register";
import Login from "./login/Login";
import AddPost from "./add_post/AddPost";
import Home from "./home/Home";
import Post from "./post/Post";
import EditPost from "./edit_post/EditPost";

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
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/post/:url" element={<Post />} />
          <Route path="/post/:url/edit" element={<EditPost />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export { Controller, UserContext };
