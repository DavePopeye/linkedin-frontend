import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Certifications from "./Certifications/Certifications";
import NavBar from './Components/NavBar/NavBar';
import ProfilePage from './Components/ProfilePage/ProfilePage/ProfilePage';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Route path="/davide" exact component={() => <Certifications />} />
        <Route path="/:id" exact component={ProfilePage} />
      </Router>
    </>
  );
}

export default App;
