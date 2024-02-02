import {
  CategoryContainer,
  Title,
  Preview,
} from "./CategoryPreview.styles.jsx";
import ProductCard from "../product-card/ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryContainer>
  );
};

export default CategoryPreview;
