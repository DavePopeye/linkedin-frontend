import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Certifications from "./Certifications/Certifications";
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Route path="/davide" exact component={() => <Certifications />} />
      </Router>
    </>
  );
}

export default App;
