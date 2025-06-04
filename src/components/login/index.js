import React, { useState } from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser?.email === form.email &&
      savedUser?.password === form.password
    ) {
      alert("Login successful!");
      navigate("/home")
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="form-container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <label>Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email address"
        value={form.email}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
      />

      <button className="login-btn" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
