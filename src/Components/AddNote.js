import React, { useContext, useState } from "react";
import noteContext from "../context/Notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    props.showAlert("Note added successfully", "success");
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="container"
      style={{ border: "4px solid black", borderRadius: "10px" }}
    >
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
              value={note.title}
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
              value={note.description}
            />
          </div>

          <div className="form-group container my-3">
            <label htmlFor="description">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Enter Tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>

          <div className="container my-3">
            <button
              disabled={note.title.length < 3 || note.description.length < 5}
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
