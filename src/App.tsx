import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crossword from "./Crossword";
import ListDates from "./ListDates";
import "./App.css";

function App() {
  // return ;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListDates />} />
          <Route path="/:yyyy-:mm-:dd" element={<Crossword />} />
          {/* TODO: 404 page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
