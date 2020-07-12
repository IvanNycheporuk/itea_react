import React from 'react';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import List from './List';
import About from './About';
import Contacts from './Contacts';
import ItemPage from './ItemPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/list" component={ List }/>
        <Route exact path="/about" component={ About }/>
        <Route exact path="/contacts" component={ Contacts }/>
        <Route path="/list/:id" component={ ItemPage }/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
