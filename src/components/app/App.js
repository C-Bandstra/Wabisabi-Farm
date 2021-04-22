import './App.css';
import React, { Component } from "react"
import NavBar from "../navbar/NavBar"
import Hero from "../hero/Hero"
import About from "../about/About"
import Share from "../share/Share"

class App extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div className="App">
        <Hero />
        <About />
        <Share />
      </div>
    );
  }
}


export default App;
