import "./App.css";
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/Notes/NoteState";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert messag e="Helo" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
