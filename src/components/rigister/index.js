import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"

const Register = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registered successfully!");
    navigate("/login")
  };

  return (
    <div className="form-container">
      <h2>Create your PopX account</h2>

      <label>Full Name*</label>
      <input name="name" value={form.name} onChange={handleChange} />

      <label>Phone number*</label>
      <input name="phone" value={form.phone} onChange={handleChange} />

      <label>Email address*</label>
      <input name="email" type="email" value={form.email} onChange={handleChange} />

      <label>Password*</label>
      <input name="password" type="password" value={form.password} onChange={handleChange} />

      <label>Company name</label>
      <input name="company" value={form.company} onChange={handleChange} />

      <label>Are you an Agency?*</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={form.agency === "Yes"}
            onChange={handleChange}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={form.agency === "No"}
            onChange={handleChange}
          />{" "}
          No
        </label>
      </div>

      <button className="register-btn" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
};

export default Register;
