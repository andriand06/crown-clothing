import CategoryItem from "../../components/CategoryItem";
import "./Directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((e) => (
        <CategoryItem key={e.id} category={e} />
      ))}
    </div>
  );
};

export default Directory;
