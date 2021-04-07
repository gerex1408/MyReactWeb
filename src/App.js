import './App.css';
import React from 'react';
import WelcomePage from './Components/WelcomePage';
import {makeStyles} from '@material-ui/core/styles';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Studies from './Components/Studies';
import Skills from './Components/Skills';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));


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
          <Skills/>
        </Route>
        <Route exact path="/contact">
        <h1>This will be the Contact page</h1>
        </Route>
      </Switch>
    </Router>
    
  );
}
export default App;