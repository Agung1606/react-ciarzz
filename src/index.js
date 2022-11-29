// importing React Hooks {useState}
import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import { Header } from './Header';
import MainContent from './MainContent';
import { Footer } from './Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       counter: 0
//     }
//   }

//   handleOnClick = () => {
//     this.setState((prevState) => {
//       return {counter: prevState.counter + 1}
//     });
//   }

//   handleOnChange = (e) => {
//     const value = e.target.value;
//     this.setState({
//       text: value
//     });
//   }

//   resetCounter = () => {
//     this.setState({counter: 0});
//   }

//   decreaseCounter = () => {
//     this.setState((prevState) => {
//       return {counter: prevState.counter - 1}
//     });
//   }

//   removeText = () => {
//     this.setState({text: ""});
//   }

//   render() {
//     const {text, counter} = this.state;
//     return(
//       <div>
//         <input type="text" placeholder="type text" onChange={this.handleOnChange} value={text} />
//         <p>You typed: {text}</p>
//         <button onClick={this.removeText}>Remove All texts</button>
//         <hr />
//         <div>
//           <button onClick={this.handleOnClick}>Increament number</button>
//           <p>Counter number: {counter}</p>
//           <button onClick={this.resetCounter}>Reset counter</button>
//           <button onClick={this.decreaseCounter}>Decrease number</button>
//         </div>
//       </div>
//     );
//   }
// }

/* Hooks = useState */
// const App = () => {
//   const [state, setState] = useState({
//     counter: 0,
//     text: ""
//   });

//   const increaseValue = () => {
//     setState((prevState) => ({
//       ...prevState,
//       counter: prevState.counter + 1
//     }));
//   }

//   const decreaseValue = () => {
//     setState((prevState) => ({
//       ...prevState,
//       counter: prevState.counter - 1
//     }));
//   }

//   const handleOnChange = (e) => {
//     setState((prevState) => ({
//       ...prevState,
//       text: e.target.value
//     }));
//   }

//   return(
//     <div>
//       <button onClick={increaseValue}>Increase Value</button>
//       <button onClick={decreaseValue}>Decrease Value</button>
//       <p>Counter value: '{state.counter}';</p>
//       <hr />
//       Name{" "}
//       <input type="text" placeholder="type text" value={state.text} onChange={handleOnChange}/>
//       <p>You typed: {state.text}</p>
//     </div>
//   );
// }
/* Hooks = useState */


// ========= Lifecycle Methods ================
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // this method is called only when component is updated in the DOM
  componentDidUpdate = (prevProps) => {
    if(prevProps.counter != this.state.counter) {
      alert("Number of clicks: " + this.state.counter);
    }
  }

  updateCounter = () => {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    });
  }

  resetCounter = () => {
    this.setState({counter: 0});
  }

  render() {
    const {counter} = this.state;
    return(
      <div>
        <h1>Hello, React!</h1>
        <main>
          <p>You have been clicked the button for '{counter}' time(s)</p>
          <button onClick={this.updateCounter}>Click me</button>
          <button onClick={this.resetCounter}>Reset</button>
        </main>
      </div>
    );
  }
}
// ========= Lifecycle Methods ================

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     console.log("useEffect executed");
//   }, [counter]);

//   return (
//     <div>
//       <div>
//         <p>Counter value is: {counter} </p>
//         <button onClick={() => setCounter(counter + 1)}>Increment</button>
//         <br />
//         <br />
//         Name{" "}
//         <input
//           type="text"
//           name="username"
//           value={username}
//           placeholder="Enter your name"
//           autoComplete="off"
//           onChange={event => setUsername(event.target.value)}
//         />
//         <br />
//         {username}
//       </div>
//     </div>
//   );
// };

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
