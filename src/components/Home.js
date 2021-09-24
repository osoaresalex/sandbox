import React, { Component } from "react";

import Header from "./Header";
import HeroesList from "./HeroesList.js";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          {ALPHABET.map(key => (
            <HeroesList key={key} page={key} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
