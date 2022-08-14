import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="container mx-3">
          <h1>Add Note</h1>
        </div>

        <div className="container my-3">
          <form>
            <div class="form-group container my-3">
              <label for="exampleInputEmail1 ">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group container my-3">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-check container my-3 mx-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div className="container my-3">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}