import React, { Component } from "react";
import "./AddGame.css";

class AddGame extends Component {
  state = {
    img: "",
    title: "",
    description: "",
    price: ""
  };

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleGameSubmit = e => {
    e.preventDefault();
    this.props.addGame(this.state);
  };

  render() {
    return (
      <div className="popup">
        <div className="btn_wrapper">
          <button className="round_btn" onClick={this.props.closeHandler}>
            <span>x</span>
          </button>
        </div>

        <form onSubmit={this.handleGameSubmit}>
          <input
            className="form_input"
            placeholder="Image"
            type="text"
            name="img"
            value={this.state.url}
            onChange={this.handleFormChange}
          />
          <input
            className="form_input"
            placeholder="Title"
            type="text"
            name="title"
            value={this.state.gameName}
            onChange={this.handleFormChange}
          />
          <input
            className="form_input"
            placeholder="Description"
            type="textarea"
            name="description"
            value={this.state.description}
            onChange={this.handleFormChange}
          />
          <input
            className="form_input"
            placeholder="Price"
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleFormChange}
          />
          <button className="form_submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddGame;
