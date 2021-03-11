import './App.css';
import React from 'react';
import WelcomePage from './WelcomePage';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WelcomePage/>
    </div>
  );
}
export default App;