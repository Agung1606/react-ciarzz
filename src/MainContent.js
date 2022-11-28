import React from 'react';
import './style.css';


export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    const {counter} = this.state;
    return (
      <div>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer if I know React</li>
        </ol>
        <p>Counter {counter}</p>
        <button onClick={this.updateCounter}>Increment counter</button>
      </div>
    );
  }
}
