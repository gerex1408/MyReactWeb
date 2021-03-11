import './App.css';
import React from 'react';
import WelcomePage from './WelcomePage';
import {makeStyles} from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/" component={WelcomePage}/>
    </Switch>
  );
}
export default App;