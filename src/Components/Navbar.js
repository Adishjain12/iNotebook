import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  //React.useEffect(() => {
    //console.log(location.pathname);
  //}, [location]);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link style={{ color: "white" }} className="navbar-brand" to="/">
          Notify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{ color: "white" }}
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: "white" }}
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("auth-token") ? (
            <form className="d-flex">
              <Link
                to="/login"
                className="btn btn-primary btn-lg active mx-2"
                role="button"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary btn-lg active"
                role="button"
              >
                Sign up
              </Link>
            </form>
          ) : (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
