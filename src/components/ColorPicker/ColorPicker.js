import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({
      activeOptionIdx: index,
    });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push(["ColorPicker__option--active"]);
    }
    return optionClasses.join(" ");
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    /* const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { label } = options[activeOptionIdx]; // це деструктуризація і воно теж саме що і нижче
      
    const { label } = this.props.options[this.state.activeOptionIdx]; // без деструктуризації
    */

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            /* const optionClasses = ["ColorPicker__option"];

            if (index === this.state.activeOptionIdx) {
              optionClasses.push(["ColorPicker__option--active"]);
            } */
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;

// на активній кнопці додається бордер по індексу

/* class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>

        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className="ColorPicker__option"
              style={{
                backgroundColor: color,
                 border:
                  index === this.state.activeOptionIdx
                    ? "2px solid #000"
                    : "none", 
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
 */
