import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/pages/Navbar";
import News from "./components/pages/News";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/News-Sparrow" element={<News />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}
