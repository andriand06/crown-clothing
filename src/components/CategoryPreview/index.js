import "./CategoryPreview.styles.scss";
import ProductCard from "../ProductCard";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-wrapper">
      <a href={`/shop/${title}`} className="title">
        {title.toUpperCase()}
      </a>
      <div className="product-cards-wrapper">
        {products
          .filter((_product, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
