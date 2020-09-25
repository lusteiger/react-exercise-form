import React, { Component } from "react";
import "./myProfile.less";
import "bootstrap/dist/css/bootstrap.css";

class MyProfile extends Component {
  state = {
    name: "",
    gender: "Male",
    description: "",
    readable: "",
  };

  handleFieldChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleCheckedChange = (field, event) => {
    this.setState({
      [field]: event.target.checked,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div class="container">
        <h1>My Profile</h1>

        <form className="my-form" onSubmit={this.handleFormSubmit}>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="your name"
              value={this.state.name}
              onChange={(e) => this.handleFieldChange("name", e)}
            />
          </div>

          <div class="form-group">
            <label id="Gender">Gender</label>
            <select
              class="form-control"
              id="gender"
              onChange={(e) => this.handleFieldChange("gender", e)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div class="form-group">
            <label id="Description">Description</label>
            <textarea
              class="form-control"
              rows="3"
              id="description"
              placeholder="Description about yourself"
              value={this.state.description}
              onChange={(e) => this.handleFieldChange("description", e)}
            ></textarea>
          </div>

          <div class="checkbox">
            <label>
              <input
                type="checkbox"
                id="readable"
                checked={this.state.readable}
                onChange={(e) => this.handleCheckedChange("readable", e)}
              />
              &nbsp;&nbsp;I have read the terms of conduct
            </label>
          </div>
          <div className="Submit">
            <input
              type="submit"
              class="btn btn-primary"
              id="submit"
              value="Submit"
              disabled={
                !this.state.readable ||
                !this.state.name ||
                !this.state.gender ||
                !this.state.description
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default MyProfile;
