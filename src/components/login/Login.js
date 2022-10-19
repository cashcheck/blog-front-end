import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function login(event) {
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
    console.log(response);
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
