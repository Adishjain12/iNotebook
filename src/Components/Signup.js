import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
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
      props.showAlert("Check the password", "danger");
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
        props.showAlert("Account created successfully", "success");
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      } else {
        props.showAlert("Invalid crediantials", "danger");
      }
    }
  };
  const onChange = (e) => {
    setcrediantials({ ...crediantials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section className="vh-50" style={{ backgroundColor: "#eee" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mb-2">
                      <p className="text-center h1 fw-bold mb-2 mx-1">
                        Sign up
                      </p>

                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
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
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
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
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
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
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
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
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="abc.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
