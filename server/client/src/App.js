import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import TaskDetails from "./components/TaskDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/tasks/:id" component={TaskDetails} />
        <Route
          exact
          path="/signup"
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
