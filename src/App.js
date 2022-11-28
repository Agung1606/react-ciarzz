import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.setState(
      {
        count: 0
      }
    );
  }

  updateCount = () => {
    this.setState(
      {
        count: this.state.count + 1
      }
    )
  }

  render() {
    return (
      <div>
        <h1>You MUST Click the Button</h1>
        <p>The power of impulse compels you to <b>click that button</b></p>
        <p>I've been clicked {this.state.count} times!</p>
        <button onClick={this.updateCount}>Click me</button>
      </div>
    );
  }
}