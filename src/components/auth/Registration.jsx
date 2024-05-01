import { Button } from "antd";
import  { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Registration = ({login}) => {
 const location = useLocation();
 const username = location.state;

 const [password, setPassword] = useState("");
 const [showPassword, setShowPassword] = useState(false);
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [keepSignedIn, setKeepSignedIn] = useState(false);
 const navigate = useNavigate();

 const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
 };

 const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Store data in localStorage
    localStorage.setItem("username", username.username);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("password", password); // Be cautious with storing passwords
    localStorage.setItem("keepSignedIn", JSON.stringify(keepSignedIn)); // Store boolean as string

    alert("Account created successfully!");
    login();
    navigate("/mensproduct");
    
 };

  const isValid = () => {
      if (!username || !firstName || !lastName || !password){
        return true;
      }
  }

 return (
    <div>
      <div className="register-form">
        <form className="form__container pt-3 mb-5" onSubmit={handleSubmit}>
          <h1 className="mb-0">Create Account</h1>
          <span
            className="mt-4 d-flex align-items-center"
            alt="account check message"
          >
            <svg className="me-2" width="24px" height="24px" focusable="false">
              <g id="Export_Settings">
                <path
                 className=""
                 d="M23.5 17.216c0 .3-.243.544-.544.544H7.17a.544.544 0 0 1-.544-.544V6.784c0-.3.243-.544.544-.544h15.786c.3 0 .544.243.544.544v10.432z"
                ></path>
                <circle className="" cx="20" cy="14.26" r="1.5"></circle>
                <path className="" d="M6.626 9.24H23.5"></path>
                <path
                 className=""
                 d="M.5 8.33h4.355m-2.722 3h2.722m-1.633 3h1.633"
                ></path>
              </g>
            </svg>
            Check out faster
          </span>
          <span
            className="mt-4 d-flex align-items-center"
            alt="account check message"
          >
            <svg className="me-2" width="26" height="16" focusable="false">
              <g
                transform="translate(1 1)"
                stroke="#393939"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6.998 11.372h9.64m3.86 0H23.5V7.924l-3.9-2.482L18.028.698H.5v10.674h2.63"></path>
                <circle cx="5.068" cy="11.371" r="1.931"></circle>
                <circle cx="18.568" cy="11.371" r="1.931"></circle>
              </g>
            </svg>
            Track orders easily
          </span>
          <span
            className="mt-4 d-flex align-items-center"
            alt="account check message"
          >
            <svg width="24px" height="24px" focusable="false" className="me-2">
              <path
                d="M19.942 11.07c-.459-3.702-3.61-6.57-7.436-6.57a7.5 7.5 0 0 0-6.878 4.512 5.243 5.243 0 0 0 .114 10.487v.001h13.526v-.002a4.24 4.24 0 0 0 .674-8.428z"
                fill="none"
                stroke="#393939"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M14.993 16.825V8.984h-1.164v4.87L9.25 8.825v7.805h1.161v-4.797l.042.045z"
                fill="#393939"
              ></path>
            </svg>
            Use one sign-in across our brands
          </span>
          <span className="my-4">
            <span className="text-danger">*</span>Required
          </span>

          <div className="form__controls mb-0">
            <label htmlFor="username" className="w-100">
              Email
            </label>
            <span>{username.username}</span>
          </div>
          <div className="form__controls mt-4">
            <label htmlFor="firstName">
              First Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="rounded-0"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form__controls mt-2">
            <label htmlFor="lastName">
              Last Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="rounded-0"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form__controls mt-2 position-relative">
            <label htmlFor="password">
              Create Password<span className="text-danger">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="toggle_password" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <div className="form__controls mt-2 d-flex align-items-center">
            <input
              type="checkbox"
              id="keepSignedIn"
              className="rounded-0 me-2"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
            />
            <label className="fw-normal mb-0" htmlFor="keepSignedIn">
              Keep me signed in
            </label>
          </div>
          <span className="tc-span mt-4" alt="account check message">
            By creating an account, you agree to our Privacy Policy and Terms &
            Conditions.
          </span>
          <div className="form__controls">
            <button disabled = {isValid()} className="button w-100 rounded-0 mt-4" type="submit" href="/">Create Account</button>
            
            
           
          </div>
        </form>
      </div>
    </div>
 );
};

export default Registration;
