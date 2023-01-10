import { useSelector, useDispatch } from "react-redux";
import "./ProductCard.styles.scss";
import Button from "../Button";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const addToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt={name}></img>
      <Button
        name="addtocart"
        label="Add To Cart"
        className="add-to-cart"
        onClick={addToCart}
      />
      <div className="card-description">
        <span className="name">{name}</span>{" "}
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
