import { useState, useContext } from "react";
import { UserContext } from "../Controller";

export default function Login() {
  const user = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function login(event) {
    try {
      event.preventDefault();
      const data = { username, password };
      const rawResponse = await fetch("http://localhost:5000/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await rawResponse.json();
      localStorage.setItem("user", username);
      localStorage.setItem("token", response.token);
      user.setUser(username);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <form onSubmit={login}>
        <h1>login</h1>
        <label>username:</label>
        <input
          type="text"
          name="username"
          onChange={handleUsername}
          value={username}
        ></input>
        <label>password:</label>
        <input
          type="password"
          name="password"
          onChange={handlePassword}
          value={password}
        ></input>
        <button type="submit">login</button>
      </form>
    </div>
  );
}
