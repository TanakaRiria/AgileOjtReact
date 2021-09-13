import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeApp from './Home';
import TopApp from './Top';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={TopApp} />
        <Route path='/home' component={HomeApp} />
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
