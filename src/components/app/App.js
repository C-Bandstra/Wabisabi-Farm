import './App.css';
import React from "react"
import Home from '../../views/Home'
import { Switch, Route } from "react-router-dom";
import FAQs from '../../views/FAQs'
import GrowingPractices from '../../views/GrowingPractices'
import ProduceAvailability from '../../views/ProduceAvailability'
import ScrollToTop from '../ScrollToTop'
const App = () => {

  return (
    <div className="App">
      <ScrollToTop />
      <Switch>

        <Route path="/Availability">
          <ProduceAvailability />
        </Route>

        <Route path="/GrowingPractices">
          <GrowingPractices />
        </Route>

        <Route path="/FAQs">
          <FAQs />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  );
}


export default App;
