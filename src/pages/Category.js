import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "../store/categories/categories.selector";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const Category = () => {
  const { category } = useParams();
  const categories = useSelector(getCategoriesMap);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <div className="category-wrapper">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Category;
