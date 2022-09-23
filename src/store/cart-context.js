import React from "react";

const CartContex = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (id) => {},
  removeItem: (id) =>{}
});

export default CartContex;
