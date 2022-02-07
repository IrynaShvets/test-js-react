import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Value from "./Value/Value";
import "./Counter.css";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    // описуються пропи
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> змінили =>
         на це - <Value valueCounter={value} />*/}
        <Value valueCounter={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
