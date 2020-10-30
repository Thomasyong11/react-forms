import React, { Component } from "react";

class Controlled extends Component {
  state = {
    name: "",
    lastname: "",
  };
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  oshandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.oshandler}>
          <div className="form_element">
            <label>Enter Name:</label>
            <input
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>

          <div className="form_element">
            <label>Enter Lastname:</label>
            <input
              type="text"
              onChange={this.handleLastNameChange}
              value={this.state.lastname}
            />
          </div>
        </form>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Controlled;
