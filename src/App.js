import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/pages/Navbar";
import News from "./components/pages/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";

export default class App extends Component {
  name = "satyajit";
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}
