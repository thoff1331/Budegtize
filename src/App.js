import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      userInput: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleApi = (e, num) => {
    if (num > 255 || num < 0) {
      alert("Please Enter a number between 1 & 255");
    } else {
      axios
        .get(`/romannumeral/`, {
          params: {
            integer: this.state.userInput,
          },
        })
        .then((response) => {
          this.setState({
            number: response.data,
          });
        });
    }
  };
  render() {
    return (
      <div className="app-container">
        <h1>Enter a Number to convert it to a Roman Numeral</h1>
        <div className="user-elements">
          <input
            placeholder="Enter a number"
            type="number"
            onChange={this.handleChange}
            name="userInput"
          />
          <button
            id="convert-button"
            onClick={(e) => this.handleApi(e, this.state.userInput)}
          >
            Convert
          </button>
        </div>
        <h1 className="converted-number">
          Your Number as A Roman Numeral is :{this.state.number}
        </h1>
      </div>
    );
  }
}

export default App;
