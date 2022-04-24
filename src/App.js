import './App.css';
import React from 'react';
import WelcomePage from './Components/WelcomePage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Studies from './Components/Studies';
import Skills from './Components/Skills';
import JobExperience from './Components/JobExperience';



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
          <JobExperience/>
        </Route>
        <Route exact path="/skills">
          <Skills/>
        </Route>
        <Route exact path="/projects">
        <h1>This will be the Projects page</h1>
        </Route>
      </Switch>
    </Router>
    
  );
}
export default App;