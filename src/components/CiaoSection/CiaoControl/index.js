import React, { Component } from "react";

class CiaoControl extends Component {
  render() {
    const { sortType, direction, sortFunc } = this.props;
    return (
      <button onClick={sortFunc}>
        sort by {sortType} {direction ? "growth" : "less"}
      </button>
    );
  }
}

export default CiaoControl;
