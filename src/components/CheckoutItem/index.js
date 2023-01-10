import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeItem,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./CheckoutItem.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, qty, price } = cartItem;
  const clearItemHandler = () => dispatch(removeItem(cartItems, cartItem));
  const incrementHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div className="quantity">
        <span className="decrement" onClick={decrementHandler}>
          &#10094;
        </span>
        <span>{qty}</span>
        <span className="increment" onClick={incrementHandler}>
          &#10095;
        </span>
      </div>
      <h2 className="price">{price}</h2>
      <span className="remove" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;
