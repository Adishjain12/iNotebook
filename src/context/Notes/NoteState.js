import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialnotes = [
    {
      _id: "62f694f34cc87bd9ead1ab311",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab312",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab313",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab314",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab315",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab316",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(initialnotes);

  //Add a note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "62f694f34cc87bd9ead1ab317",
      user: "62f61cfdb7dc8cba9860b243",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = () => {};

  //Edit a Note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
