import React, { Component } from "react";
import "./form.style.css";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.createNewUser(
      this.state.name,
      this.state.email,
      this.state.phone
    );
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };
  render() {
    return (
      <form className="form-container">
        <input
          className="input-form"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
          placeholder="name"
        />
        <input
          className="input-form"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
          placeholder="email"
        />
        <input
          className="input-form"
          value={this.state.phone}
          name="phone"
          onChange={this.handleChange}
          placeholder="phone"
        />
        <button type="button" onClick={this.handleSubmit} className="btn-form">
          Add new user
        </button>
      </form>
    );
  }
}
