import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Adish",
    class: "5",
  };
  const [state, setstate] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setstate({
        name: "Rishabh",
        class: "10",
      });
    }, 2000);
  };
  return (
    <NoteContext.Provider value={{ state: state, update: update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
