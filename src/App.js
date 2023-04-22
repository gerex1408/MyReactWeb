import "./App.css";
import React from "react";
import WelcomePage from "./Components/WelcomePage";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Studies from "./Components/Studies";
import JobExperience from "./Components/JobExperience";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/studies">
          <Studies />
        </Route>
        <Route exact path="/jobexperience">
          <JobExperience />
        </Route>
        <Route exact path="/404">
          <PageNotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
export default App;
