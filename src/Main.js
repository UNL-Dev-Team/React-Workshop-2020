import React, { Component } from "react";
import {
  Router,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

 
class Main extends Component {
    render() {
      return (
        <>
        <HashRouter>
          <div>
            <h1>Jimmy's Website</h1>
            <ul className="header">
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/generalinfo">General Info</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/home" component={Home}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/generalinfo" component={GeneralInfo}/>
          </div>
          </div>
        </HashRouter>
        </>
      );
    }
  }
 
export default Main;
