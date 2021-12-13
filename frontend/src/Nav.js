import React, { Fragment, useEffect, useState } from 'react'
import './PersonaMaterial.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App';
import Integrantes from './Integrantes';

function Nav(){
  function Navbar() {
    return (
      <nav className="topnav">
        <Link to="/App">Personas</Link>
        <Link to="/Integrantes">Integrantes</Link>
        {/* <Link to="/personas2">Persona 2</Link> */}
        
      </nav>
    )
  }
  return (
    <Router>
       <Navbar />
    <Switch>
      <Route  path="/App" component={App} />
      <Route  path="/Integrantes" component={Integrantes} />
    </Switch>
  </Router>
  );
}

export default Nav