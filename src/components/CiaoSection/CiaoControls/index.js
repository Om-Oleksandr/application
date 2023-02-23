import React, { Component } from "react";
import CiaoControl from "./../CiaoControl/index";

class CiaoControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDirectionGrowthById: true,
      isAlpabeticalStart: true,
      isAlpabeticalFirstNameStart: true,
    };
  }

  sortById = () => {
    const { isDirectionGrowthById } = this.state;
    const { users, setNewState } = this.props;

    const newUsers = [...users];
    newUsers.sort((a, b) =>
      isDirectionGrowthById ? a.id - b.id : b.id - a.id
    );
    this.setState({ isDirectionGrowthById: !isDirectionGrowthById });
    setNewState(newUsers);
  };
  sortByName = () => {
    const { isAlpabeticalFirstNameStart } = this.state;
    const { users, setNewState } = this.props;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isAlpabeticalFirstNameStart ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isAlpabeticalFirstNameStart ? -1 : 1;
      }
      return 0;
    });
    this.setState({
      isAlpabeticalFirstNameStart: !isAlpabeticalFirstNameStart,
    });
    setNewState(newUsers);
  };

  sortByLastName = () => {
    const { isAlpabeticalLastNameStart } = this.state;
    const { users, setNewState } = this.props;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return isAlpabeticalLastNameStart ? 1 : -1;
      }
      if (a.lastName < b.lastName) {
        return isAlpabeticalLastNameStart ? -1 : 1;
      }
      return 0;
    });
    this.setState({ isAlpabeticalLastNameStart: !isAlpabeticalLastNameStart });
    setNewState(newUsers);
  };
  render() {
    const {
      isDirectionGrowthById,
      isAlpabeticalFirstNameStart,
      isAlpabeticalLastNameStart,
    } = this.state;
    return (
      <>
        <CiaoControl
          sortType="id"
          direction={isDirectionGrowthById}
          sortFunc={this.sortById}
        />
        <CiaoControl
          sortType="name"
          direction={isAlpabeticalFirstNameStart}
          sortFunc={this.sortByName}
        />
        <CiaoControl
          sortType="last name"
          direction={isAlpabeticalLastNameStart}
          sortFunc={this.sortByLastName}
        />
      </>
    );
  }
}

export default CiaoControls;
