import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import HeaderCard from "./components/HeaderCard/HeaderCard";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <HeaderCard />
    </React.Fragment>
  );
}

export default App;
