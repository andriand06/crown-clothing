import { useNavigate } from "react-router-dom";
import { Wrapper, BackgroundImage, CategoryBody } from "./CategoryItem.styles";
const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);
  return (
    <Wrapper onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBody>
    </Wrapper>
  );
};

export default CategoryItem;
