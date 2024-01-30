import { createContext, useState } from "react";

import React from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(CartContext);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const value = { isCartOpen, toggleCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
