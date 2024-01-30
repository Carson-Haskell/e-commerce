import Button from "../button/Button";
import "./CartDropdown.styles.scss";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/CartItem";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>
        <a href="/cart">Go to Checkout</a>
      </Button>
    </div>
  );
};

export default CartDropdown;
