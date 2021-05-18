import './App.css';
import React from "react"
import Home from '../home/Home'
import { Switch, Route } from "react-router-dom";
import Availability from '../availability/Availability'
import FAQ from '../faq/FAQ'
import CTA from "../cta/CTA"
import NavBar from "../navbar/NavBar"
import Practices from "../practices/Practices"

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path="/Availability">
          <Availability />
        </Route>
        <Route path="/FAQS">
          <NavBar type="nav-2" title={<p className="title">FAQ</p>}/>
          <FAQ />
          <CTA />
        </Route>
        <Route path="/Join">
          
        </Route>
        <Route path="/GrowingPractices">
          <Practices />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
