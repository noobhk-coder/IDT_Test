import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Name from './components/Name';
import Ingredient from './components/Ingredient';
import NameId from './components/NameId';
import logo from './img/chef.jpg';
import Main from './components/Main';
import Error from './components/Error';
import Category from './components/Category';
import Favorite from './components/Favorite';
import firebase from './firebase';


function App() {

  return (
    <div>
      <Router>
        <div>
          <header>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
        </div>

        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/name/:search' exact component={Name} />
          <Route path='/ingredient/:search' exact component={Ingredient} />
          <Route path='/category/:search' exact component={Category} />
          <Route path='/namer/:id' exact component={NameId} />
          <Route path='/favorite' exact component={Favorite} />
          <Route path='*' exact component={Error} status={404} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
