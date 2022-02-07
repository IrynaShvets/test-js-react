import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* class Counter extends Component {
 

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root")); */

/* class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && children}
      </div>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById("root"));
 */

/* const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class Toggle extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод, який будемо передавати в Button для виклику під час кліку
  updateMessage = (evt) => {
    console.log(evt); // Доступний об'єкт події
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById("root")); */
