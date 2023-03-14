import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { ThemeContext, UserContext } from "./../../../contexts";
import styles from "./UserProfile.module.scss";
import CONSTANTS from "./../../../constants";
const { THEMES } = CONSTANTS;
const UserProfile = (props) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const profileClasses = cx(styles.article, {
          [styles.light]: theme === THEMES.LIGHT,
          [styles.dark]: theme === THEMES.DARK,
        });
        return (
          <UserContext.Consumer>
            {({ id, firstName, lastName }) => (
              <article className={profileClasses}>
                <h3>
                  <em>{id}) </em>
                  {firstName} {lastName}
                </h3>
              </article>
            )}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

UserProfile.defaultProps = {
  user: {
    id: 0,
    firstName: "no name",
    lastName: "no name",
  },
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
});

UserProfile.propTypes = {
  user: userShape.isRequired,
  userSelector: PropTypes.func,
};

export default UserProfile;
