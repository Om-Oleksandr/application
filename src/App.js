import React, { Component } from "react";
import "./App.css";
import Tree from "./components/Tree";
import { UserContext, ThemeContext, LangContext } from "./contexts/index";
import Header from "./components/Header";
import CONSTANTS from "./constants";

const { THEMES, DEFAULT_LANG } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
      },
      theme: THEMES.DARK,
      lang: DEFAULT_LANG,
    };
  }

  setTheme = (theme) => {
    this.setState({ theme });
  };

  setLang = (lang) => {
    this.setState({ lang });
  };

  render() {
    const { user, theme, lang } = this.state;
    console.log(UserContext);
    return (
      <LangContext.Provider value={[lang, this.setLang]}>
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <UserContext.Provider value={user}>
            <Header />
            <Tree />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </LangContext.Provider>
    );
  }
}

export default App;
