import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  console.log("did I reach login?");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        className="user-forms"
        onSubmit={(e) => {
          e.preventDefault();
          props.loginSubmit(formData);
        }}
      >
        <h3>Login</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />

        <button>Submit</button>
      </form>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </>
  );
}

export default Login;
