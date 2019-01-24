import React, { Component } from "react";
import "./AddGame.css";

class AddGame extends Component {
  state = {
    image: "",
    title: "",
    description: "",
    genre: "",
    price: ""
  };

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {

  }

  handleGameSubmit = async e => {
    e.preventDefault()

    const response = await fetch('/game', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: this.state.image,
      title: this.state.title,
      price: this.state.price,
      details: this.state.description,
      genre: this.state.genre,
      price: this.state.price
      })
    }).then(() => (
      this.props.addGame(this.state)
    )
  )
  }

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
            name="image"
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
            placeholder="Genre"
            type="text"
            name="genre"
            value={this.state.genre}
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
