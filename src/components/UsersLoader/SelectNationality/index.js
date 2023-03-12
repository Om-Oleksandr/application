import React from "react";
import PropTypes from "prop-types";

const SelectNationality = (props) => {
  const { selectedNationality, nationalities, setNationality } = props;
  const selectNationality = ({ target: { value } }) => setNationality(value);
  const mapNationalities = (nationality, index) => {
    return (
      <option
        key={index}
        value={nationality}
      >
        {nationality}
      </option>
    );
  };
  return (
    <>
      <label htmlFor="nationality">Choose nationality</label>
      <select
        id="nationality"
        name="nationalities"
        onChange={selectNationality}
        value={selectedNationality}
      >
        {nationalities.map(mapNationalities)}
      </select>
    </>
  );
};

SelectNationality.propTypes = {};

export default SelectNationality;
