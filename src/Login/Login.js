import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function ValidateEmail(mail) {
    const emailRegex = new RegExp(/^[^@\s]+@[^\s]+\.[^\s]+$/);
    if (emailRegex.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  function ValidatePassword(pw) {
    const passwordRegex = new RegExp(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/
    );
    if (passwordRegex.test(pw)) {
      return true;
    }
    alert("You have entered an invalid password type!");
    return false;
  }

  return (
    <div class="main-body">
      <h1>Welcome to Product App</h1>
      <br />
      <br />
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          <strong>Email address</strong>
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        onClick={(e) => {
          if (ValidateEmail(email) && ValidatePassword(password)) {
            window.location.href = "/homePage";
          }
        }}
      >
        Login
      </button>
    </div>
  );
}
