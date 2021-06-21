import './App.css';
import React from "react"
import Home from '../../views/Home'
import { Switch, Route } from "react-router-dom";
import FAQs from '../../views/FAQs'
// import GrowingPractices from '../../views/GrowingPractices'
import ProduceAvailability from '../../views/ProduceAvailability'
import ScrollToTop from '../ScrollToTop'
import BurgerNav from '../burgerNav/BurgerNav';
const App = () => {

  return (
    <div className="App">
      <ScrollToTop />
      <Switch>

        <Route path="/Availability">
          <ProduceAvailability />
          <BurgerNav />
        </Route>

        {/* <Route path="/GrowingPractices">
          <GrowingPractices />
          <BurgerNav />
        </Route> */}

        <Route path="/FAQs">
          <FAQs />
          <BurgerNav />
        </Route>

        <Route path="/">
          <Home />
          <BurgerNav />
        </Route>

      </Switch>
    </div>
  );
}


export default App;
