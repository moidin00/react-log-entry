import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import LogEntries from './features/log_entries' 
import Router from './config/router' 
import Navbar from './features/navbar'

class App extends Component {
 render() {
  return (
    <div className="App">
      
      <Navbar />
      <Router />
      
    </div>
  );
 }
}

export default App;

//after begining setup next to api/index.js
