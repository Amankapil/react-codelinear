import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form({ isDarkMode, toggleDarkMode }) {
  const [fristName, SetfristName] = useState("");
  const [lastName, SetlastName] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState("");
  const [message, Setmessage] = useState("");

  const navigate = useNavigate("/home");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { fristName, lastName, email, number, message };
    console.log(data);

    if (fristName && lastName && email && number && message) {
      const response = await axios
        .post("https://backend-production-f9ef.up.railway.app/send_mail", data)
        .then((response) => {
          if (response.status === 200) {
            alert("Your Application was sent successfully");
            window.location.reload();
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("please fill details");
    }
  };

  return (
    <section className="contact-form">
      <div className="contact-container">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="contact-form-h1"
        >
          How Can We Reach You?
        </h1>
        <form action="" id="form">
          <div className="name-container">
            <input
              type="text"
              placeholder="First Name*"
              className="first-name"
              onChange={(e) => SetfristName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="first-name"
              onChange={(e) => SetlastName(e.target.value)}
              required
            />
          </div>
          <div className="name-container">
            <input
              type="email"
              placeholder="Your Email"
              className="first-name"
              required
              onChange={(e) => SetEmail(e.target.value)}
            />
            <div className="number">
              <input
                type="number"
                placeholder="+91 -"
                className="tele"
                // required
              />
              <input
                type="number"
                placeholder="Phone*"
                onChange={(e) => SetNumber(e.target.value)}
                className="phone-number"
                required
              />
            </div>
          </div>
          <input
            type="textarea"
            placeholder="Your Message"
            className="yourmsg first-name"
            onChange={(e) => Setmessage(e.target.value)}
          />
          <button onClick={handleSubmit} className="sub_btn">
            <p
              className={
                isDarkMode ? "sub_button-contentdark" : "sub_button-content"
              }
            >
              submit your response
            </p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
