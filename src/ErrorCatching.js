import React, { Component } from "react";

class ErrorCatching extends Component {
  constructor(props) {
    super(props);
    this.state = { errorOccurred: false };
  }

  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true });
  }

  render() {
    return this.state.errorOccurred ? (
      <h1>There was a problem with your request</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorCatching;
