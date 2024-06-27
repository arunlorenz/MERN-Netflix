import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import WatchPage from './pages/WatchPage';
import SignUpPage from './pages/SignUpPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/watch" exact component={WatchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
