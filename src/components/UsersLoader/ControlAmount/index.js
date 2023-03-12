import React from "react";
import PropTypes from "prop-types";

const ControlAmount = (props) => {
  const { cardsAmount, amount, setResults } = props;
  const handleRadio = ({ target: { value } }) => {
    setResults(Number(value));
  };
  const mapRadio = (checkBoxValue, index) => {
    return (
      <label key={index} style={{ padding: "5px" }}>
        <input
          type="radio"
          name="results"
          value={checkBoxValue}
          checked={cardsAmount === checkBoxValue}
          onChange={handleRadio}
        />
        {checkBoxValue}
      </label>
    );
  };
  return <div>{amount.map(mapRadio)}</div>;
};

ControlAmount.propTypes = {};

export default ControlAmount;
