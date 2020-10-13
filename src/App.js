import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import HomePage from './components/pages/HomePage'
import Charging from './components/Charging'
import ChargingFast from './components/ChargingFast'
import ChargingStarted from './components/ChargingStarted'
import ChargingFastStarted from './components/ChargingFastStarted'
import SignIn from './components/SignIn'
import MapPage from './components/MapPage'
import PricingPage from './components/PricingPage'
function App() {
  return (
 <>
 <Router>
     <Navigation/>
     <Switch>
       <Route path="/" exact component = {HomePage} />
       <Route path="/Charging" exact component ={Charging} />
       <Route path="/ChargingFast" exact component ={ChargingFast} />
       <Route path="/Charging/Started" exact component ={ChargingStarted} />
       <Route path ="/ChargingFast/Started" exact component ={ChargingFastStarted} />
       <Route path ="/SignIn" exact component ={SignIn}/>
       <Route path ="/Map" exact component ={MapPage} />
       <Route path ="/Pricing" exact component ={PricingPage} />
     </Switch>
     </Router>)
   </> 
  );
}

export default App;
