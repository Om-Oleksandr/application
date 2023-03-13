import React, { Component } from "react";
import SelectedUsers from "./SelectedUsers";
import UserList from "./UserList";

const usersDB = [
  {
    id: 1,
    firstName: "Naruto",
    lastName: "Uzumaki",
  },
  {
    id: 2,
    firstName: "Goku",
    lastName: "Son",
  },
  {
    id: 3,
    firstName: "Gohan",
    lastName: "Son",
  },
  {
    id: 4,
    firstName: "Goten",
    lastName: "Son",
  },
  {
    id: 5,
    firstName: "Luffy",
    lastName: "Monkey D.",
  },
  {
    id: 6,
    firstName: "Tanjiro",
    lastName: "Kamado",
  },
];

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }

  setUsersSelected = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <UserList users={users} setUsersSelected={this.setUsersSelected} />
        <SelectedUsers users={users} />
      </>
    );
  }
}

export default UserSection;
