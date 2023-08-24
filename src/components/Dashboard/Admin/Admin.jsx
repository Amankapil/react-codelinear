import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../dash.scss";

function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate("/home");

  const handleUsernameChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/add", { title, content })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Title of pagas</h2>
          <label>
            Title
            <input
              placeholder="type"
              type="text"
              value={title}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            cOOntent
            <textarea
              placeholder="type"
              // type="password"
              value={content}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          {error && <div className="error">{error}</div>}
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}

export default Admin;
