import React, { Component } from "react";
import Logos from "./logos/Logos";
import Container from "./container/Container";
import Footer from "./footer/Footer";
import "./index.css"; 

class App extends Component {
  render() {
    return (
      <div className="app">
        <Logos />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
