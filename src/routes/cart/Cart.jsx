import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../../components/cart-item/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
