import React, { useContext } from "react";
import cx from "classnames";
import { LightMode, DarkMode } from "@mui/icons-material";
import { LangContext, ThemeContext, UserContext } from "./../../contexts";
import CONSTANTS from "../../constants";
import styles from "./Header.module.scss";
const { DEFAULT_LANG, AVAILABLE_LANGS } = CONSTANTS;

const Header = (props) => {
  const [lang, setLang] = useContext(LangContext);
  const { firstName } = useContext(UserContext);
  const [isLight, setIslight] = useContext(ThemeContext);
  const newLang =
    lang === DEFAULT_LANG ? AVAILABLE_LANGS[1] : AVAILABLE_LANGS[0];

  const headerClasses = cx(styles.header, {
    [styles.light]: isLight,
    [styles.dark]: !isLight,
  });
  return (
    <header className={headerClasses}>
      <h1>logo</h1>
      <span
        onClick={() => {
          setIslight(!isLight);
        }}
      >
        {isLight ? <DarkMode /> : <LightMode />}
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
  );
};

export default Header;
