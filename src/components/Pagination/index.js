import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { currentPage, prevFunc, nextFunc } = props;
  return (
    <div>
      <button onClick={prevFunc}>&lt; prev</button>
      <span> {currentPage} </span>
      <button onClick={nextFunc}>next &gt;</button>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
