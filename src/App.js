import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

// Components
import GameOfLife from './components/gameOfLife'
import About from './components/gameOfLife'
import Nav from './components/nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={GameOfLife} />
      <Route path ="/about" component={About} />
    </div>
  );
}

export default App;
