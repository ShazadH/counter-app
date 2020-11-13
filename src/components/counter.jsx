import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };

  style = {
    fontSize: 50,
    fontWeight: "bold",
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
