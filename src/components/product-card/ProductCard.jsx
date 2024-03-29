import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";
import Button from "../button/Button";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>

      <Button onClick={addProductToCart} buttonType="inverted">
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
