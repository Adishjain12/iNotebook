import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [crediantials, setcrediantials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: crediantials.email,
        password: crediantials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the auth token and  redirect
      localStorage.setItem("auth-token", json.authToken);
      props.showAlert("Logged in successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid crediantials", "danger");
    }
  };
  const onChange = (e) => {
    setcrediantials({ ...crediantials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section className="vh-80">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="abc.png"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    value={crediantials.email}
                    onChange={onChange}
                    className="form-control form-control-lg"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={crediantials.password}
                    onChange={onChange}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2 container">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
