import React, { Component } from "react";
import { Router, Route, NavLink } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Home from "./components/views/home";
import About from "./components/views/about";
import Contact from "./components/views/contact";
import Photography from "./components/views/photography";

class Main extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/' component={Home}>
        <div>
          <h1>Simple SPA</h1>
          <nav className="menu">
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/photography">Photography</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/photography" component={Photography}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </Route>
      </Router>
    );
  }
}
 
export default Main;
