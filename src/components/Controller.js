import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Register from "./register/Register";
import Login from "./login/Login";

function Controller() {
  const [user, setUser] = useState(false);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Controller;
