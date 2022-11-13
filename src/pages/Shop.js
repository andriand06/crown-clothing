import { useContext } from "react";
import { ProductContext } from "../contexts/product.context";
import ProductCard from "../components/ProductCard";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-cards-wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
