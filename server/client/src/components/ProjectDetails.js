import React, { Component } from "react";
import axios from "axios";

export default class ProjectDetails extends Component {
  state = {
    project: null,
    showForm: false,
    title: "",
    description: "",
    error: null
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/projects/${id}`)
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description
        });
      })
      .catch(err => {
        console.log(err.response);
        // handle err.response depending on err.response.status
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };

  toggleEditForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/api/projects/${id}`, {
        title: this.state.title,
        description: this.state.description
      })
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          showForm: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteProject = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/projects/${id}`).then(() => {
      console.log(this.props.history);
      this.props.history.push("/projects");
    });
  };

  render() {
    if (this.state.error) return <div>{this.state.error}</div>;
    else if (!this.state.project) return <></>;
    // const { title, description } = this.state.project;

    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <p>{this.state.project.description}</p>
        <button onClick={this.toggleEditForm}>Show Edit form</button>
        <button onClick={this.deleteProject}>Delete project</button>
        {/* form that is displayed when the edit button is clicked */}
        {this.state.showForm && (
          <div>
            <h2>Edit Form</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <button type="submit">Edit a project</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
