import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import Menu from "./components/Menu/Menu";
import CartModal from "./components/CartModal/CartModal";

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
  const SHOPPINGCART = [];

  // need to add the ability to create shoppingCart objects in the menuItem component
  // and be sure to add them to shopping cart array
  // addItem handler should add the item that is create in the menuItem component to the array

  const [cartItems, setCartItems] = useState(SHOPPINGCART);
  const [showModal, setShowModal] = useState();
  const [total, setTotal] = useState(0);

  const displayModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const order = () => {
    setShowModal(false);
    console.log(cartItems);
    console.log(total);
    setCartItems([]);
  };

  const addItemHandler = (menuItemSelected) => {
    let items = [menuItemSelected, ...cartItems];
    setCartItems(items);
    setTotal(total + parseInt(menuItemSelected.price));
  };

  return (
    <React.Fragment>
      {showModal && (
        <CartModal
          cartItems={cartItems}
          closeModal={closeModal}
          order={order}
          total={total}
        />
      )}
      <Navigation cartItems={cartItems} onConfirm={displayModal} />
      <Jumbotron />
      <HeaderCard />
      <Menu menuItems={menuItems} onAddItem={addItemHandler} />
    </React.Fragment>
  );
}

export default App;
