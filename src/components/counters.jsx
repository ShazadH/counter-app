import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
