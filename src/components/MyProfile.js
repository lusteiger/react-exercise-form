import React, { Component } from "react";
import "./myProfile.less";
import "bootstrap/dist/css/bootstrap.css";

class MyProfile extends Component {
  state = {
    name: "",
    price: "",
    unit: "",
    img: "",
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
              placeholder="名称"
              value={this.state.name}
              onChange={(e) => this.handleFieldChange("name", e)}
            />
          </div>


          
          <div class="form-group">
            <label htmlFor="price">价格</label>
            <input
              type="text"
              class="form-control"
              id="price"
              placeholder="价格"
              value={this.state.price}
              onChange={(e) => this.handleFieldChange("price", e)}
            />
          </div>

          <div class="form-group">
            <label htmlFor="unit">单位</label>
            <input
              type="text"
              class="form-control"
              id="unit"
              placeholder="单位"
              value={this.state.unit}
              onChange={(e) => this.handleFieldChange("unit", e)}
            />
          </div>
          

          <div class="form-group">
            <label htmlFor="img">图片</label>
            <input
              type="text"
              class="form-control"
              id="img"
              placeholder="URL"
              value={this.state.img}
              onChange={(e) => this.handleFieldChange("img", e)}
            />
          </div>

          
          <div className="提交">
            <input
              type="submit"
              class="btn btn-primary"
              id="submit"
              value="Submit"
              disabled={
                !this.state.price ||
                !this.state.name ||
                !this.state.img ||
                !this.state.unit
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default MyProfile;
