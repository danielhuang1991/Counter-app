import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onReduction
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //this attribute is internal attribute on React, not able to access so we set up id attribute whhich has exactly the same value//
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReduction={onReduction}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
