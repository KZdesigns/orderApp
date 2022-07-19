import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import Menu from "./components/Menu/Menu";

function App() {
  // create menue item objects
  const itemOne = {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    cost: 10.0,
    amount: 1,
  };
  const itemTwo = {
    id: 2,
    name: "Pizza",
    description: "Super cheesy super fresh",
    cost: 21.99,
    amount: 1,
  };
  const itemThree = {
    id: 3,
    name: "Greek Salad",
    description: "Best olives and dressing ever",
    cost: 7.99,
    amount: 1,
  };
  const itemFour = {
    id: 4,
    name: "Fried Chicken",
    description: "Finger licking good",
    cost: 16.0,
    amount: 1,
  };
  const itemFive = {
    id: 5,
    name: "Hamburger",
    description: "Juicy 100% beef",
    cost: 12.5,
    amount: 1,
  };
  const itemSix = {
    id: 6,
    name: "Sandwhich",
    description: "With turkey and avocado",
    cost: 9.5,
    amount: 1,
  };
  // create array of menu item objects
  const menuItems = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];

  //create state for cartItems
  const [cartItems, setCartItems] = useState(0);

  const addItemHandler = (number) => {
    let count = cartItems;
    count += number;
    setCartItems(count);
    console.log("Add Item!! " + count);
  };

  return (
    <React.Fragment>
      <Navigation cartItemCount={cartItems} />
      <Jumbotron />
      <HeaderCard />
      <Menu menuItems={menuItems} onAddItem={addItemHandler} />
    </React.Fragment>
  );
}

export default App;
