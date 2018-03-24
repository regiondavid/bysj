import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import Login from './containers/Login.js';
import Index from './containers/Index.js';

import './App.css';


axios.defaults.withCredentials = true;


const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Index} />
    </Switch>
  </Router>
)

export default App;
