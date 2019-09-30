import React, { Component } from "react";
import axios from "axios";

export default class AddProject extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // const value =
    //   event.target.type === "checkbox"
    //     ? event.target.checked
    //     : event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // http://localhost:5555/api/projects
    axios
      .post("/api/projects", {
        title: this.state.title,
        description: this.state.description
      })
      .then(response => {
        this.setState({
          title: "",
          description: ""
        });
        // updates the parent's component's state, which causes new props to be passed to the <ProjectList/> component
        this.props.getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label htmlFor="description"> Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <button type="submit">Add a project</button>
      </form>
    );
  }
}
