import { useSelector } from "react-redux";
import { getCategoriesMap } from "../store/categories/categories.selector";
import CategoryPreview from "../components/CategoryPreview";
const CategoriesPreview = () => {
  const categories = useSelector(getCategoriesMap);
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
