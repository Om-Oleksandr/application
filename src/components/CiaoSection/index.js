import React, { Component } from "react";
import CiaoList from "./CiaoList/index";
import CiaoControls from "./CiaoControls/index";
class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 10,
          firstName: "John",
          lastName: "Doe",
        },
        {
          id: 7,
          firstName: "Naruto",
          lastName: "Uzumaki",
        },
        {
          id: 3,
          firstName: "Goku",
          lastName: "Son",
        },
        {
          id: 12,
          firstName: "Luffy",
          lastName: "Monkey D.",
        },
      ],
    };
  }

  setNewState = (newUsers) => {
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <CiaoControls users={users} setNewState={this.setNewState} />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
