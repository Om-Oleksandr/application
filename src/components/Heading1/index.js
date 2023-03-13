import React, { Component } from "react";
import PropTypes from "prop-types";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  render() {
    const { classStyle, title, content } = this.props;
    return React.createElement(
      "h2",
      { className: classStyle, title: title },
      content
    );
  }
}

Heading.propTypes = {
  classStyle: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Heading;
