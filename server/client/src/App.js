import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import TaskDetails from "./components/TaskDetails";
import Signup from "./components/Signup";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/:id" component={ProjectDetails} />
      <Route exact path="/tasks/:id" component={TaskDetails} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
}

export default App;
