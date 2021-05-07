import './App.css';
import React, { Component } from "react"
import Home from '../home/Home'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/FoodAvailability">

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
}


export default App;
