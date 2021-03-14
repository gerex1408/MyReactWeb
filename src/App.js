import './App.css';
import React from 'react';
import WelcomePage from './WelcomePage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Studies from './Studies';

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
        <Route exact path="/studies">
          <Studies/>
        </Route>
        <Route exact path="/jobexperience">
          <h1>This will be the Job Experience page</h1>
        </Route>
        <Route exact path="/skills">
          <h1>This will be the Skills page</h1>
        </Route>
        <Route exact path="/contact">
        <h1>This will be the Contact page</h1>
        </Route>
      </Switch>
    </Router>
    
  );
}
export default App;