import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Articles from './components/Articles.js';

class App extends Component {
  render(){
    return (
      <div>
        <Router>

          <Navbar/>

          <br/>
          <br/>

          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/articles' component={Articles} />

        </Router>
      </div>
    );
  }
  
}

export default App;
