import { createContext, useState } from "react";

import React from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  toggleCart: () => {},
  quantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const increaseItemQuantity = (productToIncrease) => {
    const nextCartItems = cartItems.map((item) =>
      item.id === productToIncrease.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
    setCartItems(nextCartItems);
  };

  const decreaseItemQuantity = (productToDecrease) => {
    const cartItem = cartItems.find((item) => item.id === productToDecrease.id);

    if (cartItem.quantity === 1) {
      removeItemFromCart(cartItem);
      return;
    }

    const nextCartItems = cartItems.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item,
    );

    setCartItems(nextCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const nextCartItems = cartItems.filter(
      (item) => item.id !== productToRemove.id,
    );

    setCartItems(nextCartItems);
  };

  const quantity = cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity,
    0,
  );

  const total = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0,
  );

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const value = {
    isCartOpen,
    toggleCart,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    quantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
