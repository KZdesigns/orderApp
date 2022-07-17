import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <HeaderCard />
      <Menu />
    </React.Fragment>
  );
}

export default App;
