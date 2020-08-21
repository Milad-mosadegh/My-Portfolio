import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css'

import {
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './components/Home/home';
import Skill from './components/Skills/Skill';
import LandinPage from './components/landingPage/landinPage';

import Contact from './components/contact/contact';
import Certificate from './components/Certificate/Certificate';
import Projects from './components/Projects/Projects';



function App() {
  return (
    <div className="light-dark-bg">
      <Router>
        <Switch>
          <Route path="/" exact component={LandinPage} />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skill" component={Skill} />
          <Route path="/certificate" component={Certificate} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
