import React, { useState } from "react";
import "./App.css";
import { LangContext, ThemeContext, UserContext } from "./contexts";
import Header from "./components/Header";
import CONSTANTS from "./constants";
const { DEFAULT_LANG } = CONSTANTS;
const App = () => {
  const [user] = useState({
    id: 1,
    firstName: "Naruto",
    lastName: "Uzumaki",
  });
  const [isLight, setIslight] = useState(true);
  const [lang, setLang] = useState(DEFAULT_LANG);
  return (
    <LangContext.Provider value={[lang, setLang]}>
      <ThemeContext.Provider value={[isLight, setIslight]}>
        <UserContext.Provider value={user}>
            <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
};

export default App;
