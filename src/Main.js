import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 10,
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  plusfive = () => {
    this.setState({ counter: (this.state.counter += 5) });
  };

  minusfive = () => {
    this.setState({ counter: (this.state.counter -= 5) });
  };

  plusone = () => {
    this.setState({ counter: (this.state.counter += 1) });
  };

  minusone = () => {
    this.setState({ counter: (this.state.counter -= 1) });
  };

  render() {
    return (
      <main>
        <div className="circle">{this.state.counter}</div>
        <div className="buttons">
          <button onClick={this.plusone}>+1</button>
          <button onClick={this.plusfive}>+5</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.minusone}>-1</button>
          <button onClick={this.minusfive}>-5</button>
        </div>
      </main>
    );
  }
}

export default Main;
