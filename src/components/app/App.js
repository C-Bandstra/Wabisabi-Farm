import './App.css';
import React from "react"
import Home from '../home/Home'
import { Switch, Route } from "react-router-dom";
import Availability from '../availability/Availability'
import FAQ from '../faq/FAQ'
import CTA from "../cta/CTA"
import FooterNav from "../footerNav/FooterNav"
import Footer from "../footer/Footer"
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
          <CTA type="water" image="/assets/water.png" header="GROWING PRACTICES" text="Learn more about how we grow our vegetables and what we put into the soil."/>
          <FooterNav />
          <Footer />
        </Route>
        <Route path="/Join">
          
        </Route>
        <Route path="/GrowingPractices">
          <NavBar type="nav-2" title={<p className="title practice-title">Growing Practices</p>}/>
          <Practices />
          <CTA type="plant" image="/assets/plant.png" header="FAQ's" text="Have questions about how the food share works, or what we feed our plants?"/>
          <FooterNav />
          <Footer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
