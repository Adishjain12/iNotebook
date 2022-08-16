import React, { useContext, useState } from "react";
import noteContext from "../context/Notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="container mx-3">
        <h1>Add Note</h1>
      </div>

      <div className="container my-3">
        <form>
          <div className="form-group container my-3">
            <label htmlFor="title ">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              onChange={onChange}
            />
          </div>
          <div className="form-group container my-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter Description"
              onChange={onChange}
            />
          </div>

          <div className="container my-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
