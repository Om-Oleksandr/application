import React from "react";
import UserProfile from "../UserProfile";
import { LangContext } from "./../../../contexts/index";
import CONSTANTS from "./../../../constants";
const { DEFAULT_LANG } = CONSTANTS;
const Child = (props) => {
  return (
    <LangContext.Consumer>
      {([lang]) => {
        return (
          <div style={{ padding: "10px" }}>
            <h2>
              {lang === DEFAULT_LANG ? "User profile" : "Профіль користувача"}
            </h2>
            <UserProfile />
          </div>
        );
      }}
    </LangContext.Consumer>
  );
};

export default Child;
