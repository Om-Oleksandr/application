import React from "react";
import PropTypes from "prop-types";
import UserCard from "./../UserCard";

const UsersList = (props) => {
  const mapUsers = (user) => (
    <li
      key={user.login.uuid}
      style={{
        display: "inline-block",
        padding: "10px",
        border: "1px solid blueviolet",
        margin: "10px",
      }}
    >
      <UserCard user={user} />
    </li>
  );
  const { users } = props;
  return <ul>{users.map(mapUsers)}</ul>;
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersList;
