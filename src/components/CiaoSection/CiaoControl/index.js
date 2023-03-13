import React, { Component } from "react";
import PropTypes from "prop-types";

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

CiaoControl.defaultProps = {
  sortType: "none",
  direction: false,
  sortFunc: () => {},
};

CiaoControl.propTypes = {
  sortType: PropTypes.string.isRequired,
  direction: PropTypes.bool.isRequired,
  sortFunc: PropTypes.func.isRequired,
};

export default CiaoControl;
