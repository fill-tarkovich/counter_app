/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import Button from "./Button";

class Main extends Component {
  state = {
    counter: 0,
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  plusfive = () => {
    this.setState({ counter: (this.state.counter += 5) });
  };

  minusfive = () => {
    if (this.state.counter > 4) {
      this.setState({ counter: (this.state.counter -= 5) });
    }
  };

  plusone = () => {
    this.setState({ counter: (this.state.counter += 1) });
  };

  minusone = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: (this.state.counter -= 1) });
    }
  };

  render() {
    let className = "circle";
    if (this.state.counter % 2) {
      className += " circle--odd";
    } else if (this.state.counter === 0) {
      className = "circle";
    } else {
      className += " circle--even";
    }
    return (
      <main>
        <div className={className}>{this.state.counter}</div>
        <div className="buttons">
          <Button click={this.plusone}>+1</Button>
          <Button click={this.plusfive}>+5</Button>
          <Button click={this.reset}>Reset</Button>
          <Button click={this.minusfive}>-5</Button>
          <Button click={this.minusone}>-1</Button>
        </div>
      </main>
    );
  }
}

export default Main;
