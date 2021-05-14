import './App.css';
import React from "react"
import Home from '../home/Home'
import { Switch, Route } from "react-router-dom";
import Availability from '../availability/Availability'
import FAQ from '../faq/FAQ'

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path="/Availability">
          <Availability />
        </Route>
        <Route path="/FAQS">
          <FAQ />
        </Route>
        <Route path="/Join">
          
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
