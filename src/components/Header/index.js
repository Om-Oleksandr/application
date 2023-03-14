import React, { Component } from "react";
import cx from "classnames";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ThemeContext, UserContext, LangContext } from "./../../contexts";
import CONSTANTS from "../../constants";
import styles from "./Header.module.scss";
const { THEMES, DEFAULT_LANG, AVAILABLE_LANGS } = CONSTANTS;
const Header = () => {
  return (
    <LangContext.Consumer>
      {([lang, setLang]) => {
        const newLang =
          lang === DEFAULT_LANG ? AVAILABLE_LANGS[1] : AVAILABLE_LANGS[0];
        return (
          <ThemeContext.Consumer>
            {([theme, setTheme]) => {
              const headerClasses = cx(styles.header, {
                [styles.light]: theme === THEMES.LIGHT,
                [styles.dark]: theme === THEMES.DARK,
              });
              const newTheme =
                theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
              return (
                <UserContext.Consumer>
                  {({ firstName }) => (
                    <header className={headerClasses}>
                      <h1>logo</h1>
                      <span
                        onClick={() => {
                          setTheme(newTheme);
                        }}
                      >
                        {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
                      </span>
                      <span
                        onClick={() => {
                          setLang(newLang);
                        }}
                      >
                        {lang === DEFAULT_LANG ? "ENG" : "UKR"}
                      </span>
                      <div>
                        {lang === DEFAULT_LANG ? "hi" : "привіт"}, {firstName}
                      </div>
                    </header>
                  )}
                </UserContext.Consumer>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </LangContext.Consumer>
  );
};

// Header.contextType = UserContext;

export default Header;
