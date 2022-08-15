import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialnotes = [
    {
      _id: "62f694f34cc87bd9ead1ab31",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab31",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab31",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab31",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab31",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
    {
      _id: "62f694f34cc87bd9ead1ab31",
      user: "62f61cfdb7dc8cba9860b243",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2022-08-12T17:59:15.120Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(initialnotes);
  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
