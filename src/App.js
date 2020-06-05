import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/home';
import Skill from './components/Skills/Skill';
import LandinPage from './components/landingPage/landinPage';

import Contact from './components/contact/contact';
import Certificate from './components/Certificate/Certificate';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="light-dark-bg">
      <Router>
        {/* <MyNavbar /> */}
        <Switch>
          <Route path="/" exact component={LandinPage} />
          <Route path="/home" component={Home} />
          <Route path="/skill" component={Skill} />
          <Route path="/certificate" component={Certificate} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
