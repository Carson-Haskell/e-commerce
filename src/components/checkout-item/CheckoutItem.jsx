import {
  CheckoutItemContainer,
  ImageContainer,
  ItemLabel,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutItem.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);

  const increaseQuantityHandler = () => increaseItemQuantity(cartItem);
  const decreaseQuantityHandler = () => decreaseItemQuantity(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemLabel>{name}</ItemLabel>
      <Quantity>
        <Arrow onClick={increaseQuantityHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={decreaseQuantityHandler}>&#10095;</Arrow>
      </Quantity>
      <ItemLabel>{price}</ItemLabel>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
