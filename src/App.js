import React from "react";
import "./App.css";
// import UserSection from "./components/UserSection";
// import CiaoSection from './components/CiaoSection';
import Ciao from "./components/CiaoSection/Ciao/index";
import StopWatch from "./components/StopWatch";
// import UserCard from "./components/UserSection/UserCard/index";

const App = (props) => {
  return (
    <>
      <StopWatch />
      <Ciao name="qwerty" id="3" />
    </>
  );
};

export default App;
