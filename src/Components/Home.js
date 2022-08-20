import Notes from "./Notes";
import React from "react";

const Home = (props) => {
  return (
    <div>
      <Notes showAlert={props.showAlert} />
    </div>
  );
};

export default Home;
