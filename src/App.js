import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: "",
      apiInput: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleApi = (e, num) => {
    if (this.state.apiInput > 255) {
      alert("Please Enter a number between 1 & 255");
    } else {
      axios
        .get("/api/num", {
          params: {
            integer: this.state.apiInput,
          },
        })
        .then((response) => {
          this.setState({
            api: response.data,
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
            name="apiInput"
          />
          <button
            id="convert-button"
            onClick={(e) => this.handleApi(e, this.state.apiInput)}
          >
            Convert
          </button>
        </div>
        <h1 className="converted-number">
          {" "}
          Your Number as A Roman Numeral is :{this.state.api}
        </h1>
      </div>
    );
  }
}

export default App;
