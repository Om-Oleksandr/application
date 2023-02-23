import React from "react";
import Ciao from "../Ciao";

const CiaoList = (props) => {
  const createUser = (user) => {
    return (
      <Ciao
        key={user.id}
        id={user.id}
        classStyle="welcome"
        name={user.firstName + " " + user.lastName}
      />
    );
  };
  const { users } = props;
  return <>{users.map(createUser)}</>;
};

export default CiaoList;
