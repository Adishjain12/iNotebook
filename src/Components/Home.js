import Notes from "./Notes";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="container mx-3">
          <h1>Add Note</h1>
        </div>

        <div className="container my-3">
          <form>
            <div className="form-group container my-3">
              <label htmlFor="exampleInputEmail1 ">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group container my-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            
            <div className="container my-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Notes />
    </div>
  );
};

export default Home;
