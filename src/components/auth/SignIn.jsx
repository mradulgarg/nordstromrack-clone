import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  // const data = { name: "John", age: 30 };
  const [username, setUsername] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    navigate("/registration", { state: { username } });
  };

  return (
    <div className="sign-in-form">
      <form className="form__container pt-3 mb-5">
        <h1 className="mb-0">Sign In | Create Account</h1>
        <span className="mt-4" alt="account check message">
          Enter your email to get started.
        </span>
        <div className="form__controls mt-4">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            className="rounded-0"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <span className="tc-span mt-4" alt="account check message">
          By tapping Next, you agree to our Privacy Policy and Terms &
          Conditions.
        </span>
        <div className="form__controls">
          {/* <Link to={{ pathname: "/registration", state: { email } }}> */}
          <Button
            type="primary"
            className="button w-100 rounded-0 mt-4"
            onClick={handleClick}
          >
            Next
          </Button>
          {/* </Link> */}
          {/* <button className="button w-100 rounded-0 mt-4">Next</button> */}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
