import React from 'react';
import './style.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.number
    }
  }

  increament = () => {
    this.setState(
      {
        count: this.state.count + 1
      }
    );
    console.log("Count", this.state.count);
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <button onClick={this.increament}>Increment counter</button>
        <p>Counter value is {count}</p>
      </div>
    );
  }
}