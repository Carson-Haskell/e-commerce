import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./CartIcon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { toggleCart, quantity } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{quantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
