import React, { Component } from "react";
import "../container/container.css"; 
import WelcomeImage from "../assets/download.jfif"; 

class Container extends Component {
  render() {
    return (
      <main className="main-content">
        <h1>Welcome To</h1>
        <img src={WelcomeImage} alt="Welcome" className="welcome-image" />
      </main>
    );
  }
}

export default Container;
