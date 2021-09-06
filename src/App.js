import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeApp from './Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/login' component={Login} />
        <Route path='/todo' component={TodoList} />
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
