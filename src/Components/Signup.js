import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [crediantials, setcrediantials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (crediantials.password !== crediantials.cpassword) {
      alert("Password does not match");
    } else {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: crediantials.name,
            email: crediantials.email,
            password: crediantials.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.success) {
        //Save the auth token and  redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      } else {
        alert("Invalid crediantials");
      }
    }
  };
  const onChange = (e) => {
    setcrediantials({ ...crediantials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            value={crediantials.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={crediantials.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={crediantials.password}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            value={crediantials.cpassword}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
