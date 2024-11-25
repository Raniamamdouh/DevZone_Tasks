import React, { Component } from "react";
import "../logos/logos.css";
import logo from "../assets/download.png" ;
class Logos extends Component {
  render() {
    return (
      <header className="header" >
        <div className="logo">
            <img className="pic"
              src={logo}
              alt="logo" />
        </div>
        <nav className="nav">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </nav>
      </header>
    );
  }
}

export default Logos;
