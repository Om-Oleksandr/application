import React from "react";
import SubParent from "./../SubParent";
import CONSTANTS from "./../../../constants";
import { ThemeContext } from "../../../contexts";
const { THEMES } = CONSTANTS;
const Parent = (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme]) => {
        return (
          <div
            style={{
              backgroundColor: theme === THEMES.LIGHT ? "#FFF" : "#222",
              color: theme === THEMES.LIGHT ? "#222" : "#FFF",
            }}
          >
            <SubParent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Parent;
