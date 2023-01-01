import { useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import CategoryPreview from "../components/CategoryPreview";
const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="categories-wrapper">
      {Object.keys(categories).map((title, index) => (
        <CategoryPreview
          title={title}
          products={categories[title]}
          key={index}
        />
      ))}
    </div>
  );
};

export default CategoriesPreview;
