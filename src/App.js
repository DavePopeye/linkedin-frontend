import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Certifications from "./Components/Certifications/Certifications";

function App() {
  return (
    <>
      <Router>
        <Route path="/davide" exact component={() => <Certifications />} />
      </Router>
    </>
  );
}

export default App;
