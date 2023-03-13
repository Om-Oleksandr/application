import React from "react";
import PropTypes from "prop-types";
import { userShape } from "./../UserCard/index";

const SelectedUsers = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  const selected = ({ id, firstName, lastName }) => (
    <li key={id}>
      {firstName} {lastName}
    </li>
  );
  return <ul>{selectedUsers.map(selected)} </ul>;
};

SelectedUsers.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired,
};

export default SelectedUsers;
