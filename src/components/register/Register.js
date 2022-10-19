import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function registerPost(event) {
    event.preventDefault();
    const data = { username, password };
    const rawResponse = await fetch("http://localhost:5000/register", {
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
      <form onSubmit={registerPost}>
        <h1>register</h1>
        <label>username:</label>
        <input type="text" name="username" onChange={handleUsername}></input>
        <label>password:</label>
        <input
          type="password"
          name="password"
          onChange={handlePassword}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
