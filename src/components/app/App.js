import './App.css';
import React, { Component } from "react"
import NavBar from "../navbar/NavBar"
import Hero from "../hero/Hero"
import About from "../about/About"
import Share from "../share/Share"
import Offer from "../offer/Offer"
import Info from "../info/Info"
import CTA from "../cta/CTA"

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
        <Offer />
        <Info />
        <CTA />
      </div>
    );
  }
}


export default App;
