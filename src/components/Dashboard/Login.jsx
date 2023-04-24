import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./dash.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate("/home");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/code/login", { username, password })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert(
              "logged in successfully please enter ok to visit the dash board page "
            );
            navigate("/dash");
          } else if (response.status === 404) {
            alert(response.data.message);
          }
        });

      const token = response.data.token;
      // Do something with the token (e.g. store it in local storage or state)
      alert("loggged in");
    } catch (error) {
      setError("Incorrect username or password");
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            placeholder="type"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              color: "black",
            }}
          />
        </label>
        <br />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
