import logo from './logo.svg';
import './App.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Skills from './component/Skills';
import WorkedAt from './component/WorkedAt';
import Projects from './component/Projects';
import VideoResume from './component/VideoResume';
import badri from './images/Badri.jpg';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="web-content">
    <header>
  
    <div>
<div >
  <div className="row">
    <div className="col-sm-2">
    <div className="my-photo">
  <img src={badri} />
    </div>
    </div>
    <div className="col-sm-5">
      <div className="header-2">
    <div className="row">
    <div className="col-sm-2">
    Name
    </div>
    <div className="col-sm-10">
    Veerabhadrudu(Badri) Chorapall
    </div>
    
  </div>
  <div className="row">
    <div className="col-sm-2">
    Role
    </div>
    <div className="col-sm-10">
    Senior Lead Full Stack Engineer 
    </div>
    </div>
  </div>
 
  
    </div>
    <div className="col-sm-5">
    <div className="header-2">
    <div className="row">
    <div className="col-sm-3">
    Qualification
    </div>
    <div className="col-sm-9">
    Bachelor of Technology(B.Tech) 
    </div>
    </div>
    <div className="row">
    <div className="col-sm-3">
    Links
    </div>
    <div className="col-sm-9">
    
<ul id="menu">
  <li>Linkedin</li>
  <li>Hackerearth</li>
  
</ul>
    </div>
    </div>
  </div>
      </div>
   
  </div>
</div>
      </div>
</header>

<section>
  
  <nav>
  <ul>
              
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/workedat">Worked At</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">POC's</Link>
              </li>
              <li>
                <Link to="/resume">VideoResume</Link>
              </li>
            </ul>
  </nav>
  
  <article>

  <Switch>
    <Route exact path='/resume' component={VideoResume}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/skills' component={Skills}></Route>
    <Route exact path='/workedat' component={WorkedAt}></Route>
    <Route exact path='/projects' component={Projects}></Route>
     
    </Switch> 
</article>
</section>

   
     </div>
     
   </div>
</Router>

  );
}

export default App;
