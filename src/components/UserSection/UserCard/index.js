import React from "react";
import PropTypes from "prop-types";
import styles from "./UserCard.module.css";

const UserCard = (props) => {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;
  const inlineStyles = { color: isSelected ? "teal" : "orange" };
  const handleSelector = () => userSelector(id);
  return (
    <article
      className={styles.container}
      style={inlineStyles}
      onClick={handleSelector}
    >
      <h3 className={styles.heading}>
        <em>{id}) </em>
        {firstName} {lastName}
      </h3>
    </article>
  );
};

UserCard.defaultProps = {
  user: {
    id: 0,
    firstName: "no name",
    lastName: "no name",
    isSelected: false,
  },
  userSelector: () => {},
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
});

UserCard.propTypes = {
  user: userShape.isRequired,
  userSelector: PropTypes.func,
};

export default UserCard;
