import "./App.css";
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/Notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
