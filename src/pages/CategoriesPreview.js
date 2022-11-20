import { useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import CategoryPreview from "../components/CategoryPreview";
const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="categories-wrapper">
      {Object.keys(categories).map((title) => (
        <CategoryPreview title={title} products={categories[title]} />
      ))}
    </div>
  );
};

export default CategoriesPreview;
