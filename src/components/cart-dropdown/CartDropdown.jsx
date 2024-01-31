import Button from "../button/Button";
import "./CartDropdown.styles.scss";

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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
