import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import Menu from "./components/Menu/Menu";

function App() {
  const itemOne = {
    name: "Sushi",
    description: "Finest fish and veggies",
    cost: 10.0,
    amount: 1,
  };
  const itemTwo = {
    name: "Pizza",
    description: "Super cheesy super fresh",
    cost: 21.99,
    amount: 1,
  };
  const itemThree = {
    name: "Greek Salad",
    description: "Best olives and dressing ever",
    cost: 7.99,
    amount: 1,
  };
  const itemFour = {
    name: "Fried Chicken",
    description: "Finger licking good",
    cost: 16.0,
    amount: 1,
  };
  const itemFive = {
    name: "Hamburger",
    description: "Juicy 100% beef",
    cost: 12.5,
    amount: 1,
  };
  const itemSix = {
    name: "Sandwhich",
    description: "With turkey and avocado",
    cost: 9.5,
    amount: 1,
  };

  const menuItems = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];

  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <HeaderCard />
      <Menu menuItems={menuItems} />
    </React.Fragment>
  );
}

export default App;
