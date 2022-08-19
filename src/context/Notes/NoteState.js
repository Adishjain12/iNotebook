import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = [];
  const [notes, setnotes] = useState(initialnotes);

  //Get all note
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNjFjZmRiN2RjOGNiYTk4NjBiMjQzIn0sImlhdCI6MTY2MDMyMTI4Nn0.O8BggddL-cqIJNTpfVJYvmjefIxvdy8GjsLtvMPEuss",
      },
    });
    const json = await response.json();
    console.log(json);
    setnotes(json);
  };
  //Add a note
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNjFjZmRiN2RjOGNiYTk4NjBiMjQzIn0sImlhdCI6MTY2MDMyMTI4Nn0.O8BggddL-cqIJNTpfVJYvmjefIxvdy8GjsLtvMPEuss",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    const note = {
      _id: "62f694f34cc87bd9ead1ab317",
      user: "62f61cfdb7dc8cba9860b243",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    };
    //setnotes(notes.concat(note));
    getNotes();
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNjFjZmRiN2RjOGNiYTk4NjBiMjQzIn0sImlhdCI6MTY2MDMyMTI4Nn0.O8BggddL-cqIJNTpfVJYvmjefIxvdy8GjsLtvMPEuss",
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmNjFjZmRiN2RjOGNiYTk4NjBiMjQzIn0sImlhdCI6MTY2MDMyMTI4Nn0.O8BggddL-cqIJNTpfVJYvmjefIxvdy8GjsLtvMPEuss",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = await response.json();
    //console.log(json);

    /*let newNotes=JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);*/
    const newNotes = notes.map((note) => {
      if (note._id === id) {
        return { ...note, title, description, tag };
      }
      return note;
    });
    setnotes((prev) => newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
