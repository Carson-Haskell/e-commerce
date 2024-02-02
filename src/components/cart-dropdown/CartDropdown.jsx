import Button from "../button/Button";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles.jsx";

import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
